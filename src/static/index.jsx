import { VscAccount } from "react-icons/vsc";

export const NAVLINKS =[
    {
        id:1,
        text:'About Us',
        url:'/'
    },
    {
        id:2,
        text:'Courses',
        url:'/courses'
    },
    {
        id:3,
        text:'Events',
        url:'/events'
    },
    {
        id:4,
        text:'Blog',
        url:'/blog'
    },
    {
        id:5,
        text:'Contacts',
        url:'/contacts'
    }

]

export const  NAVBUTTONS = [
    {
        id:1,
        text:'Get consultation',
        icon:null,
        url:'/',
        bg:'bg-[#FF3F3A]',
        color:'text-white'
    },
    {
        id:2,
        text:'Login/Register',
        icon:<VscAccount/>,
        url:'/',
        bg:'bg-transparent',
        color:'text-[#424551]'
    }
]