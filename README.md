## Frappe Education Extension Customization

## 📘 Education Module - `nl_school` Extension Documentation

This document outlines the enhancements and custom tools developed within the `Junior School Customization` module to better support scheduling, attendance tracking, and classroom management in schools.

----------

### 1. 🗓️ School Timetable Page

A new **School Timetable View** has been implemented using a calendar interface. The key features include:

-   **Calendar Display**: Weekly timetable view (Sun–Sat) showing subjects, teachers, and streams.
    
-   **Filtering Options**:
    
    -   **Levels**: e.g., Pre-primary, Primary
        
    -   **Teachers**: Filter to view specific teacher schedules
        
    -   **Streams**: Allows filtering based on class streams
        
-   **Print Functionality**: Filter as required and print the timetable (e.g., per teacher or per stream).
    
-   **Assumption**: The timetable repeats weekly, so only a one-week view is necessary.
    

**Interactive Editing**:

-   Users can click any scheduled session to view details in a modal pop-up.
    
-   The modal allows editing and submitting updates which reflect on the backend immediately.
    

----------

### 2. ⚙️ Auto-Generation of Timetable (Like aSc TimeTables)

To streamline scheduling, an automated timetable generator has been introduced using a **Single Doctype**: `Timetable Generator`.

#### Structure:

-   **Main Fields**:
    
    -   `Academic Year`
        
    -   `Academic Term`
    -  `Default Time Slots`
    -  `Lesson Starts`
    -  `Lesson Ends`
        

#### Child Tables:

**a) Subject Rules**  
Defines subject-level constraints:

-   Subject
    
-   Max Time per Session
    
-   Frequency Per Week
    
-   Allow Double Lessons?
    
-   Max Double Lessons Per Week
    

**b) Slot & Breaks Tab**

-   **Time Slots Table**: Define periods (e.g., period 1, 2...) with start/end times and durations.
    
-   **Breaks Table**: Define breaks like breakfast, lunch, etc.,. The user must have created this in the `Breaks` doctypes, because it auto-populates the start and end time from teh choosen break.
    

**c) Teachers Tab**  
Contains a child table `Teacher Preference` with:

-   Teacher Name
    
-   Assigned Subjects and Streams
    
-   Max Periods per Day/Week
    
This helps define teaching limits and areas of specialization.

**d) Teaching Rooms**  
In the `Teaching Rooms` child table:

-   Assign specific rooms to each subject-stream combination.
    
-   Junior school rooms default to classes, with extras like labs or libraries.
    

#### Generation Flow:

1.  User fills in all the above data and `save`.
    
2.  Clicks `Generate Timetable`.
    
3.  The process is queued for backend scheduling due to time complexity.
    
4.  System manages duplicate and failed schedules with internal retry/rescheduling mechanisms.
    

**🛠️ Status**:

-   Work in progress.
    
-   Some logic misbehaviors.
    
-   Double lessons are yet to be fully implemented.
    

----------

### 3. 🧑🏽‍🎓 Enhanced Student Attendance

To support **multi-shift attendance** (e.g., morning & evening), the following has been introduced:

-   New Doctype: `Enhanced Student Attendance Tool`
    
    -   Based on `Student Attendance` with additional fields:
        
        -   `Shift` (Linked to HR shift types)
            
        -   `Start Time`, `End Time`
            
-   `Student Attendance` Doctype Changes:
    
    -   New field: `Shift`
        
    -   Override on the default duplicate attendance validation logic:
        
        -   Allows multiple attendance entries per day based on shift.
            
        -   Ensures no overlapping shifts.
            

**🚧 Issue**:  
Override logic functions well locally but doesn’t apply correctly in production. Still under investigation.

----------

### 4. 🗂️ Subject Scheduling Tool (Improved Course Scheduling)

Creating course schedules with consistent time across days was limiting. To address this:

-   Created a new Doctype: `Subject Scheduling Tool`
    
    -   Replicates the `Course Scheduling Tool` with improvements.
        
    -   **Child Table**: `Subject Time`
        
        -   Allows scheduling different times for different days.
            
        -   Example:
            
            -   Monday: 8:00–9:00 AM
                
            -   Wednesday: 10:00–11:00 AM
                
        -   Checkbox `Reschedule` for easier updates.
            

This tool improves flexibility and real-world scheduling accuracy.

----------
## ✅ Summary

| Feature                   | Status          | Notes                                                      |
|---------------------------|------------------|------------------------------------------------------------|
| Timetable Calendar Page   | ✅ Completed     | Interactive and printable with filters                     |
| Auto Timetable Generator  | 🛠️ In Progress   | Handles rules, breaks, and teacher limits                  |
| Enhanced Attendance       | 🛠️ In Progress   | Shift-based validation works locally; prod override issue  |
| Subject Scheduling Tool   | ✅ Completed     | Supports flexible per-day time allocations                 |

