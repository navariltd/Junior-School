__version__ = "0.0.1"


import education.education.utils

from nl_school.junior_school_customization.patches.override_lap import get_overlap_for_


education.education.utils.get_overlap_for = get_overlap_for_
