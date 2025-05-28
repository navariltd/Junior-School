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
          ![image](https://github.com/user-attachments/assets/6a0e0084-d894-4ad5-84ba-4f3f170b406c)

            
-   `Student Attendance` Doctype Changes:
    
    -   New field: `Shift`
        
    -   Override on the default duplicate attendance validation logic:
        
        -   Allows multiple attendance entries per day based on shift.
            
        -   Ensures no overlapping shifts.
     ![image (14)](https://github.com/user-attachments/assets/7c01aaf1-506b-411c-8aee-9eb6474d8f50)
       


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

The default Frappe logic for user creation has been overridden via a custom controller, `ModifiedStudent`, where the user account is generated upon saving a new `Student` document.


### 7.  Introducing **School as Company**

To support **multi-school** or **multi-campus** setups within one ERPNext instance, we introduced a structural change: **each School is now treated as a Company**. This lets users leverage native ERPNext features like permissions, chart of accounts, assets, and HR, scoped to a school.

#### ✅ Key Benefits

-   Enables **multi-school management** under a single ERPNext instance.
    
-   Uses ERPNext's built-in `Company` logic to segment data per school.
    
-   Allows clear scoping for:
    
    -   Financials
        
    -   Student data
        
    -   Assessments
        
    -   Attendance
        
    -   Reporting
        
    -   Instructor and program tracking
    -   Filters are applied across key doctypes (e.g., **Course Schedule**) to restrict selection to records relevant to the selected school:
    ![image (13)](https://github.com/user-attachments/assets/8e7bf4bb-fc9f-4345-8f48-b8327de4c35c)

    -   You can only select **streams**, **student groups**, or **instructors** that belong to the specified school.
        
    -   Ensures clean data separation and avoids cross-school data mixing.
      Once this is implemented:

-   You can apply **User Permissions** for `Company` to restrict access to specific school data.
    
-   Customize **dashboards**, **reports**, and **queries** by filtering on `company`.


  ### 8. **Assessment Plan Status: Open/Closed**
  ![image (15)](https://github.com/user-attachments/assets/81a093ae-475f-48ca-8b9d-650d671b3b31)

To improve filtering and tracking of assessments, we introduced a **`status`** field to the **Assessment Plan** doctype.

#### ✅ Key Purpose

-   Distinguish between **active** (open) and **completed** (closed) assessment plans.
    
-   Make it easier to **filter only "Open" plans** in tools like the **Assessment Result Tool**.
  ![Screenshot 2025-05-28 at 19 39 19](https://github.com/user-attachments/assets/eba7dc26-29cd-402b-a2e7-de4adb87f612)
    
-   Enable **automation** to close assessment plans once the academic term ends.
    
----------

### ⚙️ Scheduler for Auto-Closure

We added a **scheduler job** that:

-   Monitors assessment plans.
    
-   Checks the **term end date** linked to each plan.
    
-   Automatically updates `status` from **Open → Closed** once the term ends.
    

This ensures accurate status without requiring manual updates.

## 🎓 Academic Year Setup & Automated Student Promotion System

### 📌 Overview

This system is designed to automatically:

-   **Create a new Academic Year** at the beginning of each calendar year.
    
-   **Promote students** to their next grade or stream using rules defined per school.
    

----------

### 🕐 Scheduled Jobs

#### **1. Academic Year Creation**

-   **Trigger Time:** Every year on **January 1st at 12:00 AM**.
    
-   **Function:** `create_academic_year()`
    
-   **Description:** Automatically creates a new `Academic Year` document with:
    
    -   `year_start_date = YYYY-01-01`
        
    -   `year_end_date = YYYY-12-31`
        
    -   `academic_year_name = "YYYY Academic Year"`
        

#### **2. Auto Enrollment into New Year**

-   **Trigger Time:** Immediately after academic year creation.
    
-   **Function:** `update_enrolment_tool()`
    
-   **Description:** Uses the Automated Program Enrollment Tool to:
    
    -   Load student enrollments from the **previous academic year**.
        
    -   Apply **promotion rules** (per class and stream).
        
    -   Enroll promoted students into the **new academic year and term**.
        

----------

### Promotion Rules Engine

Each school can configure **promotion rules** via the `Automated Program Enrollment Tool`:

![image (16)](https://github.com/user-attachments/assets/a5d6ddb3-c0e4-4652-adc9-aee08afd2c5a)

#### Fields Explained:

-   **Get Students From:** Source of existing enrollments (e.g., _Class Enrollment_).
    
-   **Academic Year / Term:** Current (source) academic year and term.
    
-   **Enrollment Date:** Date to apply the new enrollment (typically start of next year).
    

#### 🔄 Promotion Rules:


| Field           | Description         |
|----------------|---------------------|
| Current Class  | e.g., Grade 4       |
| Current Stream | e.g., Grade 4 Blue  |
| New Class      | e.g., Grade 5       |
| New Stream     | e.g., Grade 5 Blue  |


Each row defines how students will move from their current level to the next.

#### Enrollment Details:

-   **New Academic Year:** Target year for promotion (e.g., _2026 Academic Year_).
    
-   **New Academic Term:** Typically _Term 1_ of the new year.
    
-   **Enroll Students Button:** Executes the promotion based on defined rules.
    

----------

### ✅ Result

By running the above process:

-   Each school seamlessly transitions into the new year.
    
-   All eligible students are promoted and re-enrolled automatically.
    
-   No manual intervention is required at the start of each year.
![image (17)](https://github.com/user-attachments/assets/cd87ea76-0aa0-4895-a10a-272ff9b67126)


## Student Auto-Deactivation on Leaving

When a student's **Date of Leaving** is entered, the system automatically updates their status and removes related records to keep the database clean and consistent.

### Actions Taken:

- **Custom Status** is set to **"Left"**
- The student record is **disabled** (`enabled = 0`)
- The student is **removed from their assigned stream** (`Student Group Student`)
- Any active **Class Enrollment** linked to the student is **cancelled**

![image (18)](https://github.com/user-attachments/assets/c0f96a42-2404-4f0e-83da-542f267fddf7)

This ensures that the student no longer appears in active lists or reports after their departure.

---

#### Similarity to Employee Deactivation

This logic mirrors the behavior for employees:
- When an **End Date** is entered for an employee, they are automatically marked as inactive.
- The system adjusts the **active employee count** and deactivates any related links.

This approach helps maintain data integrity and simplifies status tracking across both **students** and **employees**.


## Academic Term Update for Student Groups(streams)

Update ensures that all **Student Groups(Streams)** reflect the correct **Academic Term** based on the current date.

### Weekly scheduler which:
- Checks today's date and determines the academic year (e.g., `2025 Academic Year`).
- Finds the academic term that includes today's date.
- Updates each **Student Group** in the academic year to use the correct academic term.
![image (19)](https://github.com/user-attachments/assets/cba6ed14-ecd8-4b9d-8ac3-0700fdacc282)

Helps: Keeping the **Academic Term** field up-to-date ensures accurate reporting, filtering, and planning based on term-specific data.



