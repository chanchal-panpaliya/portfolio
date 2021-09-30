import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

// local componenet
import CommanPage_BckLines from '../component/BackgroundComponent/CommanPage_BckLines.js';
import MenuLeft from './MenuBar/MenuLeft.js';
//css
import '../css/blog.css';
//video
import blogs_background_video from '../video/banner.mp4';
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import HVPM_icon from '../img/carrer/hvpm.png';
import IICMR_icon from '../img/carrer/iicmr.jpg';
import TCS_icon from '../img/carrer/tks.jpg';
import BBS_icon from '../img/carrer/bbs.jpg';

class Carrer extends React.Component {


    render(){
      return(
        <Grid container>
           <Grid item>  
               <video loop autoPlay muted style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}>
                  <source type="video/mp4" src={blogs_background_video} />
               </video>
           </Grid>

            <MenuLeft colorchange=""/>
            
            <Grid item className="menu" style={{position:'fixed',zIndex:'2',right:'0px',top:'6%'}}>
               <Link to="/menu" style={{color:'white'}}> <MenuTwoToneIcon  className="bar" style={{color:'grey',position:'fixed'}}/> </Link>
            </Grid> 


            <Grid item style={{position:'absolute',left:'24.1vw',top:'40vh',zIndex:'2',width:'50vw',height:'20vh'}}>
       
               <Timeline align="alternate">
                  <TimelineItem> 
                  <TimelineSeparator>
                      <img src={BBS_icon} alt="buzzybrainslogo" style={{borderRadius:'50%',position:'absolute',zIndex:'2',width:'5%'}}/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                     <Paper elevation={3} >
                        <Typography variant="h6" component="h1"  style={{position:'relative',fontFamily:'NoeDisplay-Medium,Sans-serif'}}>
                         <h5> BuzzyBrains software (I) Pvt. Ltd.Pune </h5>
                        </Typography>
                        <Typography><h6>Software trainee (8 Months)</h6></Typography>
                     </Paper>
                  </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineSeparator>
                      <img src={TCS_icon} alt="technomaticlogo" style={{borderRadius:'50%',position:'absolute',zIndex:'2',width:'5%'}}/>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                     <Paper elevation={3} >
                        <Typography variant="h6" component="h1"  style={{position:'relative',fontFamily:'NoeDisplay-Medium,Sans-serif'}}>
                        <h5> Techknomatic Services Pvt. Ltd. Pune </h5>
                        </Typography>
                        <Typography><h6>Internship ( 5 Months)</h6></Typography>
                     </Paper>
                  </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineSeparator>
                      <img src={IICMR_icon} alt="iicmrlogo" style={{borderRadius:'50%',position:'absolute',zIndex:'2',width:'5%'}}/>
                     <TimelineConnector  />
                  </TimelineSeparator>
                  <TimelineContent>
                     <Paper elevation={3} >
                        <Typography variant="h6" component="h1"  style={{position:'relative',fontFamily:'NoeDisplay-Medium,Sans-serif'}}>
                         <h5>Institute Of Industrial and Computer Management and Research,Pune (Maha)</h5>
                        </Typography>
                        <Typography><h6>MCA (2015-18)</h6></Typography>
                     </Paper>
                  </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                  <TimelineSeparator>
                        <img src={HVPM_icon} alt="hvpmlogo" style={{borderRadius:'50%',position:'absolute',zIndex:'2',width:'5%'}}/>
                  </TimelineSeparator>

                  <TimelineContent>
                     <Paper elevation={3}>
                        <Typography variant="h6" component="h1" style={{position:'relative',fontFamily:'NoeDisplay-Medium,Sans-serif'}}>
                        <h5>HVPM Degree College of Physical Education,Amravati (Maharastra) </h5>
                        </Typography>
                        <Typography><h6>BCA (2013-15)</h6></Typography>
                     </Paper>
                  </TimelineContent>
                  </TimelineItem>
               </Timeline>
                    
            </Grid>
            
            <Grid item style={{backgroundColor:'white',color:'black',width:'49.5vw',height:'120vh',position:'absolute',right:'0',top:'15vh',zIndex:'1'}}>
                     <div className="blog_heading_container"> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h1> Career </h1>
                           </div>
                        </div>
                     </div>
            </Grid>

            <CommanPage_BckLines/>
        </Grid> 
    )}
}


export default Carrer;