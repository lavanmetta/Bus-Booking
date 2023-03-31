const bookings = [
    {
        id: 1,
        route:'Hyderabad to Bangalore',
        bus: 'AC Sleeper, AC Seater',
        price:'₹560'
    },
    {
        id: 2,
        route:'Chennai to Vellore bus',
        bus: 'AC Sleeper, Non AC Seater/Sleeper,',
        price:'₹360'
    },
    {
        id: 3,
        route:'Chennai to Mumbai',
        bus: ' Non AC Seater/Sleeper,',
        price:'₹660'
    },
    {
        id: 4,
        route:'Chennai to Mumbai',
        bus: ' Non AC Seater/Sleeper,',
        price:'₹660'
    },
    {
        id: 5,
        route:'Chennai to Mumbai',
        bus: ' Non AC Seater/Sleeper,',
        price:'₹660'
    },
]

export function getReadyBookings() {
    return bookings;
}