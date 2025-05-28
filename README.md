## Frappe Education Extension Customization

## 📘 Education Module - `Junior School` Extension Documentation

This document outlines the enhancements and custom tools developed within the `Junior School Customization` module to better support scheduling, attendance tracking, and classroom management in schools.

----------

### 1. 🗓️ School Timetable Page

A new **School Timetable View** has been implemented using a calendar interface. Type `Timetable` in search bar and click on first suggestion `Open Timetable`.
![Screenshot 2025-04-14 at 16 59 16](https://github.com/user-attachments/assets/f749a945-0457-4116-bb91-0cc266148b78)
The key features include:

-   **Calendar Display**: Weekly timetable view (Sun–Sat) showing subjects, teachers, and streams.
    
-   **Filtering Options**:
    
    -   **Levels**: e.g., Pre-primary, Primary
        
    -   **Teachers**: Filter to view specific teacher schedules
        ![Screenshot 2025-04-14 at 17 03 03](https://github.com/user-attachments/assets/1449cf44-3351-4e17-a3a5-43657a2cac28)
    -   **Streams**: Allows filtering based on class streams
        
-   **Print Functionality**: Filter as required and print the timetable (e.g., per teacher or per stream).
    
-   **Assumption**: The timetable repeats weekly, so only a one-week view is necessary.
    

**Interactive Editing**:

-   Users can click any scheduled session to view details in a modal pop-up.
    
-   The modal allows editing and submitting updates, which reflect on the backend immediately.
    
![Screenshot 2025-04-15 at 17 28 08](https://github.com/user-attachments/assets/a3135465-3e6c-4d56-ab64-a8bd81847b9f)

- The user can also click in a space and schedule a class.
----------

### 2. ⚙️ Auto-Generation of Timetable (Like aSc TimeTables)

To streamline scheduling, an automated timetable generator has been introduced using a **Single Doctype**: `Timetable Generator`.
![Screenshot 2025-04-14 at 17 05 50](https://github.com/user-attachments/assets/3f8c5b49-30dd-4ae9-a449-827b3003e6cc)
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
    
-   **Breaks Table**: Define breaks like breakfast, lunch, etc.. The user must have created this in the `Breaks` doctypes, because it auto-populates the start and end time from the chosen break.
    

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
    
4.  The system manages duplicate and failed schedules with internal retry/rescheduling mechanisms.
    

**🛠️ Status**:

-   Work in progress.
    
-   Some logic misbehaviors.
    
-   Double lessons are yet to be fully implemented.
    

----------

### 3. 🧑🏽‍🎓 Enhanced Student Attendance

To support **multi-shift attendance** (e.g., morning & evening), the following has been introduced:

-   New Doctype: `Enhanced Student Attendance Tool`
    
    -   Based on `Student Attendance Tool` with additional fields:
        
        -   `Shift` (Linked to HR shift types)
            
        -   `Start Time`, `End Time`
            
-   `Student Attendance` Doctype Changes:
    
    -   New field: `Shift`
        
    -   Override on the default duplicate attendance validation logic:
        
        -   Allows multiple attendance entries per day based on shift.
            
        -   Ensures no overlapping shifts.
            

**🚧 Issue**:  
Still under test in production to ensure consistency of teh override.

----------

### 4. 🗂️ Subject Scheduling Tool (Improved Course Scheduling Tool)

Creating course schedules with consistent time across days was limiting. To address this:

-   Created a new Doctype: `Subject Scheduling Tool`
    
    -   Replicates the `Course Scheduling Tool` with improvements.
        
    -   **Child Table**: `Subject Time`
        
        -   Allows scheduling different times for different days.
            
        -   Example:
            
            -   Monday: 8:00–9:00 AM
                
            -   Wednesday: 10:00–11:00 AM
                
        -   Checkbox `Reschedule` for when you are rescheduling an already scheduled subject.
            

This tool improves flexibility and real-world scheduling accuracy.
![Screenshot 2025-04-14 at 17 24 10](https://github.com/user-attachments/assets/662e0fa8-b0a8-43f7-889a-1fe115fd01ad)

### 5. 🧾 Student Report Generation Tool – **Custom Print Report Card**

A new feature has been added to the `Student Report Generation Tool` to support customizable report card printing.

-   **Field Added**: `Custom Print Report Card` (Checkbox)
    
    -   When checked, the system prints a report card using a **custom template**, designed to align with the institution's branding and reporting preferences.
        
    -   This template reflects the **layout and styling** shown in the sample below:
        
    ![Screenshot 2025-04-15 at 17 24 06](https://github.com/user-attachments/assets/4ba16785-accd-453b-8369-0f4f5a007a52)
   
        
-   **Group Filter Removed**:  
    To enhance flexibility during events like half-term breaks, the **group filter** was removed. This enables users to:
    
    -   Generate report cards for **any assessment group**.
        
    -   Allow students to take their report cards home during half-term or early departures without restriction.

----------
## ✅ Summary

| Feature                   | Status          | Notes                                                      |
|---------------------------|------------------|------------------------------------------------------------|
| Timetable Calendar Page   | ✅ Completed     | Interactive and printable with filters                     |
| Auto Timetable Generator  | 🛠️ In Progress   | Handles rules, breaks, and teacher limits                  |
| Enhanced Attendance       | ✅ Completed  | Shift-based validation works locally; prod inconsistency(still testing)  |
| Subject Scheduling Tool   | ✅ Completed     | Supports flexible per-day time allocations                 |



## 👨🏽‍💻 Student ID-Based Email and User Auto-Creation

#### 🛠️ Key Features:

-   **Custom Student ID Format**:
    
    -   Student ID is **auto-generated** based on the selected **School**.
        
    -   The ID format follows a **prefix** derived from the school abbreviation, followed by a numeric sequence.
        
    -   Example: For a school with abbreviation `JNS`, the Student ID might be `JNS-0001`.
        
    -   ⚠️ _This logic is customizable depending on the use case or naming convention required._
    ![image (12)](https://github.com/user-attachments/assets/8f31fccc-7aa3-4136-82d8-d13554acf013)

        
-   **Auto-Generated Student Email**:
    
    -   Since younger students may not have emails, the system synthesizes one using the format:
        
        css
        
        CopyEdit
        
        `<student_id>@gmail.com` 
        
        Example: `JNS0001@gmail.com`
        
-   **Username = Cleaned Student ID**:
    
    -   The **username** is set to the `Student ID` with all non-alphanumeric characters removed (e.g., no slashes or symbols).
        
        `safe_username = re.sub(r"\W+", "", self.custom_student_id)` 
        
-   **Password = Student ID**:
    
    -   The **password** for the student account is set as their `Student ID` (including special characters, if any).
        
-   **Login Behavior**:
    
    -   Students **log in using their username**, which is their cleaned-up Student ID.
        
    -   They use their Student ID (original) as the **password**.
        
    -   This approach is enabled by adjusting **System Settings** to allow username-based login.
### Backend Override

The default Frappe logic for user creation has been overridden via a custom controller `ModifiedStudent`, where the user account is generated upon saving a new `Student` document.
