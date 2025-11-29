import { setActivePinia, createPinia } from 'pinia'
import { useShipmentStore } from '../shipment'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Shipment Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('assigns a transporter successfully', async() => {
        const store = useShipmentStore()

        // 1. Setup Initial Data
        await store.fetchData()
        const targetId = 'SHP-001'
        const transporterId = 1

        // 2. Execute Action
        const result = await store.assignTransporter(targetId, transporterId)

        // 3. Assertions
        expect(result).toBe(true)
        const updatedShipment = store.getShipmentById(targetId)
        expect(updatedShipment.status).toBe('Assigned')
        expect(updatedShipment.transporterId).toBe(transporterId)
    })
})