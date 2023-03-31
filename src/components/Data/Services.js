import bus from '../Assets/bus.png';
import customer from '../Assets/customer.png';
import delivery from '../Assets/delivery.png';
import happy from '../Assets/happy.png';



const services = [
    {
        id: 1,
        img: delivery,
        number: '1000',
        text:'Discover new destinations and experience the journey with BusBooking.com - choose from over 1000 routes for your next adventure'
    },
    {
        id: 2,
        img: bus,
        number: '500',
        text:'Travel with confidence - partners with over 500 bus operators to bring you safe and comfortable journeys to your desired destinations.'
    },
    {
        id: 3,
        img: happy,
        number: '20000',
        text:'Happy customers who trust us for their travel needs! Book your bus tickets today and experience hassle-free journeys with us'
    },
    {
        id: 4,
        img: customer,
        number: '24/7',
        text:'Travel with peace of mind - We offers 24/7 customer service support to ensure you have a seamless booking experience and a stress-free journey'
    }

]


export function ServicesList() {
   return services
}