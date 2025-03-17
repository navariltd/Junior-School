

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar
    />
    <main class="p-8">
      <h1 class="text-3xl font-semibold">Timetable Generator</h1>
      <p class="text-gray-600 mt-2">Set your rules and generate a timetable seamlessly.</p>

      <div class="mt-8">
        <p v-if="timetable" class="text-black">{{ timetable }}</p>
        <p v-else class="text-gray-500">Timetable content will appear here...</p>
      </div>
    </main>
  </div>
</template>

<script>
import { frappeRequest, ErrorMessage } from 'frappe-ui';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};

</script>
<style scoped>
main {
  @apply container mx-auto;
}
</style>
