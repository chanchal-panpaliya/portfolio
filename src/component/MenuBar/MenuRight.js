import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
//
import '../../css/menuLeft.css';

class MenuRight extends React.Component{
    render(){
        return(
            <div className="nav-menu-close">
               <Link to="./" style={{textDecoration:'none',color:'white'}}>
                <CloseIcon/>
               </Link>
            </div>
        )
    }
}

export default MenuRight;