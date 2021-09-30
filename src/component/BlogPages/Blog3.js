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
import Priyanka from '../../img/blog/pre.jpg';
import Deep from '../../img/blog/deep.jpg';
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';




class Blog3 extends React.Component {

   constructor(props){
      super(props);

      this.state = {
   
      }
   }

   renderblock = () =>{
      return(
   
         <div>
            <h4> Popular  Actree Statement</h4>
            <table >
               <tbody style={{width:'50%'}}>
                  <tr>
                     <td style={{width:'10%'}} >
                        <img src={Priyanka} alt="Priyanka"/>
                     </td>
                     <td >
                        <div>
                           <p>
                           “Financial independence is paramount. My mom always says that when a woman is financially independent, she has the ability to live life on her own terms. I think that was the soundest advice that I ever got. No matter where you go in life or who you get married to, you have to be financially independent — whether you use it or not,”

                           </p>
                           <div>
                              
                            - Priyanka Chopra.
                           </div>
                        </div>
                     </td>
                  </tr>

                  <tr>
                     <td> <img src={Deep} alt="Deep"/></td>
                     <td>
                        <div>
                             <p> “It (being financially independent) gives you a different kind of freedom. Today, I am not dependent on my parents, nor do I need to depend on a man from a financial point of view. And, it is a nice feeling,”  </p>
                          <div> -  Deepika Padukone  </div>
                        </div>
                    </td>
                  </tr>
               </tbody>
            </table>
         </div>

      )
   }

    render(){
      return(
        <Grid container>
           <Grid item>  
               <img src={blog01} alt="blog03" style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}/>
                   
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
                        <div style={{fontSize:'5rem'}}> 12 </div>
                        <div style={{fontSize:'1.8rem',textAlign:'center'}}> Sept </div>
                        <div style={{fontSize:'1.2rem',textAlign:'center'}}> 2021 </div>
                  </div>
               </Grid>
            </Grid>
             
            <Grid item style={{backgroundColor:'white',color:'black',width:'65%',height:'auto',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container" style={{paddingLeft:'2vw',paddingRight:'4vw'}}> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h3>Why is it important for a girl to be job before marriage? (dummy artical) </h3>
                           </div>
                        </div>
                     </div>
                     <div className="blog_content_container">
                     <p><i><h3>"A woman should always be independent"</h3></i></p>
                     <p> It is important for a girl to be financially independent before marriage as well as after marriage.
                          Parents especially feel that as the girl had completed her masters its better she get married.</p>
                      <p>  Financial Independence gives a woman the dignity to live her life respectfully, and freedom to live life on her own times. It gives us an identity of our own apart from just being someone’s daughter, sister, wife, mother, etc. It also empowers women to leave abusive marriages and start a new life of her own. Not only that, husbands treat wives better if she works and earn her own money.</p>
                          
                          
                          
                          {this.renderblock()}

                     



 
                                
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


export default Blog3;


