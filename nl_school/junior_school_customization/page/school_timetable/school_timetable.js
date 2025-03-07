frappe.pages['school-timetable'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'School Timetable',
        single_column: true
    });

	$(page.body).append(`
        <div class="text-center p-3">
            <button class="btn btn-primary" id="btn-home">Home</button>
            <button class="btn btn-secondary" id="btn-teacher">Teacher</button>
            <button class="btn btn-secondary" id="btn-stream">Stream</button>
            <input type="text" id="search-input" class="form-control d-none mt-2" placeholder="Enter Teacher or Stream">
        </div>
        <div id="calendar"></div>
    `);

    let css_link = document.createElement('link');
    css_link.rel = 'stylesheet';
    css_link.href = 'https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css';
    document.head.appendChild(css_link);

    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js';
    script.onload = render_calendar;
    document.head.appendChild(script);

	let calendar; 

    function render_calendar(filter_by = "home", filter_value = "") {
        let calendarEl = document.getElementById('calendar');

        if (calendar) {
            calendar.destroy();
        }

        calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            slotMinTime: "06:00:00",
            slotMaxTime: "18:00:00",
            allDaySlot: false,
            nowIndicator: true,
            events: function(fetchInfo, successCallback, failureCallback) {
                frappe.call({
                    method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
                    args: {},
                    callback: function(response) {

                        let events = response.message
                            .filter(event => {
                                if (filter_by === "teacher") {
                                    return event.instructor.toLowerCase().includes(filter_value.toLowerCase());
                                } else if (filter_by === "stream") {
                                    return event.student_group.toLowerCase().includes(filter_value.toLowerCase());
                                }
                                return true; 
                            })
                            .map(event => ({
                                id: event.name,
                                title: `${event.course} - ${event.instructor}`,
                                start: `${event.schedule_date}T${event.from_time}`,
                                end: `${event.schedule_date}T${event.to_time}`,
                                backgroundColor: "#007bff",
                            }));
                        successCallback(events);
                    }
                });
            }
        });

        calendar.render();
    }

	  document.getElementById('btn-home').addEventListener('click', function () {
        document.getElementById('search-input').classList.add('d-none');
        render_calendar("home");
    });

	document.getElementById('btn-teacher').addEventListener('click', function () {
        let searchInput = document.getElementById('search-input');
        searchInput.classList.remove('d-none');
        searchInput.placeholder = "Enter Teacher's Name";
        searchInput.value = "";
        searchInput.dataset.filter = "teacher";
    });

	document.getElementById('btn-stream').addEventListener('click', function () {
        let searchInput = document.getElementById('search-input');
        searchInput.classList.remove('d-none');
        searchInput.placeholder = "Enter Stream Name";
        searchInput.value = "";
        searchInput.dataset.filter = "stream";
    });

    document.getElementById('search-input').addEventListener('input', function () {
        let filter_type = this.dataset.filter;
        let filter_value = this.value.trim();
        render_calendar(filter_type, filter_value);
    });


};


// frappe.pages['school-timetable'].on_page_load = function(wrapper) {
//     var page = frappe.ui.make_app_page({
//         parent: wrapper,
//         title: 'School Timetable',
//         single_column: true
//     });

//     // Add a container for the calendar
//     $(page.body).append(`
//         <div class="text-center p-3">
//             <button class="btn btn-primary" id="btn-home">Home</button>
//             <button class="btn btn-secondary" id="btn-teacher">Teacher</button>
//             <button class="btn btn-secondary" id="btn-stream">Stream</button>
//             <input type="text" id="search-input" class="form-control d-none mt-2" placeholder="Enter Teacher or Stream">
//             <button class="btn btn-success d-none mt-2" id="btn-print">Print Timetable</button>
//         </div>
//         <div id="calendar"></div>
//         <div id="printable-timetable" class="d-none"></div>
//     `);

//     let calendar; // Store the calendar instance
//     let selectedFilter = null; // Track selected filter (teacher/stream)
//     let selectedValue = ""; // Track entered value

//     function render_calendar(filter_by = "home", filter_value = "") {
//         let calendarEl = document.getElementById('calendar');

//         // Destroy previous calendar instance if exists
//         if (calendar) {
//             calendar.destroy();
//         }

//         calendar = new FullCalendar.Calendar(calendarEl, {
//             initialView: 'timeGridWeek',
//             headerToolbar: {
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             },
//             slotMinTime: "06:00:00",
//             slotMaxTime: "18:00:00",
//             allDaySlot: false,
//             nowIndicator: true,
//             events: function(fetchInfo, successCallback, failureCallback) {
//                 frappe.call({
//                     method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
//                     args: {},
//                     callback: function(response) {
//                         let events = response.message
//                             .filter(event => {
//                                 if (filter_by === "teacher") {
//                                     return event.instructor.toLowerCase().includes(filter_value.toLowerCase());
//                                 } else if (filter_by === "stream") {
//                                     return event.stream.toLowerCase().includes(filter_value.toLowerCase());
//                                 }
//                                 return true; // Show all events by default
//                             })
//                             .map(event => ({
//                                 id: event.name,
//                                 title: `${event.course} - ${event.instructor}`,
//                                 start: `${event.schedule_date}T${event.from_time}`,
//                                 end: `${event.schedule_date}T${event.to_time}`,
//                                 backgroundColor: "#007bff",
//                             }));
//                         successCallback(events);
//                     }
//                 });
//             }
//         });

//         calendar.render();
//     }

//     // Button Click Handlers
//     document.getElementById('btn-home').addEventListener('click', function () {
//         document.getElementById('search-input').classList.add('d-none');
//         document.getElementById('btn-print').classList.add('d-none');
//         selectedFilter = null;
//         // render_calendar("home");
//     });

//     document.getElementById('btn-teacher').addEventListener('click', function () {
//         let searchInput = document.getElementById('search-input');
//         searchInput.classList.remove('d-none');
//         searchInput.placeholder = "Enter Teacher's Name";
//         searchInput.value = "";
//         searchInput.dataset.filter = "teacher";
//         document.getElementById('btn-print').classList.add('d-none');
//     });

//     document.getElementById('btn-stream').addEventListener('click', function () {
//         let searchInput = document.getElementById('search-input');
//         searchInput.classList.remove('d-none');
//         searchInput.placeholder = "Enter Stream Name";
//         searchInput.value = "";
//         searchInput.dataset.filter = "stream";
//         document.getElementById('btn-print').classList.add('d-none');
//     });

//     // Search Input Handler
//     document.getElementById('search-input').addEventListener('input', function () {
//         let filter_type = this.dataset.filter;
//         let filter_value = this.value.trim();
//         selectedFilter = filter_type;
//         selectedValue = filter_value;

//         if (filter_value) {
//             document.getElementById('btn-print').classList.remove('d-none'); // Show print button
//         } else {
//             document.getElementById('btn-print').classList.add('d-none'); // Hide print button
//         }

//         render_calendar(filter_type, filter_value);
//     });

//     // Print Button Handler
//     document.getElementById('btn-print').addEventListener('click', function () {
//         generatePrintableTimetable(selectedFilter, selectedValue);
//     });

//     function generatePrintableTimetable(filter_type, filter_value) {
//         frappe.call({
//             method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
//             args: { [filter_type]: filter_value },
//             callback: function(response) {
//                 let schedules = response.message;

//                 let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//                 let timeSlots = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]; // Customize as needed

//                 let tableHTML = `
//                     <h3 class="text-center">${filter_value} Timetable</h3>
//                     <table class="table table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Day</th>
//                                 ${timeSlots.map(time => `<th>${time}</th>`).join("")}
//                             </tr>
//                         </thead>
//                         <tbody>
//                 `;

//                 weekdays.forEach(day => {
//                     tableHTML += `<tr><td>${day}</td>`;

//                     timeSlots.forEach(time => {
//                         let matchedSchedule = schedules.find(schedule =>
//                             new Date(schedule.schedule_date).toLocaleString('en-us', { weekday: 'long' }) === day &&
//                             schedule.from_time.startsWith(time.split(" ")[0])
//                         );

//                         tableHTML += `<td>${matchedSchedule ? `${matchedSchedule.course} (${matchedSchedule.stream})` : ""}</td>`;
//                     });

//                     tableHTML += `</tr>`;
//                 });

//                 tableHTML += `</tbody></table>`;

//                 let printableDiv = document.getElementById('printable-timetable');
//                 printableDiv.innerHTML = tableHTML;
//                 printableDiv.classList.remove('d-none');

//                 printTimetable();
//             }
//         });
//     }

//     function printTimetable() {
//         let printContent = document.getElementById('printable-timetable').innerHTML;
//         let newWindow = window.open("", "", "width=800,height=600");
//         newWindow.document.write(`
//             <html>
//             <head>
//                 <title>School Timetable</title>
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
//             </head>
//             <body class="container mt-3">
//                 ${printContent}
//             </body>
//             </html>
//         `);
//         newWindow.document.close();
//         newWindow.print();
//     }
// };

