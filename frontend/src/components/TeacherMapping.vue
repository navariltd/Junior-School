<template>
  <Button @click="dialogOpen = true">Open Dialog</Button>

  <Dialog title="This is Dialog" v-model="dialogOpen">
    <div class="text-base">Dialog content</div>
    <Button @click="mapTeacherToSubjects">Map Teachers</Button>
    <Button @click="dialogOpen = false">Close</Button>
  </Dialog>
</template>

<script>
import { Dialog } from 'frappe-ui';

export default {
  name: 'TeacherMappingDialog',
  components: {
    Dialog,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialogOpen: false,
      selectedTeacher: null,
      selectedSubjects: [],
      teachers: [
        { label: 'Mr. John Doe', value: 'john_doe' },
        { label: 'Ms. Jane Smith', value: 'jane_smith' },
      ],
      subjects: [
        { label: 'Mathematics', value: 'math' },
        { label: 'Physics', value: 'physics' },
      ],
    };
  },
  watch: {
    open: {
      immediate: true,
      handler(value) {
        this.dialogOpen = value;
      },
    },
  },
  methods: {
    mapTeacherToSubjects() {
      if (!this.selectedTeacher) {
        alert('Please select a teacher.');
        return;
      }

      console.log('Mapped Data:', {
        teacher: this.selectedTeacher,
        subjects: this.selectedSubjects,
      });

      this.dialogOpen = false; // Close the dialog directly
      this.resetDialog();
    },
    resetDialog() {
      this.selectedTeacher = null;
      this.selectedSubjects = [];
    },
  },
};
</script>

<style scoped>
label {
  @apply text-sm font-semibold;
}
</style>
