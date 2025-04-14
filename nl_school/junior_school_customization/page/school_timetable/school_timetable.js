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
    
        <div class="text-center p-3";">
            <div class="d-flex flex-wrap justify-content-center gap-2 mt-2">
                <div class="form-group mr-2" style="min-width: 150px;">
                    <select id="level-dropdown" class="form-control">
                        <option value="">All Levels</option>
                        <option value="pre-primary">Pre-Primary</option>
                        <option value="primary">Primary</option>
                    </select>
                </div>
                
                <div class="form-group mr-2" style="min-width: 150px;">
                    <select id="teacher-dropdown" class="form-control">
                        <option value="">All Teachers</option>
                    </select>
                </div>
                
                <div class="form-group mr-2" style="min-width: 150px;">
                    <select id="stream-dropdown" class="form-control">
                        <option value="">All Streams</option>
                    </select>
                </div>
                
                <div>
                    <button class="btn btn-primary" id="btn-reset">Clear Filters</button>
                </div>
            </div>
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
    let selectedLevel = "";

    let customStyles = document.createElement('style');
customStyles.innerHTML = `
    /* Increase time row height */
    .fc-timegrid-slot {
        height: 60px !important; /* Adjust this value to your preference */
    }
`;
document.head.appendChild(customStyles);

    // Fetch teachers and populate dropdown
    frappe.call({
        method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_teachers",
        callback: function(response) {
            let teacherDropdown = $("#teacher-dropdown");
            response.message.forEach(teacher => {
                teacherDropdown.append(`<option value="${teacher.value}">${teacher.label}</option>`);
            });
        }
    });

    // Fetch streams and populate dropdown
    frappe.call({
        method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_streams",
        callback: function(response) {
            let streamDropdown = $("#stream-dropdown");
            response.message.forEach(stream => {
                streamDropdown.append(`<option value="${stream.value}">${stream.label}</option>`);
            });
        }
    });

    function render_calendar(filter_by = null, filter_value = "") {
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
                            if (filter_by === "instructor" && filter_value) {
                                return event.instructor.toLowerCase().includes(filter_value.toLowerCase());
                            } else if (filter_by === "stream" && filter_value) {
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

    // Reset button
    $("#btn-reset").on("click", function() {
        $("#level-dropdown").val("");
        $("#teacher-dropdown").val("");
        $("#stream-dropdown").val("");
        selectedLevel = "";
        selectedFilter = null;
        selectedValue = "";
        render_calendar();
    });

    // Event listener for level dropdown
    $("#level-dropdown").on("change", function() {
        selectedLevel = $(this).val();
    });

    // Event listener for teacher dropdown
    $("#teacher-dropdown").on("change", function() {
        let selectedTeacher = $(this).val();
        if (selectedTeacher) {
            selectedFilter = "instructor";
            selectedValue = selectedTeacher;
            // Reset stream dropdown to avoid conflicting filters
            $("#stream-dropdown").val("");
        } else {
            selectedFilter = null;
            selectedValue = "";
        }
        render_calendar(selectedFilter, selectedValue);
    });

    // Event listener for stream dropdown
    $("#stream-dropdown").on("change", function() {
        let selectedStream = $(this).val();
        if (selectedStream) {
            selectedFilter = "stream";
            selectedValue = selectedStream;
            // Reset teacher dropdown to avoid conflicting filters
            $("#teacher-dropdown").val("");
        } else {
            selectedFilter = null;
            selectedValue = "";
        }
        render_calendar(selectedFilter, selectedValue);
    });

    document.getElementById('btn-print').addEventListener('click', function() {
        generatePrintableTimetable(selectedFilter, selectedValue);
    });

    // function generatePrintableTimetable(filter_type, filter_value) {
    //     frappe.call({
    //         method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
    //         args: { [filter_type]: filter_value },
    //         callback: function(response) {
    //             let schedules = response.message;
        
    //             let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    //             // Pre-Primary time slots
    //             let prePrimaryTimeSlots = [
    //                 { start: "7:40 AM", end: "8:15 AM", label: "Breakfast" }, 
    //                 { start: "8:15 AM", end: "9:00 AM" }, 
    //                 { start: "9:00 AM", end: "9:45 AM" }, 
    //                 { start: "9:45 AM", end: "10:30 AM", label: "First Break" },
    //                 { start: "10:30 AM", end: "11:15 AM" }, 
    //                 { start: "11:15 AM", end: "11:30 AM" }, 
    //                 { start: "11:30 AM", end: "11:45 AM", label: "Second Break" },
    //                 { start: "11:45 AM", end: "12:30 PM" },
    //                 { start: "12:30 PM", end: "1:20 PM", label: "Lunch" },
    //                 { start: "1:20 PM", end: "2:15 PM" }, 
    //                 { start: "2:15 PM", end: "3:00 PM" }
    //             ];

    //             // Primary time slots
    //             let primaryTimeSlots = [
    //                 { start: "6:45 AM", end: "7:40 AM" },
    //                 { start: "7:40 AM", end: "8:10 AM", label: "Breakfast" },
    //                 { start: "8:10 AM", end: "8:55 AM" },
    //                 { start: "8:55 AM", end: "9:40 AM" },
    //                 { start: "9:40 AM", end: "9:50 AM", label: "First Break" },
    //                 { start: "9:50 AM", end: "10:35 AM" },
    //                 { start: "10:35 AM", end: "11:20 AM" },
    //                 { start: "11:20 AM", end: "11:30 AM", label: "Second Break" },
    //                 { start: "11:30 AM", end: "12:15 PM" },
    //                 { start: "12:15 PM", end: "1:00 PM" },
    //                 { start: "1:00 PM", end: "1:45 PM", label: "Lunch" },
    //                 { start: "1:45 PM", end: "1:55 PM" },
    //                 { start: "1:55 PM", end: "2:40 PM" },
    //                 { start: "2:40 PM", end: "3:25 PM" },
    //                 { start: "3:25 PM", end: "4:10 PM" }
    //             ];
                
    //             // Select the appropriate time slots based on the selected level
    //             let timeSlots = selectedLevel === "pre-primary" ? prePrimaryTimeSlots : primaryTimeSlots;
    
    //             let showInstructor = filter_type === "stream";
                
    //             let title = filter_value ? `${filter_value} Timetable` : "School Timetable";
    //             if (selectedLevel) {
    //                 title = `${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} School ${title}`;
    //             }
    
    //             let tableHTML = `
    //             <h3 class="text-center">${title}</h3>
    //             <div style="display: flex; justify-content: center; overflow-x: auto;">
    //                 <table class="table table-bordered" style="table-layout: fixed; width: auto; margin: auto;">
    //                     <thead>
    //                         <tr>
    //                             <th style="width: 100px; text-align: center;">Day</th>
    //                             ${timeSlots.map(slot => `
    //                                 <th style="width: 150px; min-height: 80px; text-align: center; vertical-align: middle; font-size: 12px; font-weight: normal;">
    //                                     ${slot.label ? `${removeAMPM(slot.start)} - ${removeAMPM(slot.end)}<br>(${slot.label})` : `${slot.start} - ${slot.end}`}
    //                                 </th>`).join('')}
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //             `;
            
    //             weekdays.forEach(day => {
    //                 tableHTML += `<tr><td>${day}</td>`;
    
    //                 timeSlots.forEach(slot => {
    //                     // Check if this slot is a predefined break or meal time
    //                     if (slot.label) {
    //                         tableHTML += `<td class="text-center" style="background-color: #f8d7da; font-size: 12px;">${slot.label}</td>`;
    //                         return;
    //                     }

    //                     let matchedSchedule = schedules.find(schedule => {
    //                         let scheduleDay = new Date(schedule.schedule_date).toLocaleDateString('en-US', { weekday: 'long' }).trim();
    //                         let scheduleTime = convertTo12HourFormat(schedule.from_time);
    
    //                         return scheduleDay === day && scheduleTime === slot.start;
    //                     });
    
    //                     if (matchedSchedule) {
    //                         let displayText = showInstructor 
    //                             ? `${matchedSchedule.course} - <span style="color: blue;">${matchedSchedule.instructor}</span>`
    //                             : matchedSchedule.course;
                        
    //                         tableHTML += `<td>${displayText}</td>`;
    //                     } else {
    //                         tableHTML += `<td></td>`;
    //                     }
    //                 });
    
    //                 tableHTML += `</tr>`;
    //             });
    
    //             tableHTML += `</tbody></table></div>`;
    
    //             let printableDiv = document.getElementById('printable-timetable');
    //             printableDiv.innerHTML = tableHTML;
    //             printableDiv.classList.remove('d-none');
    //             printTimetable();
    //         }
    //     });
    // }
    function generatePrintableTimetable(filter_type, filter_value) {
        frappe.call({
            method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule",
            args: { [filter_type]: filter_value },
            callback: function(response) {
                let schedules = response.message;
        
                let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
                // Pre-Primary time slots
                let prePrimaryTimeSlots = [
                    { start: "7:40 AM", end: "8:15 AM", label: "Breakfast" }, 
                    { start: "8:15 AM", end: "9:00 AM" }, 
                    { start: "9:00 AM", end: "9:45 AM" }, 
                    { start: "9:45 AM", end: "10:30 AM", label: "First Break" },
                    { start: "10:30 AM", end: "11:15 AM" }, 
                    { start: "11:15 AM", end: "11:30 AM" }, 
                    { start: "11:30 AM", end: "11:45 AM", label: "Second Break" },
                    { start: "11:45 AM", end: "12:30 PM" },
                    { start: "12:30 PM", end: "1:20 PM", label: "Lunch" },
                    { start: "1:20 PM", end: "2:15 PM" }, 
                    { start: "2:15 PM", end: "3:00 PM" }
                ];
    
                // Primary time slots
                let primaryTimeSlots = [
                    { start: "6:45 AM", end: "7:40 AM" },
                    { start: "7:40 AM", end: "8:10 AM", label: "Breakfast" },
                    { start: "8:10 AM", end: "8:55 AM" },
                    { start: "8:55 AM", end: "9:40 AM" },
                    { start: "9:40 AM", end: "9:50 AM", label: "First Break" },
                    { start: "9:50 AM", end: "10:35 AM" },
                    { start: "10:35 AM", end: "11:20 AM" },
                    { start: "11:20 AM", end: "11:30 AM", label: "Second Break" },
                    { start: "11:30 AM", end: "12:15 PM" },
                    { start: "12:15 PM", end: "1:00 PM" },
                    { start: "1:00 PM", end: "1:45 PM", label: "Lunch" },
                    { start: "1:45 PM", end: "1:55 PM" },
                    { start: "1:55 PM", end: "2:40 PM" },
                    { start: "2:40 PM", end: "3:25 PM" },
                    { start: "3:25 PM", end: "4:10 PM" }
                ];
                
                // Select the appropriate time slots based on the selected level
                let timeSlots = selectedLevel === "pre-primary" ? prePrimaryTimeSlots : primaryTimeSlots;
    
                // Determine display based on filter type
                let showInstructor = filter_type === "stream";
                let showStudentGroup = filter_type === "instructor";
                
                let title = filter_value ? `${filter_value} Timetable` : "School Timetable";
                if (selectedLevel) {
                    title = `${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} School ${title}`;
                }
    
                let tableHTML = `
                <h3 class="text-center">${title}</h3>
                <div style="display: flex; justify-content: center; overflow-x: auto;">
                    <table class="table table-bordered" style="table-layout: fixed; width: auto; margin: auto;">
                        <thead>
                            <tr>
                                <th style="width: 100px; text-align: center;">Day</th>
                                ${timeSlots.map(slot => `
                                    <th style="width: 150px; min-height: 80px; text-align: center; vertical-align: middle; font-size: 12px; font-weight: normal;">
                                        ${slot.label ? `${removeAMPM(slot.start)} - ${removeAMPM(slot.end)}<br>(${slot.label})` : `${slot.start} - ${slot.end}`}
                                    </th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                `;
            
                weekdays.forEach(day => {
                    tableHTML += `<tr><td>${day}</td>`;
    
                    timeSlots.forEach(slot => {
                        // Check if this slot is a predefined break or meal time
                        if (slot.label) {
                            tableHTML += `<td class="text-center" style="background-color: #f8d7da; font-size: 12px;">${slot.label}</td>`;
                            return;
                        }
    
                        let matchedSchedule = schedules.find(schedule => {
                            let scheduleDay = new Date(schedule.schedule_date).toLocaleDateString('en-US', { weekday: 'long' }).trim();
                            let scheduleTime = convertTo12HourFormat(schedule.from_time);
    
                            return scheduleDay === day && scheduleTime === slot.start;
                        });
    
                        if (matchedSchedule) {
                            let displayText = "";
                            
                            if (showInstructor) {
                                displayText = `${matchedSchedule.course} - <span style="color: blue;">${matchedSchedule.instructor}</span>`;
                            } else if (showStudentGroup) {
                                displayText = `${matchedSchedule.course} - <span style="color: green;">${matchedSchedule.student_group}</span>`;
                            } else {
                                displayText = matchedSchedule.course;
                            }
                        
                            tableHTML += `<td>${displayText}</td>`;
                        } else {
                            tableHTML += `<td></td>`;
                        }
                    });
    
                    tableHTML += `</tr>`;
                });
    
                tableHTML += `</tbody></table></div>`;
    
                let printableDiv = document.getElementById('printable-timetable');
                printableDiv.innerHTML = tableHTML;
                printableDiv.classList.remove('d-none');
                printTimetable();
            }
        });
    }

    // Function to remove AM/PM from time labels
    function removeAMPM(timeString) {
        return timeString.replace(/\s?(AM|PM)/g, ""); // Removes AM or PM
    }

    // Function to convert time to 12-hour format
    function convertTo12HourFormat(timeString) {
        let timeParts = timeString.split(":");
        let hours = parseInt(timeParts[0], 10);
        let minutes = timeParts.length > 1 ? timeParts[1] : "00";
    
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; 
        return `${hours}:${minutes} ${period}`;
    }
    
    // Print function
    function printTimetable() {
        let printContent = document.getElementById('printable-timetable').innerHTML;
        let newWindow = window.open("", "", "width=1000,height=800");
        newWindow.document.write(`
            <html>
            <head>
                <title>School Timetable</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
                <style>
                    @media print {
                        .table th, .table td {
                            padding: 8px;
                            border: 1px solid #ddd;
                        }
                        table {
                            width: 100% !important;
                            table-layout: fixed;
                        }
                        th, td {
                            font-size: 10px;
                            padding: 4px !important;
                        }
                    }
                </style>
            </head>
            <body class="container-fluid mt-3">
                ${printContent}
            </body>
            </html>
        `);
        newWindow.document.close();
        newWindow.print();
    }
}