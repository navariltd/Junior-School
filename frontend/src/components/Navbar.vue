<template>
    <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <!-- Logo -->
      <div class="text-2xl font-bold text-primary">Timetable Generator</div>
  
      <!-- Action Buttons -->
      <div class="flex items-center gap-4">
        <Button @click="generateTimetable">Generate Timetable</Button>
        <Button @click="showTeacherMapping = true">Map Teachers to Subjects</Button>
        <Button @click="viewBreaks">View Breaks</Button>
        <Button @click="resetTimetable">Reset Timetable</Button>
      </div>
    </nav>
  
    <!-- Teacher Mapping Dialog -->
    <Dialog v-model="showTeacherMapping" :options="{ title: 'Map Teacher to Subjects', size: 'lg' }">
      <template #body-content>
        <div class="space-y-6">
            <div>Hello</div>
          <!-- Teacher Selection -->
          <!-- <FormControl
            label="Select Teacher"
            v-model="selectedTeacher"
            name="teacher"
            type="select"
            :options="teachers"
            placeholder="Choose a teacher"
          /> -->
  
          <!-- Action Buttons -->
          <div class="flex justify-end gap-4">
            <Button @click="closeDialog" variant="outline">Cancel</Button>
            <Button @click="mapTeacherToSubjects" variant="solid" color="primary">Save Mapping</Button>
          </div>
        </div>
      </template>
    </Dialog>
  </template>
  
  <script>
  import { Dialog} from 'frappe-ui';

  export default {
    name: 'Navbar',
    components: {
      Dialog
    },
    data() {
      return {
        showTeacherMapping: true, // Ensure it's false initially
        selectedTeacher: null,
        teachers: [
          { label: 'Mr. John Doe', value: 'john_doe' },
          { label: 'Ms. Jane Smith', value: 'jane_smith' },
          { label: 'Dr. Albert Kim', value: 'albert_kim' },
        ],
      };
    },
    methods: {
      generateTimetable() {
        console.log('Generating timetable...');
      },
      viewBreaks() {
        console.log('Viewing breaks...');
      },
      resetTimetable() {
        console.log('Resetting timetable...');
      },
      mapTeacherToSubjects() {
        if (!this.selectedTeacher) {
          alert('Please select a teacher.');
          return;
        }
  
        console.log('Mapping Data:', {
          teacher: this.selectedTeacher,
        });
  
        this.closeDialog();
      },
      closeDialog() {
        this.showTeacherMapping = false;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    @apply border-b border-gray-200;
  }
  
  label {
    @apply text-sm font-semibold;
  }
  </style>
  