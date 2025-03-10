frappe.pages['school-timetable'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'School Timetable',
        single_column: true
    });

    $(page.body).append(`
        <div style="position: absolute; top: 10px; right: 20px;">
            <button class="btn btn-success" id="btn-print">Print</button>
        </div>

        <div class="text-center p-3">
            <button class="btn btn-primary" id="btn-home">Home</button>
            <button class="btn btn-secondary" id="btn-teacher">Teacher</button>
            <button class="btn btn-secondary" id="btn-stream">Streams</button>
            <input type="text" id="search-input" class="form-control d-none mt-2" placeholder="Enter Teacher or Stream">
        </div>
        <div id="calendar"></div>
        <div id="printable-timetable" class="d-none"></div>
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
    let selectedFilter = null;
    let selectedValue = "";

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
            slotDuration: '00:45:00',
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
                                backgroundColor: event.course.includes("Break") || event.course.includes("Lunch") ? "#f8d7da" : "#007bff",
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
        selectedFilter = filter_type;
        selectedValue = filter_value;
        render_calendar(filter_type, filter_value);
    });

    document.getElementById('btn-print').addEventListener('click', function () {
        generatePrintableTimetable(selectedFilter, selectedValue);
    });

    function generatePrintableTimetable(filter_type, filter_value) {
        frappe.call({
            method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
            args: { [filter_type]: filter_value },
            callback: function(response) {
                let schedules = response.message;
        
                let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                let timeSlots = [
                    { start: "8:00 AM", end: "8:15 AM" }, 
                    { start: "8:15 AM", end: "9:00 AM" }, 
                    { start: "9:00 AM", end: "9:45 AM" }, 
                    { start: "9:45 AM", end: "10:30 AM" },
                    { start: "10:30 AM", end: "11:15 AM" }, 
                    { start: "11:15 AM", end: "12:00 PM" }, 
                    { start: "12:00 PM", end: "12:45 PM" },
                    { start: "12:45 PM", end: "2:00 PM" },
                    { start: "2:00 PM", end: "2:45 PM" }, 
                    { start: "2:45 PM", end: "3:30 PM" },
                    { start: "3:30 PM", end: "4:15 PM" }  
                ];
    
                let showInstructor = filter_type === "stream";
    
                let tableHTML = `
                    <h3 class="text-center">${filter_value} Timetable</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Day</th>
                                ${timeSlots.map(slot => `<th>${slot.start} - ${slot.end}</th>`).join("")}
                            </tr>
                        </thead>
                        <tbody>
                `;
    
                weekdays.forEach(day => {
                    tableHTML += `<tr><td>${day}</td>`;
    
                    timeSlots.forEach(slot => {
                        let matchedSchedule = schedules.find(schedule => {
                            let scheduleDay = new Date(schedule.schedule_date).toLocaleDateString('en-US', { weekday: 'long' }).trim();
                            let scheduleTime = convertTo12HourFormat(schedule.from_time);
    
                            return scheduleDay === day && scheduleTime === slot.start;
                        });
    
                        if (matchedSchedule) {
                            let displayText = showInstructor 
                                ? `${matchedSchedule.course} - <span style="color: blue;">${matchedSchedule.instructor}</span>`
                                : matchedSchedule.course;
                        
                            tableHTML += `<td>${displayText}</td>`;
                                                
                        } else if (slot.start === "8:00 AM" || slot.start === "10:30 AM" || slot.start === "12:45 PM") {
                            tableHTML += `<td><strong>${slot.start === "8:00 AM" ? "Breakfast" : slot.start === "10:30 AM" ? "Break" : "Lunch"}</strong></td>`;
                        } else {
                            tableHTML += `<td></td>`;
                        }
                    });
    
                    tableHTML += `</tr>`;
                });
    
                tableHTML += `</tbody></table>`;
    
                let printableDiv = document.getElementById('printable-timetable');
                printableDiv.innerHTML = tableHTML;
                printableDiv.classList.remove('d-none');
                printTimetable();
            }
        });
    }
    
      // ✅ Function to convert time to 12-hour format
      function convertTo12HourFormat(timeString) {
        let timeParts = timeString.split(":");
        let hours = parseInt(timeParts[0], 10);
        let minutes = timeParts.length > 1 ? timeParts[1] : "00";
    
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; 
        return `${hours}:${minutes} ${period}`;
    }
    
    
    // ✅ Print function remains the same
    function printTimetable() {
        let printContent = document.getElementById('printable-timetable').innerHTML;
        let newWindow = window.open("", "", "width=1000,height=800");
        newWindow.document.write(`
            <html>
            <head>
                <title>School Timetable</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            </head>
            <body class="container mt-3">
                ${printContent}
            </body>
            </html>
        `);
        newWindow.document.close();
        newWindow.print();
    }
}
