// Customizations for the Education "Assessment Result Tool".
//
// Template mirrors education/public/js/assessment_result_tool.html with one
// extra trailing column for the percentage (score / max total * 100).
const NL_ASSESSMENT_RESULT_TEMPLATE = `
<table class="table table-bordered assessment-result-tool">
	<thead>
		<tr>
			<th style="width: 90px" rowspan="2">Student</th>
			<th style="width: 170px" rowspan="2">Student Name</th>
			{% for c in criteria %}
			<th class="score" style="width: 100px">{{ c.assessment_criteria }}</th>
			{% endfor %}
			<th class="score" style="width: 170px" rowspan="2">Comments</th>
			<th class="score" style="width: 100px">Total Marks</th>
			<th class="score" style="width: 90px" rowspan="2">Out of 100</th>
		</tr>
		<tr>
			{% for c in criteria %}
			<th class="score" style="width: 100px">Score ({{ c.maximum_score }})</th>
			{% endfor %}
			<th class="score" style="width: 100px">Score ({{max_total_score}})</th>
		</tr>
	</thead>
	<tbody>
		{% for s in students %}
		<tr
			{% if(s.assessment_details && s.docstatus && s.docstatus == 1) { %} class="text-muted" {% } %}
			data-student="{{s.student}}">

			<td>{{ s.student }}</td>
			<td>{{ s.student_name }}</td>
			{% for c in criteria %}
			<td class="assessment-criteria" data-criteria-index="{{c._index}}">
				<span data-student="{{s.student}}" data-criteria="{{c.assessment_criteria}}" class="student-result-grade badge" >
					{% if(s.assessment_details) { %}
						{{s.assessment_details[c.assessment_criteria][1]}}
					{% } %}
				</span>
				<input type="number" class="student-result-data" style="width:70%; float:right;"
					data-max-score="{{c.maximum_score}}"
					data-criteria="{{c.assessment_criteria}}"
					data-student="{{s.student}}"
					{% if(s.assessment_details && s.docstatus && s.docstatus == 1) { %} disabled {% } %}
					{% if(s.assessment_details) { %}
						value="{{s.assessment_details[c.assessment_criteria][0]}}"
					{% } %}/>
			</td>
			{% endfor %}
			<td>
				<input type="text" class="result-comment" data-student="{{s.student}}"
				{% if(s.assessment_details && s.docstatus && s.docstatus == 1) { %} disabled {% } %}
				{% if(s.assessment_details) { %}
					value="{{s.assessment_details.comment}}"
				{% } %}
			</td>
			<td>
				<span data-student="{{s.student}}" class="total-score-grade badge" style="width:30%; float:left;">
				{% if(s.assessment_details) { %}
				{{s.assessment_details.total_score[1]}}
				{% } %}
				</span>
				<span data-student="{{s.student}}" class="total-score" style="width:60%; float:center;">
				{% if(s.assessment_details) { %}
				{{s.assessment_details.total_score[0]}}
				{% } %}
				</span>
				<span data-student="{{s.student}}" class="total-result-link" style="width: 10%; display:{% if(!s.assessment_details) { %}None{% } %}; float:right;">
					<a class="btn-open no-decoration" title="Open Link" href="/app/Form/Assessment Result/{% if(s.assessment_details) { %}{{s.name}}{% } %}">
						<i class="octicon octicon-arrow-right"></i>
					</a>
				</span>
			</td>
			<td>
				<span data-student="{{s.student}}" class="total-percentage badge">
				{% if(s.assessment_details && max_total_score) { %}
				{{ Math.round((s.assessment_details.total_score[0] / max_total_score) * 1000) / 10 }}%
				{% } %}
				</span>
			</td>
		</tr>
		{% endfor %}
	</tbody>
</table>`;

function nl_percentage(score, max_total) {
	if (!max_total) return '';
	return Math.round((score / max_total) * 1000) / 10 + '%';
}

frappe.ui.form.on('Assessment Result Tool', {
	onload: function (frm) {
		frm.set_query('assessment_plan', function () {
			return {
				filters: {
					status: 'Open',
				},
			};
		});
	},

	// Overrides Education's get_marks: same behaviour, plus the "Out of 100" column.
	get_marks: function (frm, criteria_list) {
		let max_total_score = 0;
		criteria_list.forEach(function (c) {
			max_total_score += c.maximum_score;
		});

		var result_table = $(
			frappe.render_template(NL_ASSESSMENT_RESULT_TEMPLATE, {
				frm: frm,
				students: frm.doc.students,
				criteria: criteria_list,
				max_total_score: max_total_score,
			}),
		);
		result_table.appendTo(frm.fields_dict.result_html.wrapper);

		$('.assessment-criteria').on('keydown', function (e) {
			let criteriaIndex = cint(
				e.target.parentElement.getAttribute('data-criteria-index'),
			);
			changeFocusToNextCell(e, 2 + criteriaIndex);
		});

		$('.result-comment').on('keydown', function (e) {
			changeFocusToNextCell(e, 5);
		});

		function changeFocusToNextCell(e, cellIndex) {
			if (e.keyCode === 13 && !e.shiftKey) {
				let nextRow =
					e.target.parentElement.parentElement.nextElementSibling;
				if (nextRow) {
					nextRow.cells[cellIndex].lastElementChild.focus();
				}
			}
			if (e.keyCode === 13 && e.shiftKey) {
				let prevRow =
					e.target.parentElement.parentElement.previousElementSibling;
				if (prevRow) {
					prevRow.cells[cellIndex].lastElementChild.focus();
				}
			}
		}

		result_table.on('change', 'input', function (e) {
			let $input = $(e.target);
			let student = $input.data().student;
			let max_score = $input.data().maxScore;
			let value = $input.val();
			if (value < 0) {
				$input.val(0);
			} else if (value > max_score) {
				$input.val(max_score);
			}
			let total_score = 0;
			let student_scores = {};
			student_scores['assessment_details'] = {};
			result_table
				.find(`input[data-student=${student}].student-result-data`)
				.each(function (el, input) {
					let $input = $(input);
					let criteria = $input.data().criteria;
					let value = parseFloat($input.val());
					if (!Number.isNaN(value)) {
						student_scores['assessment_details'][criteria] = value;
					}
					total_score += value;
				});
			if (!Number.isNaN(total_score)) {
				result_table
					.find(`span[data-student=${student}].total-score`)
					.html(total_score);
				result_table
					.find(`span[data-student=${student}].total-percentage`)
					.html(nl_percentage(total_score, max_total_score));
			}
			if (
				Object.keys(student_scores['assessment_details']).length ===
				criteria_list.length
			) {
				student_scores['student'] = student;
				student_scores['total_score'] = total_score;
				result_table
					.find(`[data-student=${student}].result-comment`)
					.each(function (el, input) {
						student_scores['comment'] = $(input).val();
					});
				frappe.call({
					method: 'education.education.api.mark_assessment_result',
					args: {
						assessment_plan: frm.doc.assessment_plan,
						scores: student_scores,
					},
					callback: function (r) {
						let assessment_result = r.message;
						if (!frm.doc.show_submit) {
							frm.doc.show_submit = true;
							frm.events.submit_result;
						}
						for (var criteria of Object.keys(
							assessment_result.details,
						)) {
							result_table
								.find(
									`[data-criteria=${criteria}][data-student=${assessment_result.student}].student-result-grade`,
								)
								.each(function (e1, input) {
									$(input).html(
										assessment_result.details[criteria],
									);
								});
						}
						result_table
							.find(
								`span[data-student=${assessment_result.student}].total-score-grade`,
							)
							.html(assessment_result.grade);
						let link_span = result_table.find(
							`span[data-student=${assessment_result.student}].total-result-link`,
						);
						$(link_span).css('display', 'block');
						$(link_span)
							.find('a')
							.attr(
								'href',
								'/app/assessment-result/' +
									assessment_result.name,
							);
					},
				});
			}
		});
	},
});
