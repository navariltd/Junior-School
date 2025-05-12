app_name = "nl_school"
app_title = "Junior School Customization"
app_publisher = "Navari"
app_description = "Junior primary school customization"
app_email = "mania@navari.co.ke"
app_license = "agpl-3.0"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "nl_school",
# 		"logo": "/assets/nl_school/logo.png",
# 		"title": "Junior School Customization",
# 		"route": "/nl_school",
# 		"has_permission": "nl_school.api.permission.has_app_permission"
# 	}
# ]

fixtures = [
    {
        "doctype": "Custom Field",
        "filters": [
            [
                "name",
                "in",
                (
                    "Student Attendance-custom_end_time",
                    "Student Attendance-custom_start_time",
                    "Student Attendance-custom_shift",
                    "Student-custom_reason_for_exiting",
                    "Student-custom_status",
                    "Student Report Generation Tool-custom_teachers_comment",
                ),
            ]
        ],
    }
]
# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/nl_school/css/nl_school.css"
# app_include_js = "/assets/nl_school/js/nl_school.js"
# app_include_js = [
#     "https://unpkg.com/frappe-charts@1.6.2/dist/frappe-charts.min.iife.js"
# ]


# include js, css files in header of web template
# web_include_css = "/assets/nl_school/css/nl_school.css"
# web_include_js = "/assets/nl_school/js/nl_school.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "nl_school/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
    "Student Report Generation Tool": "public/js/student_report_generation_tool.js",
    "Course Schedule": "public/js/class_schedule.js",
    "Assessment Plan": "public/js/assessment_plan.js",
    "Assessment Result": "public/js/assessment_result.js",
    "Student Log": "public/js/student_log.js",
    "Program Enrollment": "public/js/program_enrollment.js",
    "Student Attendance": "public/js/student_attendance.js",
}

# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "nl_school/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "nl_school.utils.jinja_methods",
# 	"filters": "nl_school.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "nl_school.install.before_install"
# after_install = "nl_school.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "nl_school.uninstall.before_uninstall"
# after_uninstall = "nl_school.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "nl_school.utils.before_app_install"
# after_app_install = "nl_school.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "nl_school.utils.before_app_uninstall"
# after_app_uninstall = "nl_school.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "nl_school.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }
override_doctype_class = {
    "Student Attendance": "nl_school.apis.utils.ModifiedStudentAttendance",
    "Student": "nl_school.apis.utils.ModifiedStudent",
}

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }
# before_app_request = "nl_school.apis.utils.patch_student_attendance"

doc_events = {
    "Assessment Result": {
        "on_submit": "nl_school.junior_school_customization.controllers.assessment_result.before_submit"
    },
    "Student": {
        "before_save": "nl_school.junior_school_customization.utils.before_save",
    },
}
# Scheduled Tasks
# ---------------

scheduler_events = {
    "cron": {
        "0 1 1 1 *": [
            "nl_school.junior_school_customization.utils.create_academic_year"
        ],
        "0 1 1 2 *": [
            "nl_school.junior_school_customization.utils.update_enrolment_tool"
        ],
    },
    "Weekly": ["nl_school.junior_school_customization.utils.update_academic_term"],
}

# scheduler_events = {
# 	"all": [
# 		"nl_school.tasks.all"
# 	],
# 	"daily": [
# 		"nl_school.tasks.daily"
# 	],
# 	"hourly": [
# 		"nl_school.tasks.hourly"
# 	],
# 	"weekly": [
# 		"nl_school.tasks.weekly"
# 	],
# 	"monthly": [
# 		"nl_school.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "nl_school.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "nl_school.event.get_events"
# }


#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "nl_school.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["nl_school.utils.before_request"]
# after_request = ["nl_school.utils.after_request"]

# Job Events
# ----------
# before_job = ["nl_school.utils.before_job"]
# after_job = ["nl_school.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"nl_school.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }
