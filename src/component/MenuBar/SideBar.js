import React from 'react';
import PORTFOLIO from '@material-ui/icons/AddBox';
import PROJECTS from '@material-ui/icons/Widgets'; 
import BLOGS from '@material-ui/icons/ViewList';
import CAREER from '@material-ui/icons/School';
// import MORE from '@material-ui/icons/MoreHoriz';
//background img
import temp1 from '../../img/temp/temp11.png';
import temp2 from '../../img/temp/temp33.png';
import temp3 from '../../img/temp/temp44.png';
import temp4 from '../../img/temp/temp22.png';
// import temp5 from '../../img/temp/temp5.png';

const SideBar =[
    {
        title: 'HOME',
        path:'/', 
        icon: <PORTFOLIO/>,
        Name: 'nav-text',
        back_img:temp1
    },
    {
        title: 'PROJECT',
        path:'/projects', 
        icon: <PROJECTS/>,
        Name: 'nav-text',
        back_img:temp2
    },
    {
        title: 'BLOG',
        path:'/blogs',
        icon: <BLOGS/>,
        Name: 'nav-text',
        back_img:temp3
    },
    {
        title: 'CAREER',
        path:'/carrer',
        icon: <CAREER/>,
        Name: 'nav-text',
        back_img:temp4
    },
    // {
    //     title: 'MORE',
    //     path:'/more',
    //     icon: <MORE/>,
    //     Name: 'nav-text',
    //     back_img:temp5
    // }
];

export default SideBar;