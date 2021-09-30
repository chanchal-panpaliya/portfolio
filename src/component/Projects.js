import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import $ from 'jquery';
// local componenet
import CommanPage_BckLines from '../component/BackgroundComponent/CommanPage_BckLines.js';


//css
import '../css/projects.css';
import banner from '../img/projects/banner.jpg';
//video
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import Facebook from '@material-ui/icons/Facebook';
import Twitter  from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';



class Projects extends React.Component {
    render(){return(
        <div style={{overflowX:'hidden'}}>
              <Grid container>
           <Grid item>  
               <img src={banner} alt="background_project_img" style={{width:'100%',height:'100vh',objectFit:'cover',position:'relative',top:'0',left:'0',zIndex:'0'}}>
                
               </img>
           </Grid>
            <Grid container className="menu__side menu__side--l" style={{width:'-webkit-fill-available',position:'fixed'}} xs="2" sm="1" >
                <Grid item xs className="menu__logoSpace"> 
                    <a href="/" className="menu__logo" style={{color:'#e5e7eb'}}> Creator Space </a>
                </Grid>
                <Grid item xs className="menu__socialItems">
               
                    
               <a className="menu__socialLink" target="_black" href='https://www.facebook.com/chanchal.panpaliya'> 
                 <span className="menu__socialIcon"> <Facebook/> </span>
               </a><br/><br/>
          

         
               <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                 <span className="menu__socialIcon"> <Twitter/> </span> 
               </a><br/><br/>
          

         
               <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                   <span className="menu__socialIcon"> <LinkedIn/> </span> 
               </a><br/><br/>
          
               <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                 <span className="menu__socialIcon"> <Github/> </span> 
               </a>
          
              </Grid>
            </Grid>
            
            
            <Grid item className="menu" style={{position:'fixed',zIndex:'2',right:'0px',top:'6%'}}>
               <Link to="/menu" style={{color:'white'}}> <MenuTwoToneIcon  className="bar" style={{color:'grey',position:'fixed'}}/> </Link>
            </Grid> 


            <Grid item style={{backgroundColor:'white',color:'black',width:'49.5vw',height:'85.5vh',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container"> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h2>Projects</h2>
                           </div>
                        </div>
                     </div>
            </Grid>
          </Grid>
           {/* <--------1---------> */}
            <Grid container direction="column" style={{left:'5vw',position:'absolute',top:'50vh'}}>

               <Grid item>
                 <div className="Project_Mark1">
                      <div className="Project_Mark1_heading"> Mark1 </div>
                      <div className="Project_Mark1_heading_content"> A CLI App - React Quiz</div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Nodejs"/><br/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                        
                           <Button variant="outlined" className="button-Live">
                             <a className="alink" target="_blank" href='https://replit.com/@creatorspace/QuizMark1?embed=1&output=1#index.js'>
                               LIVE
                             </a>
                           </Button>
                       
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                       <Button variant="outlined"  className="button-SOURCE">
                          <a className="link1" target="_blank" href='https://github.com/chanchal-panpaliya/Quiz_Mark1'>
                            VIEW SOURCE
                          </a>
                        </Button>
                      </div>
                 </div>
                </Grid>

                <Grid item >
                  <div className="Project_Mark2">
                  <div className="Project_Mark1_heading"> Mark2 </div>
                      <div className="Project_Mark1_heading_content"> A Quiz App - Country Quiz</div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Nodejs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                             <a className="alink" target="_blank" href='https://replit.com/@creatorspace/QuizMark2?embed=1&output=1#index.js'>
                             LIVE
                             </a>
                             </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                          <a className="link1" target="_blank" href='https://github.com/chanchal-panpaliya/Quiz_Mark2'>
                               VIEW SOURCE 
                          </a>
                          </Button>
                      </div>
                  </div>
                </Grid>

            </Grid>
            {/* <--------2---------> */}
            <Grid container direction="column" style={{left:'19.92vw',position:'absolute',top:'70vh'}}>

               <Grid item>
                 <div className="Project_Mark3">
                 <div className="Project_Mark1_heading"> Mark6 </div>
                      <div className="Project_Mark1_heading_content"> Minion Speak </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                             <a className="alink" target="_blank" href="https://creator-space-bananatalk06.netlify.app/">
                                 LIVE
                             </a>
                          </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/Minion-Speak_Mark6">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                 </div>
                </Grid>

                <Grid item >
                  <div className="Project_Mark4">
                  <div className="Project_Mark1_heading"> Mark7 </div>
                      <div className="Project_Mark1_heading_content"> Fun Translation App </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-swedish-07.netlify.app/">
                                  LIVE
                              </a>
                           </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/Fun_translation_app_Mark7">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                  </div>
                </Grid>

            </Grid>
             {/* <---------3--------> */}
             <Grid container direction="column" style={{left:'34.8vw',position:'absolute',top:'90vh'}}>
                <Grid item>
                  <div className="Project_Mark5">
                  <div className="Project_Mark1_heading"> Mark8 </div>
                      <div className="Project_Mark1_heading_content"> Know Your Emotions </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-emoji-08.netlify.app/">
                                 LIVE
                              </a>
                           </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                            <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/Know_your_emotions_Mark08">
                                VIEW SOURCE 
                            </a>
                          </Button>
                      </div>
                  </div>
                </Grid>

                <Grid item >
                  <div className="Project_Mark6">
                  <div className="Project_Mark1_heading"> Mark9 </div>
                      <div className="Project_Mark1_heading_content"> Bookmyticket</div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-bookmyticket-09.netlify.app/">
                                  LIVE
                              </a>
                            </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE"> 
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/bookmyticket_Mark09">
                                VIEW SOURCE 
                             </a> 
                          </Button>
                      </div>
                  </div>
                </Grid>

              </Grid>
              {/* <---------4--------> */}
              <Grid container direction="column" style={{left:'49.5vw',position:'absolute',top:'90vh'}}>

                <Grid item>
                  <div className="Project_Mark7">
                  <div className="Project_Mark1_heading"> Mark10 </div>
                      <div className="Project_Mark1_heading_content"> Cash Register </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-cashregister-10.netlify.app/">
                                   LIVE
                              </a>
                           </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/cash_register_Mark10">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                  </div>
                </Grid>

                <Grid item >
                  <div className="Project_Mark8">
                  <div className="Project_Mark1_heading"> Mark11 </div>
                      <div className="Project_Mark1_heading_content"> Birthdate - lucky or Not </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-birthday-lucky-11.netlify.app/">
                                 LIVE
                              </a>
                          </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE"> 
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/birthdates_lucky_Mark11">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                  </div>
                </Grid>

                </Grid>
                 {/* <--------5---------> */}
                 <Grid container direction="column" style={{left:'64.4vw',position:'absolute',top:'70vh'}}>

                  <Grid item>
                    <div className="Project_Mark9">
                    <div className="Project_Mark1_heading"> Mark12 </div>
                      <div className="Project_Mark1_heading_content"> Fun With Triangles </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-funwithtriangles-12.netlify.app/">
                                 LIVE
                              </a>
                           </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/fun_with_triangles_Mark12">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                    </div>
                  </Grid>

                  <Grid item >
                    <div className="Project_Mark10">
                    <div className="Project_Mark1_heading"> Mark13 </div>
                      <div className="Project_Mark1_heading_content"> Birthdate are palindrome </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="https://creatorspace-birthdaypalindrome-13.netlify.app/">
                                  LIVE
                              </a>
                          </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/birthdates_palindrome_Mark13">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                    </div>
                  </Grid>

                  </Grid>
                  {/* <--------6---------> */}
                  <Grid container direction="column" style={{left:'79.3vw',position:'absolute',top:'90vh'}}>

               <Grid item>
                 <div className="Project_Mark11">
                 <div className="Project_Mark1_heading"> Mark14 </div>
                      <div className="Project_Mark1_heading_content"> Profit or Loss </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <Button variant="outlined" className="button-Live">
                             <a className="alink" target="_blank" href="https://creatorspace-stock-profit-loss-14.netlify.app/">
                                 LIVE
                             </a>
                           </Button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                             <a className="link1" target="_blank" href="https://github.com/chanchal-panpaliya/stock_profit_loss_Mark14">
                                VIEW SOURCE 
                             </a>
                          </Button>
                      </div>
                 </div>
                </Grid>

                <Grid item >
                  <div className="Project_Mark12">
                  <div className="Project_Mark1_heading"> Mark15 </div>
                      <div className="Project_Mark1_heading_content"> Blogs </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                        <Chip size="small" variant="outlined" label="Reactjs"/>
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           {/* <Button variant="outlined" className="button-Live">
                              <a className="alink" target="_blank" href="">
                                 LIVE
                             </a>
                          </Button> */}
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <Button variant="outlined"  className="button-SOURCE">
                            <Link className="link1" to={"./blogs"}>
                                BLOG 
                             </Link>
                          </Button>
                      </div>
                  </div>
                </Grid>

            </Grid>
            <CommanPage_BckLines/>
      
        </div>
    )}
}
export default Projects;



