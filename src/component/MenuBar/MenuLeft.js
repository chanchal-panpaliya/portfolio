import React from 'react';
import Grid from '@material-ui/core/Grid';
//css
import '../../css/menuLeft.css';

import Facebook from '@material-ui/icons/Facebook';
import Twitter  from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';


class MenuLeft extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color:this.props.colorchange
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.colorchange !== nextProps.colorchange) {
      this.setState ={
        color:nextProps.colorchange
      }
    }
  }

    render(){
        return(
            <Grid container className="menu__side menu__side--l" style={{width:'-webkit-fill-available'}} xs="2" sm="1" >
                <Grid item xs className="menu__logoSpace"> 
                      
                    {
                      this.state.color==="home" ?  <a href="/" className="menu__logo" style={{color:'black'}}> Creator Space </a> : 
                      <a href="/" className="menu__logo"> Creator Space </a>
                    }  
                   
              
                </Grid>
                <Grid item xs className="menu__socialItems">
               
                       <a className="menu__socialLink" target="_black" href='https://www.facebook.com/chanchal.panpaliya'> 
                        <span className="menu__socialIcon" >
                        { this.state.color==="home" ?
                           <Facebook className="facebook_icon" style={{color:'black'}}/>
                          :
                           <Facebook/> 
                          }
                           </span>
                        </a>
                   
                        <br/><br/>

                        <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                          <span className="menu__socialIcon">
                         { this.state.color==="home" ?
                            <Twitter style={{color:'black'}} />
                          :
                             <Twitter/> 
                          }
                          </span>
                        </a>

                        <br/><br/>
                   
                        <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                         <span className="menu__socialIcon">
                        { this.state.color==="home" ?
                           <LinkedIn style={{color:'black'}}/> 
                          :
                         <LinkedIn/>
                          }
                           </span>
                        </a>
      
                        <br/><br/>
                   
                        <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                        <span className="menu__socialIcon">
                        { this.state.color==="home" ?
                          <Github style={{color:'black'}}/>
                          :
                            <Github/> 
                          }
                          </span>
                        </a>
                </Grid>
               
            </Grid>
        )
    }
}

export default MenuLeft