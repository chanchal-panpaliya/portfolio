import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

// local componenet
import CommanPage_BckLines from '../component/BackgroundComponent/CommanPage_BckLines.js';
import MenuLeft from './MenuBar/MenuLeft.js';
import List_blogs from '../component/ConstantContent/List_blogs.js';
//css
import '../css/blog.css';
//video
import blogs_background_video from '../video/banner.mp4';
//icons
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';



class Blogs extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         ListBlogContent:List_blogs,
         transitionY:'matrix(1, 0, 0, 1, 0, 0)',
         Date:"",
         BlogId:""      
      }
   }

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
             
            <Grid item style={{backgroundColor:'white',color:'black',width:'65%',height:'auto',position:'absolute',right:'0',top:'15%'}}>
             
                     <div className="blog_heading_container"> 
                        <div className="blog_heading_box"> 
                           <div className="blog_heading">
                              <h1>Blog</h1>
                           </div>
                        </div>
                     </div>


            <Grid container xs={8} style={{position:'relative',left:'10vw'}}> 
                     {
                        this.state.ListBlogContent.map((blogcontent,key)=>{
                           return(
                              <Grid item> 
                              
                                  {blogcontent.BlogNumber == "01" || blogcontent.BlogNumber == "02" ?
                                    
                                         <div id={blogcontent.BlogNumber} key={blogcontent.BlogNumber}>
                                             <div className="blogList_heading_container"><h4>{blogcontent.BlogTitle}</h4></div>
                                             <p className="blogList_sub_content"> {blogcontent.BlogSubContent} 
                                             <a target="_blank" href={blogcontent.LinkTo} style={{textDecoration:'none',color:'grey'}}> read more ... </a>
                                             </p>
                                             <span className="blogList_sub_date"> {blogcontent.Date} </span>
                                             <br/><br/><br/>
                                          </div>
                                    
                                    :
                                         <div id={blogcontent.BlogNumber} key={blogcontent.BlogNumber}>
                                          <div className="blogList_heading_container"><h4>{blogcontent.BlogTitle}</h4></div>
                                          <p className="blogList_sub_content"> {blogcontent.BlogSubContent}
                                            <a target="_blank" href={blogcontent.LinkTo} style={{textDecoration:'none',color:'grey'}}> read more ... </a>
                                           </p>
                                          <span className="blogList_sub_date"> {blogcontent.Date} </span>
                                          <br/><br/><br/>
                                         </div>
                             
                                       }
                              
                              </Grid>
                              
                           )
                        })
                     }
            </Grid> 

            </Grid>

            <CommanPage_BckLines/>
        </Grid> 
    )}
}


export default Blogs;


