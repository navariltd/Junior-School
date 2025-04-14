
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
        
        <!-- Edit Schedule Modal -->
        <div class="modal fade" id="editScheduleModal" tabindex="-1" role="dialog" aria-labelledby="editScheduleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editScheduleModalLabel">Edit Schedule</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                      <form id="edit-schedule-form">
                        <input type="hidden" id="edit-schedule-id">
                        
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="edit-course">Course</label>
                                <input type="text" class="form-control" id="edit-course">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="edit-instructor">Instructor</label>
                                <select class="form-control" id="edit-instructor"></select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="edit-student-group">Student Group</label>
                                <select class="form-control" id="edit-student-group"></select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="edit-room">Room</label>
                                <select class="form-control" id="edit-room"></select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="edit-date">Date</label>
                                <input type="date" class="form-control" id="edit-date">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="edit-from-time">From Time</label>
                                <input type="time" class="form-control" id="edit-from-time">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="edit-to-time">To Time</label>
                                <input type="time" class="form-control" id="edit-to-time">
                            </div>
                        </div>
                    </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="save-schedule-changes">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
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
    let allTeachers = [];
    let allStreams = [];

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
            allTeachers = response.message;
            let teacherDropdown = $("#teacher-dropdown");
            let editInstructorDropdown = $("#edit-instructor");
            
            response.message.forEach(teacher => {
                teacherDropdown.append(`<option value="${teacher.value}">${teacher.label}</option>`);
                editInstructorDropdown.append(`<option value="${teacher.value}">${teacher.label}</option>`);
            });
        }
    });

    // Fetch streams and populate dropdown
    frappe.call({
        method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_streams",
        callback: function(response) {
            allStreams = response.message;
            let streamDropdown = $("#stream-dropdown");
            let editStudentGroupDropdown = $("#edit-student-group");
            
            response.message.forEach(stream => {
                streamDropdown.append(`<option value="${stream.value}">${stream.label}</option>`);
                editStudentGroupDropdown.append(`<option value="${stream.value}">${stream.label}</option>`);
            });
        }
    });

    frappe.call({
        method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_rooms",
        callback: function(response){
            allRooms = response.message;
            console.log("Rooms: " + allRooms);
            let allRoomsDropdown = $("#edit-room");
            response.message.forEach(room => {
                allRoomsDropdown.append(`<option value="${room.value}">${room.label}</option>`);
            });
        }
    })

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
            editable: true, // Make events editable
            eventClick: function(info) {
                // Open modal for editing
                openEditModal(info.event.id);
            },
            eventDrop: function(info) {
                // Handle event drag and drop
                updateEventTime(info.event);
            },
            eventResize: function(info) {
                // Handle event resizing
                updateEventTime(info.event);
            },
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
                                extendedProps: {
                                    course: event.course,
                                    instructor: event.instructor,
                                    student_group: event.student_group,
                                    room: event.room,
                                    program: event.program
                                }
                            }));
                        successCallback(events);
                    }
                });
            }
        });

        calendar.render();
    }

    // Open edit modal and populate with event data
    function openEditModal(scheduleId) {
        frappe.call({
            method: "nl_school.junior_school_customization.page.school_timetable.timetable.get_course_schedule_details",
            args: { schedule_name: scheduleId },
            callback: function(response) {
                const schedule = response.message;
                if (schedule) {
                    // Format date for date input (YYYY-MM-DD)
                    const formattedDate = schedule.schedule_date;
                    
                    // Populate form fields
                    $("#edit-schedule-id").val(schedule.name);
                    $("#edit-course").val(schedule.course);
                    $("#edit-instructor").val(schedule.instructor);
                    $("#edit-student-group").val(schedule.student_group);
                    $("#edit-room").val(schedule.room);
                    $("#edit-date").val(formattedDate);
                    $("#edit-from-time").val(schedule.from_time);
                    $("#edit-to-time").val(schedule.to_time);
                    
                    // Show the modal
                    $("#editScheduleModal").modal("show");
                } else {
                    frappe.throw(__("Failed to retrieve schedule details"));
                }
            }
        });
    }

    // Update event time after drag/resize
    function updateEventTime(event) {
        const startTime = event.start.toISOString().split('T')[1].substring(0, 8);
        const endTime = event.end.toISOString().split('T')[1].substring(0, 8);
        const scheduleDate = event.start.toISOString().split('T')[0];
        
        frappe.call({
            method: "nl_school.junior_school_customization.page.school_timetable.timetable.update_course_schedule",
            args: {
                schedule_name: event.id,
                schedule_date: scheduleDate,
                from_time: startTime,
                to_time: endTime
            },
            callback: function(response) {
                if (response.message === "success") {
                    frappe.show_alert({
                        message: __("Schedule updated successfully"),
                        indicator: 'green'
                    }, 3);
                } else {
                    frappe.show_alert({
                        message: __("Failed to update schedule"),
                        indicator: 'red'
                    }, 3);
                    // Revert the change in the calendar
                    calendar.refetchEvents();
                }
            }
        });
    }

    // Save schedule changes
    $("#save-schedule-changes").on("click", function() {
        const scheduleId = $("#edit-schedule-id").val();
        const course = $("#edit-course").val();
        const instructor = $("#edit-instructor").val();
        const studentGroup = $("#edit-student-group").val();
        const room = $("#edit-room").val();
        const scheduleDate = $("#edit-date").val();
        const fromTime = $("#edit-from-time").val();
        const toTime = $("#edit-to-time").val();
        
        frappe.call({
            method: "nl_school.junior_school_customization.page.school_timetable.timetable.update_course_schedule_details",
            args: {
                schedule_name: scheduleId,
                course: course,
                instructor: instructor,
                student_group: studentGroup,
                room: room,
                schedule_date: scheduleDate,
                from_time: fromTime,
                to_time: toTime
            },
            callback: function(response) {
                if (response.message === "success") {
                    $("#editScheduleModal").modal("hide");
                    frappe.show_alert({
                        message: __("Schedule updated successfully"),
                        indicator: 'green'
                    }, 3);
                    // Refresh calendar events
                    calendar.refetchEvents();
                } else {
                    frappe.show_alert({
                        message: __("Failed to update schedule"),
                        indicator: 'red'
                    }, 3);
                }
            }
        });
    });

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

