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
import bookcover from '../../img/blog/book.png';
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';




class Blog5 extends React.Component {

   constructor(props){
      super(props);

      this.state = {
   
      }
   }

   
   renderData=()=>{
      return(
         <div>
            <h4> Techniques in Handling People </h4>
            <br/>
            <ol>
              <li>Don’t criticize, condemn or complain.</li>
              <li>Give honest and sincere appreciation.</li>
              <li>Arouse in the other person an eager want.</li>
           </ol>
           <br/>
           <h4> Six ways to Make People Like You </h4>
           <ol>
              <li>Become genuinely interested in other people.</li>
              <li> Smile. </li>
               <li> Remember that a person’s name is to that person the sweetest and most important sound in any language.</li>
               <li> Be a good listener. Encourage others to talk about themselves.</li>
               <li> Talk in terms of the other person’s interests.</li>
                <li>Make the other person feel important – and do it sincerely.</li>
           </ol>
           <br/>
           <h4> Win People to Your Way of Thinking </h4>
           <ol>
              <li> The only way to get the best of an argument is to avoid it. </li>
              <li> Show respect for the other person’s opinions. Never say, “You’re wrong.” </li>
              <li> If you are wrong, admit it quickly and emphatically. </li>
              <li> Begin in a friendly way.</li>
              <li> Get the other person saying “yes, yes” immediately. </li>
              <li> Let the other person do a great deal of the talking. </li>
              <li> Let the other person feel that the idea is his or hers.</li>
              <li> Try honestly to see things from the other person’s point of view.</li>
              <li> Be sympathetic with the other person’s ideas and desires.</li>
              <li> Appeal to the nobler motives.</li>
              <li> Dramatize your ideas.</li>
              <li> Throw down a challenge.</li>
           </ol>
           <br/>
           <h4>Be a Leader: How to Change People Without Giving Offense or Arousing Resentment</h4>
           <ol>
              <li> Begin with praise and honest appreciation. </li>
              <li> Call attention to people’s mistakes indirectly. </li>
              <li> Talk about your own mistakes before criticizing the other person. </li>
              <li> Ask questions instead of giving direct orders. </li>
              <li> Let the other person save face.</li>
              <li> Praise the slightest improvement and praise every improvement. Be “hearty in your approbation and lavish in your praise.”</li>
              <li> Give the other person a fine reputation to live up to.</li>
              <li> Use encouragement. Make the fault seem easy to correct.</li>
              <li> Make the other person happy about doing the thing you suggest.</li>
           </ol>
         </div>
      )
   }

    render(){
      return(
        <Grid container>
           <Grid item>  
               <img src={blog01} alt="blog05" style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}/>
                   
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
                        <div style={{fontSize:'5rem'}}> 24 </div>
                        <div style={{fontSize:'1.8rem',textAlign:'center'}}> Aug </div>
                        <div style={{fontSize:'1.2rem',textAlign:'center'}}> 2021 </div>
                  </div>
               </Grid>
            </Grid>
             
            <Grid item style={{backgroundColor:'white',color:'black',width:'65%',height:'auto',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container" style={{paddingLeft:'2vw',paddingRight:'4vw'}}> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h3>The Best Summary of <i>How to Win Friends and Influence People </i> (dummy artical)</h3>
                           </div>
                        </div>
                     </div>
                     <div className="blog_content_container">
                        <img src={bookcover} alt="bookcover" style={{paddingLeft:'35%'}}/>
                          {this.renderData()}
                  
                                 
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


export default Blog5;


