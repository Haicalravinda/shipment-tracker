import { defineStore } from 'pinia'
import { ref } from 'vue'
import { shipments as mockShipments, transporters as mockTransporters } from '../services/mockData'

export const useShipmentStore = defineStore('shipment', () => {
    // State
    const shipments = ref([])
    const transporters = ref([])
    const loading = ref(false)

    // Actions (Simulating Async API calls)
    const fetchData = async() => {
        loading.value = true
            // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Load data only if empty (preserves state during navigation)
        if (shipments.value.length === 0) {
            shipments.value = mockShipments
        }
        if (transporters.value.length === 0) {
            transporters.value = mockTransporters
        }
        loading.value = false
    }

    const getShipmentById = (id) => {
        return shipments.value.find((s) => s.id === id)
    }

    const assignTransporter = async(shipmentId, transporterId) => {
        loading.value = true
        await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate delay

        const shipment = shipments.value.find((s) => s.id === shipmentId)
        if (shipment) {
            shipment.transporterId = transporterId
            shipment.status = 'Assigned'
            loading.value = false
            return true // Success
        }
        loading.value = false
        return false // Failure
    }

    return { shipments, transporters, loading, fetchData, getShipmentById, assignTransporter }
})