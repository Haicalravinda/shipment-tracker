<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <!-- Modern Header with Glass Effect -->
    <header
      class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50"
    >
      <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div class="flex justify-between items-center py-4">
          <!-- Logo & Company Name -->
          <RouterLink to="/" class="flex items-center space-x-3 group">
            <div
              class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-3 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"
              ></div>
              <svg
                class="w-8 h-8 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h1>PT JEJE HARAPAN TRANSINDO</h1>
              <p class="text-xs text-gray-600 font-medium">Professional Logistics Solutions</p>
            </div>
          </RouterLink>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-2">
            <RouterLink
              to="/"
              class="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700"
              active-class="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Dashboard</span>
              </span>
            </RouterLink>
            <RouterLink
              to="/about"
              class="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700"
              active-class="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>About</span>
              </span>
            </RouterLink>

            <!-- User Menu -->
            <div class="ml-4 pl-4 border-l border-gray-300">
              <button
                class="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                >
                  <span class="text-white text-sm font-bold">JT</span>
                </div>
                <span class="text-sm font-semibold text-gray-700">Admin</span>
              </button>
            </div>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden py-4 border-t border-gray-200 animate-slide-down"
        >
          <nav class="flex flex-col space-y-2">
            <RouterLink
              to="/"
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
              active-class="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            >
              Dashboard
            </RouterLink>
            <RouterLink
              to="/about"
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
              active-class="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            >
              About
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content - Full Width -->
    <main>
      <RouterView />
    </main>

    <!-- Premium Footer -->
    <footer
      class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-20"
    >
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="relative w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <svg
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="font-bold text-lg">PT JEJE HARAPAN TRANSINDO</h3>
            </div>
            <p class="text-blue-200 text-sm leading-relaxed">
              Your trusted partner for professional logistics and transportation solutions across
              Indonesia.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">Tracking</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" class="text-blue-200 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold mb-4 text-blue-300">Contact Us</h4>
            <ul class="space-y-2 text-sm text-blue-200">
              <li class="flex items-start space-x-2">
                <svg
                  class="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@ptjeje.co.id</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  class="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 812 3456 7890</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  class="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200"
        >
          <p>&copy; 2025 PT JEJE HARAPAN TRANSINDO. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Haical Ravinda Rassya</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-gradient-to-r from-blue-600 to-blue-700 text-white;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
