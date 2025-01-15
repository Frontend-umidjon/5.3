import { VscAccount } from "react-icons/vsc";
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'
import course4 from '../assets/course4.png'
import course5 from '../assets/course5.png'
import course6 from '../assets/course6.png'

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
export const ABOUT = [
    {
        id:1,
        text:'A fermentum in morbi pretium aliquam adipiscing donec tempus.'
    },
    {
        id:2,
        text:'Vulputate placerat amet pulvinar lorem nisl.'
    },
    {
        id:3,
        text:'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.'
    },
    {
        id:4,
        text:'Etiam duis lobortis in fames ultrices commodo nibh.'
    },
    {
        id:5,
        text:'Tincidunt sagittis neque sem ac eget.'
    },
    {
        id:6,
        text:'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.'
    }
]

export const COURSES = [
    {
        id:1,
        img:{
            src:course1,
            alt:'course1'
        },
        course:{
            title:'Marketing',
            bg:'bg-[#03CEA4]',
        },
        title:'The Ultimate Google Ads Training Course',
        price:'$100',
        tutor:'by Jerome Bell'
    },
    {
        id:2,
        img:{
            src:course2,
            alt:'course2'
        },
        course:{
            title:'HR & Recruting',
            bg:'bg-[#F89828]',
        },
        title:'HR  Management and Analytics',
        price:'$200',
        tutor:'by Leslie Alexander Li'
    },
    {
        id:3,
        img:{
            src:course3,
            alt:'course3'
        },
        course:{
            title:'Management',
            bg:'bg-[#5A87FC]',
        },
        title:'Business Development Management',
        price:'$480',
        tutor:'by Dianne Russell'
    },
    {
        id:4,
        img:{
            src:course4,
            alt:'course4'
        },
        course:{
            title:'Management',
            bg:'bg-[#5A87FC]',
        },
        title:'Product Management Fundamentals',
        price:'$480',
        tutor:'by Marvin McKinney'
    },
    {
        id:5,
        img:{
            src:course5,
            alt:'course5'
        },
        course:{
            title:'Marketing',
            bg:'bg-[#03CEA4]',
        },
        title:'Brand Management & PR Communications',
        price:'$530',
        tutor:'by Kristin Watson'
    },
    {
        id:6,
        img:{
            src:course6,
            alt:'course6'
        },
        course:{
            title:'Design',
            bg:'bg-[#F52F6E]',
        },
        title:'Graphic Design Basic',
        price:'$500',
        tutor:'by Guy Hawkins'
    }

]