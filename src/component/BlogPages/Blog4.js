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
import ai from '../../img/blog/art.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fcaebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import  Instagram  from '@material-ui/icons/Instagram';
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';




class Blog4 extends React.Component {

   constructor(props){
      super(props);

      this.state = {
   
      }
   }

   

    render(){
      return(
        <Grid container>
           <Grid item>  
               <img src={blog01} alt="blog04" style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}/>
                   
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
                        <div style={{fontSize:'5rem'}}> 06 </div>
                        <div style={{fontSize:'1.8rem',textAlign:'center'}}> Sept </div>
                        <div style={{fontSize:'1.2rem',textAlign:'center'}}> 2021 </div>
                  </div>
               </Grid>
            </Grid>
             
            <Grid item style={{backgroundColor:'white',color:'black',width:'65%',height:'auto',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container" style={{paddingLeft:'2vw',paddingRight:'4vw'}}> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h3>ARTIFICIAL INTELLIGENCE APPLICATIONS IN FINANCIAL SERVICES (dummy artical) </h3>
                           </div>
                        </div>
                     </div>
                     <div className="blog_content_container">
                        <img src={ai} alt="ArtificialIntelligence" />
                     <p>Artificial Intelligence (AI) is a powerful tool that is already widely deployed in financial services. 
                     It has great potential for positive impact if companies deploy it with sufficient diligence, prudence, and care. 
                     This paper is a collaborative effort between Bryan Cave Leighton Paisner LLP (BCLP), Hermes, Marsh, and Oliver Wyman on the pros and cons of AI applications in three areas of financial services: asset management, banking, and insurance. 
                     It aims to facilitate board-level discussion on AI. 
                     In each section, we suggest questions that board directors can discuss with their management team.</p>

                     <p>We highlight a number of specific applications, including risk management, alpha generation and stewardship in asset management, 
                     chatbots and virtual assistants, underwriting, relationship manager augmentation, fraud detection, and algorithmic trading. 
                     In insurance, we look at core support practices and customer-facing activities. We also address the use of AI in hiring.</p>

                     <p>There are many benefits of using AI in financial services. It can enhance efficiency and productivity  through automation; 
                        reduce human biases and errors caused by psychological or emotional factors; 
                        and improve the quality and conciseness of management information by spotting either anomalies or longer-term trends that 
                        cannot be easily picked up by current reporting methods. These applications are particularly helpful when new regulations, 
                        such as the European Union Markets in Financial Instruments Directive II (MiFID II), increase senior management’s level of 
                        responsibility to review and consider higher-quality data from within the firm.</p>

                     <p>However, if organisations do not exercise enough prudence and care in AI applications, 
                        they face potential pitfalls. These include bias in input data, process and outcome when profiling 
                        customers and scoring credit, and due diligence risk in the supply chain. Users of AI analytics must have a thorough 
                        understanding of the data that has been used to train, test, retrain, upgrade and use their AI systems. 
                        This is critical when analytics are provided by third parties or when proprietary analytics are built on third-party data and platforms. 
                        There are also concerns over the appropriateness of using big data in customer profiling and credit scoring. 
                        In November 2016, for instance, a British insurer abandoned a plan to assess first-time car owners’ propensity to drive safely – 
                        and use the results to set the level of their insurance premiums – by using social media posts to analyse their personality traits.  
                        The social media service company in question said that the initiative breached its privacy policy, according to which data should not be 
                        used to “make decisions about eligibility, including whether to approve or reject an application or how much interest to charge on a loan.”</p>

                     <p>These concerns often have legal and financial implications, 
                     in addition to carrying reputational risks. For example, the General Data Protection Regulation (GDPR) gives EU citizens the right of 
                     information and access, the right of rectification, the right of portability, the right to be forgotten, the right to restrict the processing 
                     of their data, and the right to restriction of profiling . However, it is unclear how easily individuals can opt out of the sharing of their 
                     data  for customer profiling. It is also unclear whether opting out will affect individuals’ credit scoring, which in turn could affect the 
                     pricing of insurance products and their eligibility to apply for credit-based products such as loans.</p>

                     <p>Calls for the ethical and responsible use of AI have also grown louder, creating global momentum for the development of governance principles, 
                        as noted in a 2019 paper by Hermes and BCLP.  However, the real challenge is to shift from principles to practice.</p>

                                
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


export default Blog4;


