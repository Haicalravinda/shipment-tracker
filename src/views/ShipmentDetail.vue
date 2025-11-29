<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <button
      @click="$router.back()"
      class="flex items-center space-x-2 text-blue-600 mb-6 hover:text-blue-700 transition-colors group bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200"
    >
      <svg
        class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium">Back to Dashboard</span>
    </button>

    <div v-if="shipment">
      <div class="relative overflow-hidden rounded-3xl shadow-2xl mb-6">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80"
            alt="Logistics warehouse"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-purple-900/95"
          ></div>
        </div>

        <div class="relative z-10 p-8">
          <div class="flex items-start justify-between flex-wrap gap-4">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-4">
                <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span class="text-blue-100 text-sm font-semibold uppercase tracking-wide"
                  >Shipment Details</span
                >
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">{{ shipment.id }}</h1>
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="px-4 py-2 text-sm font-bold rounded-full shadow-lg"
                  :class="
                    shipment.status === 'Assigned'
                      ? 'bg-green-500 text-white ring-2 ring-green-300'
                      : 'bg-yellow-400 text-gray-900 ring-2 ring-yellow-300'
                  "
                >
                  {{ shipment.status }}
                </span>
                <span
                  class="text-blue-100 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                >
                  Last updated: {{ new Date().toLocaleDateString() }}
                </span>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <svg
                class="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div
          class="md:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          <div class="relative h-24 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80"
              alt="Route map"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
            <div class="absolute inset-0 flex items-center px-6">
              <h3 class="text-xl font-bold text-white flex items-center">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Route Information
              </h3>
            </div>
          </div>

          <div class="p-6 space-y-6">
            <div class="relative pl-10 pb-8">
              <div
                class="absolute left-0 top-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2.5 shadow-lg ring-4 ring-green-100"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg border-l-4 border-green-500"
              >
                <p class="text-xs text-green-600 font-semibold mb-1 uppercase tracking-wide">
                  Origin Point
                </p>
                <p class="text-lg font-bold text-gray-900">{{ shipment.origin }}</p>
              </div>

              <div
                class="absolute left-5 top-12 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300"
              ></div>
            </div>

            <div class="relative pl-10">
              <div
                class="absolute left-0 top-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full p-2.5 shadow-lg ring-4 ring-red-100"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="bg-gradient-to-r from-red-50 to-transparent p-4 rounded-lg border-l-4 border-red-500"
              >
                <p class="text-xs text-red-600 font-semibold mb-1 uppercase tracking-wide">
                  Destination Point
                </p>
                <p class="text-lg font-bold text-gray-900">{{ shipment.destination }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div class="relative h-24 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80"
              alt="Truck fleet"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-orange-600/90 to-orange-700/90"
            ></div>
            <div class="absolute inset-0 flex items-center px-6">
              <h3 class="text-lg font-bold text-white flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                Vehicle
              </h3>
            </div>
          </div>

          <div class="p-6">
            <div
              class="bg-gradient-to-br from-orange-50 via-orange-50 to-yellow-50 rounded-2xl p-6 text-center border-2 border-orange-200"
            >
              <div
                class="bg-white rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg ring-4 ring-orange-100"
              >
                <svg
                  class="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <p class="text-xs text-orange-600 font-semibold mb-2 uppercase tracking-wide">
                Vehicle Type
              </p>
              <p class="text-2xl font-bold text-gray-900">{{ shipment.vehicleType }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-bold text-gray-900 flex items-center">
            <svg
              class="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Transporter Assignment
          </h3>
        </div>

        <div class="p-6">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Select Transporter
              </label>
              <select
                v-model="selectedTransporter"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                :disabled="store.loading"
              >
                <option disabled value="">Choose a transporter...</option>
                <option v-for="t in store.transporters" :key="t.id" :value="t.id">
                  {{ t.name }}
                </option>
              </select>
            </div>

            <div class="sm:pt-7">
              <button
                @click="handleAssign"
                :disabled="!selectedTransporter || store.loading"
                class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
              >
                <svg
                  v-if="!store.loading"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div
                  v-else
                  class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"
                ></div>
                <span>{{ store.loading ? 'Processing...' : 'Assign Transporter' }}</span>
              </button>
            </div>
          </div>

          <div
            v-if="message"
            class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3 animate-fade-in"
          >
            <svg
              class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="text-sm font-medium text-green-800">{{ message }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <div class="inline-block p-8 bg-red-100 rounded-full mb-4">
        <svg class="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-gray-700 mb-2">Shipment Not Found</h3>
      <p class="text-gray-500 mb-6">
        The shipment you're looking for doesn't exist or has been removed.
      </p>
      <button
        @click="$router.back()"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Dashboard
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useShipmentStore } from '../stores/shipment'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useShipmentStore()
const selectedTransporter = ref('')
const message = ref('')

const shipment = computed(() => store.getShipmentById(route.params.id))

onMounted(async () => {
  if (store.shipments.length === 0) {
    await store.fetchData()
  }
  if (shipment.value && shipment.value.transporterId) {
    selectedTransporter.value = shipment.value.transporterId
  }
})

const handleAssign = async () => {
  if (!selectedTransporter.value) return

  const success = await store.assignTransporter(shipment.value.id, selectedTransporter.value)

  if (success) {
    message.value = 'Transporter assigned successfully!'
    setTimeout(() => (message.value = ''), 3000)
  } else {
    message.value = 'Failed to assign transporter. Please try again.'
    setTimeout(() => (message.value = ''), 3000)
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
