import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// local componenet
import CommanPage_BckLines from '../BackgroundComponent/CommanPage_BckLines.js';
//css
import '../../css/blog.css';
//img
import blog01 from '../../img/blog/blog01.jpg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fcaebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import  Instagram  from '@material-ui/icons/Instagram';
import Youcut from '../../img/blog/youcut.jpg';
import Canva from '../../img/blog/canva.png'
import MovieMaker from '../../img/blog/moviemaker.png'
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';




class Blog2 extends React.Component {

   constructor(props){
      super(props);

      this.state = {
   
      }
   }

   

    render(){
      return(
        <Grid container>
           <Grid item>  
               <img src={blog01} alt="blog02" style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}/>
                   
           </Grid>
            <Grid container className="menu__side menu__side--l" style={{width:'-webkit-fill-available',position:'fixed'}} xs="2" sm="1" >
                <Grid item xs className="menu__logoSpace"> 
                    <a href="/" className="menu__logo"> Creator Space </a>
                </Grid>
            </Grid>
            
            <Grid item className="menu" style={{position:'fixed',zIndex:'2',right:'0px',top:'6%'}}>
               <Link to="/menu" style={{color:'white'}}> <MenuTwoToneIcon  className="bar" style={{color:'grey',position:'fixed'}}/> </Link>
            </Grid> 


            <Grid container>  
            <Grid item>
            <div className="calendarNav"> 
                  <div className="calendarNav__items">
                     <div className="calendarNav__item" style={{top:'138.8px'}}>
                        <Link   to={'/blog_18september2021'} className="blog_link_name">18 sept 21</Link>
                     </div>
                     <div className="calendarNav__item" style={{top:'277.6px'}}>
                       <Link to ={'/blog_12september2021'} className="blog_link_name"> 12 sept 21 </Link>
                     </div>
                     <div className="calendarNav__item" style={{top:'416.4px'}}>
                       <Link to={'/blog_6september2021'} className="blog_link_name"> 06 sept 21 </Link>
                     </div>
                     <div className="calendarNav__item" style={{top:'555.2px'}}>
                       <Link to={'/blog_24august2021'} className="blog_link_name"> 24 aug 21  </Link> 
                     </div>
                  </div>
               </div>
               </Grid>
            
               <Grid item > 
                  <div style={{position:'absolute',float:'left',left:'24vw',top:'20vh',fontFamily:'NoeDisplay-Medium,Sans-serif'}}>
                        <div style={{fontSize:'5rem'}}> 18 </div>
                        <div style={{fontSize:'1.8rem',textAlign:'center'}}> Sept </div>
                        <div style={{fontSize:'1.2rem',textAlign:'center'}}> 2021 </div>
                  </div>
               </Grid>
            </Grid>
             
            <Grid item style={{backgroundColor:'white',color:'black',width:'65%',height:'auto',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container" style={{paddingLeft:'2vw',paddingRight:'4vw'}}> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h3> Secrets of free video editing with no watermark </h3>
                           </div>
                        </div>
                     </div>
                     <div className="blog_content_container">
                        <p> &nbsp; &ldquo;Editing video can be as simple or as complicated as you want to make it. But however complex you want the final product to be, you will find the process far more enjoyable&ldquo;</p>
                     <p>  &nbsp; In covid-19 pandemic period the use of mobile phone is outbreak response . 
                        In lockdown people find there happiness to make a instagram reels, youtube blog ,many more app similar as a tiktok.</p>
                     <p>Problem is that when we are making a video for youtube channel using different free app like a kinemaster , free version of Adobe , Filmora , FilmoraGo ,etc.
                        But No option to hide watermark .
                     </p>
                     <br/>
                     <p>
                        Here list of free Apps for video editing given below (which i know):
                     </p>
                     <ul>
                        <li> YouCut (Mobile) </li>
                        <li> canva (Both) </li>
                        <li> Windows Movie Maker (PC)</li>
                     </ul>

                     <table>
                        <tbody>
                           <tr>
                              <td>
                                  <img src={Youcut} alt="Youcut" style={{width:'50%'}}/>  
                              </td>
                              <td>
                                 <div>
                                    <h3> YouCut (Mobile) </h3>
                                    <ul>
                                       <li><p> YouCut is a popular free video editing app on Android and it does not feature a watermark on videos </p></li>
                                       <li> <p>YouCut is a free video editing app if, you want access to some more advanced tools and effects (such as backgrounds and a mosaic tool), you'll need to pay a one-time payment of $6.99 for the full version.</p></li>
                                       <li> <p>At the moment, it is not yet available for PC users on Windows or Mac.</p></li>
                                       <li> <p>YouCut allows Android users to Trim , Transition effect between video clips ,Insert text and add stickers ,Color ,more</p></li>
                                       <li> <p>Available :- Google PlayStore </p></li>
                                    </ul>
                                  </div>
                              </td>
                           </tr>
                           
                           <tr>
                              <td>
                                  <img src={Canva} alt="Canva" style={{width:'50%'}}/>
                              </td>
                              <td>
                                  <div>
                                     <h3> Canva (Both) </h3>
                                     <ul>
                                        <li><p>Canva is always free to use for everyone.</p></li>
                                        <li><p>Allows you to easily create invitations, business cards, flyers, lesson plans, Zoom backgrounds, and more using professionally designed templates.</p></li>
                                        <li><p>For Pro version need to pay a one-time payment of 3,999.00/year rs for the full version.</p></li>
                                        <li><p>Canva is better then Photoshop PS.</p></li>
                                        <li> <p>Available :- Google PlayStore.</p></li>
                                     </ul>
                                  </div>
                              </td>
                           </tr>
                           
                           <tr>
                              <td>
                                  <img src={MovieMaker} alt="MovieMaker" style={{width:'50%'}}/> 
                              </td>
                              <td>
                                 <div>
                                     <h3> Windows Movie Maker </h3>
                                    <ul>
                                      <li><p>It offers easy-of use interfaces for editing.</p></li>
                                      <li><p>It provides different transitions. You can add transitions to clips to make the switch smooth and look good.</p></li>
                                      <li><p>It can split or trim video to remove some unwanted parts from your video.</p></li>
                                      <li><p>It offers a lot of text effects to help you complete your movie.</p></li>
                                      <li><p>Available :- On website </p></li>
                                    </ul>
                                  </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>







              
                                 <div>

                                    <a  target="_black" href='https://www.facebook.com/chanchal.panpaliya' style={{textDecoration:'none',color:'black'}}> 
                                     <Fcaebook className="blog_content_icon_facebook"/> 
                                    </a>

                                    <a target="_blank" href='https://twitter.com/CPanpaliya' style={{textDecoration:'none',color:'black'}}> 
                                       <Twitter className="blog_content_icon_twitter"/> 
                                    </a>
                                    
                                    <a target="_blank" href="https://www.instagram.com/chanchal.panpaliya12/" style={{textDecoration:'none',color:'black'}}> 
                                      <Instagram className="blog_content_icon_instagram"/> 
                                    </a>
                                 </div>

                                 <div className="blog_content_back_button">
                                 <Link to="/blogs" style={{textDecoration:'none'}}>
                                 <Button variant="outlined" size="large" color="primary"> 
                                       <ArrowBackIcon className="blog_content_ArrowBackIcon"/> BLOG 
                                 </Button>
                                 </Link>
                                 </div>
                     </div>

            </Grid>
            <CommanPage_BckLines/>
        </Grid> 
    )}
}


export default Blog2;


