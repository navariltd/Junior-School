<template>
  <div class="max-w-3xl py-12 mx-auto space-y-8">
    <!-- Ping Button -->
    <Button
      icon-left="code"
      @click="$resources.ping.fetch"
      :loading="$resources.ping.loading"
      class="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
    >
      Click to send 'ping' request
    </Button>

    <!-- Page Title -->
    <h1 class="text-4xl font-extrabold text-gray-800">Home</h1>
    
    <!-- Subheading -->
    <h2 class="text-3xl font-bold text-blue-500 underline">
      Hello world!
    </h2>

    <!-- Info Text -->
    <p class="mt-4 text-gray-600 leading-relaxed">
      This page uses the <code class="bg-gray-200 px-2 py-1 rounded"> $resources </code> property to fetch data from the server.
    </p>

    <!-- Ping Data Display -->
    <div v-if="$resources.ping.data" class="p-4 bg-gray-100 rounded-lg shadow-inner">
      <p class="text-gray-700 font-medium">Response Data:</p>
      <pre class="mt-2 text-sm text-gray-800">{{ $resources.ping.data }}</pre>
    </div>

    <!-- Full Ping Response -->
    <pre class="p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">{{ $resources.ping }}</pre>

    <!-- Open Dialog Button -->
    <Button
      @click="showDialog = true"
      class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
    >
      Open Dialog
    </Button>

    <!-- Dialog Component -->
    <Dialog title="Welcome" v-model="showDialog" class="rounded-lg shadow-lg">
      <p class="text-gray-700">This is a sample dialog content.</p>
    </Dialog>
  </div>
</template>

<script>
import { Dialog } from 'frappe-ui'

export default {
  name: 'Home',
  data() {
    return {
      showDialog: false,
    }
  },
  resources: {
    ping: {
      url: 'ping',
    },
  },
  components: {
    Dialog,
  },
}
</script>

