import img1 from '../Assets/nav1.jpg'
import img2 from '../Assets/nav2.jpg'
import img3 from '../Assets/nav3.jpg'


const links = [
    {
        LinkName: 'Home',
        link: '/home'
    },
    {
        LinkName: 'Book',
        link: '/booking'
    },
    {
        LinkName: 'Register',
        link: '/register'
    },
    {
        LinkName: 'Contact',
        link: '/contact'
    },
    {
        LinkName: 'Profile',
        link: '/profile'
    }
]

const navImages = [img1, img2, img3]



 export function NavbarLinks() {
    return links
}

export function NavbarImages() {
    return navImages
}