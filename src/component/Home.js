import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
//local component
import '../css/home.css';
import HomeScreenBackground from './BackgroundComponent/HomeScreenBackground.js';
import MenuLeft from './MenuBar/MenuLeft.js';

//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import PORTFOLIO from '@material-ui/icons/AddBox';

//img
import tech from '../img/tech.png';
import more from '../img/more.png';
import blog from '../img/blog.png';
import about from '../img/about.png';
//video




  
class Home extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {  
      hover: true ,
      hover1: true,
      hover2: true,
      hover3:true,
      hover4:true
   }  
  

  }

  renderDisplayLefticon=()=>{
       return(
        <Grid item xs>
        <div style={{backgroundColor:'white'}}>
          <div className="sidebar">
             <MenuLeft colorchange="home"/>
            </div>
         </div>
        </Grid>
       )
  }

  renderProfolio=()=>{
    return(
              <Grid item style={{backgroundColor:'white'}}> <div className="portfolio" onMouseEnter={()=>{this.setState({hover:false})}} onMouseLeave={()=>{this.setState({hover:true})}}> 

                { this.state.hover ? <PORTFOLIO className="PORTFOLIO_ICON" style={{color:'white'}}/>  :  
                                     <div className="PORTFOLIO_HOVER" style={{position:"absolute"}}> 
                                        
                                        <section className="portfolio_hover_text"> Projects </section>
                                      
                                        <Link to={"/projects"}  style={{textDecoration:'none',color:'white'}}>
                                        <Button variant="outlined" color="secondary" style={{width:'10vw',height:'6vh',top:'25vh'}}>  
                                        SEE MORE </Button> </Link>

                                     </div> 
                } 
                
                </div> </Grid>
    )
  }

  renderAboutme=()=>{
return(
  <Grid item > <div className="projects" onMouseEnter={()=>{this.setState({hover1:false})}} onMouseLeave={()=>{this.setState({hover1:true})}}>
  {this.state.hover1 ? <img src={about} alt="about" style={{width:'5vw',paddingTop:'10vh'}}/>    :
                         // <PROJECTS className="PROJECTS_ICON" /> :
                       <div className="PROJECTS_HOVER" style={{position:"absolute",paddingTop:'30%'}}> 
                            <img src={about} alt="about" style={{width:'5vw',paddingTop:'10vh'}}/> 
                              <div style={{paddingTop:'8%',fontSize:'1rem'}}> ABOUT ME </div>
                               <div style={{paddingTop:'30%'}}> 
                                  <Link to={"/carrer"}  style={{textDecoration:'none',color:'white'}}>
                                     <Button variant="contained" style={{width:'10vw',color:'black'}}>  
                                        SEE MORE 
                                     </Button> 
                                 </Link>
                              </div>
                       </div> 
  } </div>  </Grid>
)
  }

   renderTechnology= () =>{
return(
  <Grid item ><div className="blogs" onMouseEnter={()=>{this.setState({hover2:false})}} onMouseLeave={()=>{this.setState({hover2:true})}}>
  { this.state.hover2 ?<img src={tech} alt="tech" style={{width:'5vw',paddingTop:'10vh'}}/>       :
                        // <BLOGS className="BLOGS_ICON" /> : 
                        <div className="BLOGS_HOVER" style={{position:"absolute",paddingTop:'30%'}}> 
                          <img src={tech} alt="tech" style={{width:'5vw',paddingTop:'10vh'}}/> 
                             <div style={{paddingTop:'8%',fontSize:'1rem'}}> TECHNOLOGY I KNOW</div>
                              <div style={{paddingTop:'30%'}}> 
                                 <Chip label="Reactjs" /> <Chip label="css" /> <Chip label="javascript" />
                             </div>
                        </div> 
}</div></Grid>
)
  }

  renderBlog = ()=>{
return(
  <Grid item ><div className="career" onMouseEnter={()=>{this.setState({hover3:false})}} onMouseLeave={()=>{this.setState({hover3:true})}}>
  { this.state.hover3 ? <img src={blog} alt="blog" style={{width:'5vw',paddingTop:'10vh'}}/>       :
                        // <CAREER className="CAREER_ICON" /> : 
                        <div className="CAREER_HOVER" style={{position:"absolute",paddingTop:'15%'}}> 
                            <img src={blog} alt="blog" style={{width:'5vw',paddingTop:'5vh'}}/> 
                            <div style={{paddingTop:'5%',fontSize:'1rem'}}> BLOGS </div>
                              <div style={{paddingTop:'10%'}}> 
                                 <div style={{paddingTop:'10%'}}>
                                         Multiple Choice Quiz App Using Material-UI and React JS <br/><br/>
                                        
                                            <a style={{textDecoration:'none',color:'black'}} target="_blank" href="https://medium.com/@chanchal.panpaliya/multiple-choice-quiz-app-using-material-ui-and-react-js-11a65a5cccc9">
                                               <button> 
                                                 Click here 
                                               </button>
                                            </a>
                                          &nbsp;
                                         <div> medium.com </div> 
                                 </div> 
                                 <div style={{paddingTop:'15%'}}>
                                         Costumes of Our Cultured Classical Dances of India <br/><br/>
                                         
                                            <a style={{textDecoration:'none',color:'black'}} target="_blank" href="https://medium.com/@chanchal.panpaliya/costumes-of-our-cultured-classical-dances-of-india-871822697cb4">
                                               <button> 
                                                  Click here 
                                               </button> 
                                            </a>
                                            &nbsp;
                                          
                                        <div> medium.com </div> 
                                 </div>
                             </div>
                            
                             <div style={{paddingTop:'15%'}}> 
                             <Link to="./blogs"  style={{textDecoration:'none',color:'white'}}>
                               <Button variant="contained" > Dummy Blog </Button> 
                               </Link>
                            </div>
                        </div> 
  }</div></Grid>
)
  }

  renderMore = () =>{
    return(
      
      <Grid item ><div className="more" onMouseEnter={()=>{this.setState({hover4:false})}} onMouseLeave={()=>{this.setState({hover4:true})}}>
      { this.state.hover4 ? <img src={more} alt="more" style={{width:'5vw',paddingTop:'10vh'}}/>       :
                            // <MORE className="MORE_ICON" /> : 
                            <div className="MORE_HOVER" style={{position:"absolute",paddingTop:'30%'}}> 
                               <img src={more} alt="more" style={{width:'5vw',paddingTop:'10vh'}}/> 
                                 <div style={{paddingTop:'8%',fontSize:'1rem'}}> CERTIFICATION </div>
                                  <div style={{paddingTop:'30%'}}> 
                                     <Chip label="salesforce 2017" /> <Chip label="sql server" /> 
                                     <div style={{fontSize:'0.8rem',paddingTop:'1%'}}>expired two year before</div>
                                 </div>
                            </div>
      }</div></Grid>

    )
  }
 
  render() {
    return (
        <div className="homePage">
          {/* <BackkgroundLine/> */}
        <Grid container direction="row">
          {this.renderDisplayLefticon()}
          <Grid item container direction="column" xs>
            <Grid item xs>
              <div style={{height:'71vh',width:'79vw'}}>
                  <HomeScreenBackground/>
                   <section className="menu">
                     <Link to="/menu" style={{color:'white'}}> <MenuTwoToneIcon  className="bar"/> </Link>
                   </section> 

                  {this.state.hover && this.state.hover1 && this.state.hover2 && this.state.hover3 && this.state.hover4? 
                   
                   <section className="textSection" style={{zIndex:'1'}}>
                         <section className="text2"> I'm </section>
                        <section className="text1"> CHANCHAL PANPALIYA </section>
                        <section className="text2"> A Frontend Web Developer </section> <br/><br/>
                        <section className="rainbowbutton">  
                            <section className="button1"> 
                              <Link to="./menu" style={{textDecoration:'none',color:'white'}}> CONTACT ME </Link>
                            </section> 
                        </section>
                  </section> 
                   : " "}
             
              </div>
            </Grid>


            <Grid item container direction="row" xs style={{position:"relative"}}> 
                    {this.renderProfolio()}
                    {this.renderAboutme()}
                    {this.renderTechnology()}
                    {this.renderBlog()}
                    {this.renderMore()}
          
               
             </Grid>

            </Grid>
          </Grid>
      </div>
    );
  }
}
  
export default Home;