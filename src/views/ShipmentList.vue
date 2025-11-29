<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Section with Image -->
    <div class="mb-8 relative overflow-hidden rounded-3xl shadow-2xl">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
          alt="Logistics Trucks"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 px-8 py-12 md:py-16">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-white mb-6 md:mb-0">
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <span class="text-blue-200 text-sm font-semibold uppercase tracking-wide"
                >Live Tracking System</span
              >
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-3">Shipment Management</h1>
            <p class="text-blue-100 text-lg max-w-2xl">
              Monitor and manage all your shipments in real-time with our advanced logistics
              platform
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div class="flex items-center justify-between mb-2">
                <svg
                  class="w-8 h-8 text-green-300"
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
              </div>
              <p class="text-3xl font-bold text-white mb-1">{{ assignedCount }}</p>
              <p class="text-blue-200 text-sm">Assigned</p>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div class="flex items-center justify-between mb-2">
                <svg
                  class="w-8 h-8 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-3xl font-bold text-white mb-1">{{ pendingCount }}</p>
              <p class="text-blue-200 text-sm">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="store.loading" class="flex items-center justify-center py-20">
      <div class="text-center">
        <div class="relative w-24 h-24 mx-auto mb-6">
          <div class="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div
            class="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"
          ></div>
          <svg
            class="absolute inset-0 m-auto w-12 h-12 text-blue-600"
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
        <p class="text-gray-600 font-medium text-lg">Loading shipments...</p>
        <p class="text-gray-400 text-sm mt-2">Please wait while we fetch your data</p>
      </div>
    </div>

    <!-- Shipments Grid -->
    <div v-else>
      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-2">{{ store.shipments.length }}</h3>
          <p class="text-blue-100">Total Active Shipments</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-blue-100">Real-time tracking available</p>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-2">{{ assignedCount }}</h3>
          <p class="text-green-100">Successfully Assigned</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-green-100">Drivers are on route</p>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-2">{{ pendingCount }}</h3>
          <p class="text-orange-100">Awaiting Assignment</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-orange-100">Requires attention</p>
          </div>
        </div>
      </div>

      <!-- Section Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">All Shipments</h2>
          <p class="text-gray-500 text-sm">Click on any shipment to view details</p>
        </div>
        <div class="flex items-center space-x-2">
          <button
            class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <!-- Shipments Cards -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="shipment in store.shipments"
          :key="shipment.id"
          class="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden group cursor-pointer"
        >
          <!-- Card Image Header -->
          <div class="relative h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
              alt="Truck"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <!-- Status Badge -->
            <div class="absolute top-3 right-3">
              <span
                class="px-3 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                :class="
                  shipment.status === 'Assigned'
                    ? 'bg-green-500/90 text-white ring-2 ring-white/50'
                    : 'bg-yellow-400/90 text-gray-900 ring-2 ring-white/50'
                "
              >
                {{ shipment.status }}
              </span>
            </div>

            <!-- Shipment ID -->
            <div class="absolute bottom-3 left-3">
              <p class="text-xs text-white/80 font-medium mb-1">Shipment ID</p>
              <h3 class="font-bold text-lg text-white">{{ shipment.id }}</h3>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-5">
            <!-- Route Info -->
            <div class="mb-5">
              <div class="flex items-center space-x-3">
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <p class="text-xs text-gray-500 font-medium">Origin</p>
                  </div>
                  <p class="font-bold text-sm text-gray-900 truncate">{{ shipment.origin }}</p>
                </div>

                <div class="flex-shrink-0 px-3">
                  <svg
                    class="w-6 h-6 text-blue-600 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                <div class="flex-1 text-right">
                  <div class="flex items-center justify-end mb-2">
                    <p class="text-xs text-gray-500 font-medium mr-2">Destination</p>
                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p class="font-bold text-sm text-gray-900 truncate">{{ shipment.destination }}</p>
                </div>
              </div>
            </div>

            <!-- Vehicle Type with Icon -->
            <div
              class="mb-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="bg-blue-100 p-2 rounded-lg">
                    <svg
                      class="w-5 h-5 text-blue-600"
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
                  <div>
                    <p class="text-xs text-gray-500">Vehicle Type</p>
                    <p class="font-semibold text-gray-900">{{ shipment.vehicleType }}</p>
                  </div>
                </div>
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <!-- Action Button -->
            <button
              @click="goToDetail(shipment.id)"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center space-x-2 group-hover:scale-[1.02]"
            >
              <span>View Details</span>
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="store.shipments.length === 0" class="text-center py-20">
        <div class="inline-block p-8 bg-gray-100 rounded-full mb-4">
          <svg
            class="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">No Shipments Found</h3>
        <p class="text-gray-500">There are currently no shipments to display.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useShipmentStore } from '../stores/shipment'
import { useRouter } from 'vue-router'

const store = useShipmentStore()
const router = useRouter()

const assignedCount = computed(() => store.shipments.filter((s) => s.status === 'Assigned').length)

const pendingCount = computed(() => store.shipments.filter((s) => s.status !== 'Assigned').length)

onMounted(() => {
  store.fetchData()
})

const goToDetail = (id) => {
  router.push({ name: 'detail', params: { id } })
}
</script>
