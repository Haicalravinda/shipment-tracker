export const shipments = [{
        id: 'SHP-001',
        origin: 'Jakarta',
        destination: 'Bandung',
        status: 'Not Assigned',
        transporterId: null,
        vehicleType: 'Truck',
    },
    {
        id: 'SHP-002',
        origin: 'Surabaya',
        destination: 'Malang',
        status: 'Assigned',
        transporterId: 1,
        vehicleType: 'Van',
    },
    {
        id: 'SHP-003',
        origin: 'Medan',
        destination: 'Aceh',
        status: 'Not Assigned',
        transporterId: null,
        vehicleType: 'Pickup',
    },
]

export const transporters = [
    { id: 1, name: 'Transporter A' },
    { id: 2, name: 'Transporter B' },
    { id: 3, name: 'Transporter C' },
]