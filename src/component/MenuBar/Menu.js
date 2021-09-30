import React from 'react';
import {Link} from 'react-router-dom';

//css
import '../../css/transition.css';
import '../../css/navbar.css';
//local component
import SideBar from './SideBar.js';
import BackgroundLine from '../BackgroundComponent/BackgroundLines.js';
import MenuLeft from '../MenuBar/MenuLeft.js';
import MenuRight from '../MenuBar/MenuRight.js';
//icon
import Logo from '../../img/logo8_23_161956.png';
import  YouTube  from '@material-ui/icons/YouTube';
import  Instagram  from '@material-ui/icons/Instagram';

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundimg:'' 
        }
    }
    render(){
        // console.log("backgroundimg--->",this.state.backgroundimg);
        return(

                <div> 
                            <BackgroundLine OnHoverImage={this.state.backgroundimg}/>
                            <MenuLeft/>
                    
                        <nav className="MenuContainer">
                     
                            <ul className='nav-menu-items'>
                                { SideBar.map((item,index)=>{
                                    return(
                                    <li key={index} className={item.Name}> 
                                     <h6>0{index+1}.</h6>
                                        <Link to={item.path} onMouseOver={()=>{this.setState({backgroundimg:item.back_img})}} onMouseLeave={()=>{this.setState({backgroundimg:""})}}>
                                            <span>{item.title}</span> 
                                        </Link>
                                    </li> 
                                    )
                                }) 
                                }
                            </ul>
                           
                       
                            <div className="Contact-Us">
                                <div style={{position:'absolute',left:'15%'}}>Contact Me</div>
                                <div><img src={Logo} alt="logo_cretorspace" style={{position:'absolute',width:'40%',left:'-9%',top:'2%'}}/> </div>
                                
                                <div className="Contact-Us-data">
                                    <div>
                                        <a target="_blank" href="https://www.youtube.com/channel/UCNBEZbgBoLLpopG7vKmDGnw" alt="youtubelink" style={{textDecoration:'none',color:'white'}}>
                                            <YouTube/> </a>  
                                    Youtube 
                                    </div>
                                    <div>
                                         <a target="_blank" href="https://www.instagram.com/creatorspace01/" alt="instagramlinkk" style={{textDecoration:'none',color:'white'}}> 
                                         <Instagram/>  </a>
                                         Instagram 
                                    </div>
                                    <br/>
                                    <div>
                                    Personal  <br/>
                                    mail_id:- chanchal.panpaliya@gmail.com 
                                    </div>
                                </div>       
                            </div>
                       
                            </nav>
                       
                        <MenuRight/>
                         
                </div>
        );
    }
}

export default Menu;

