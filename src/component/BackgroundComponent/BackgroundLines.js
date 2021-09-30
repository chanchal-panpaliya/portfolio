import React from 'react';
//css
import '../../css/backgroundline.css';
//img temp


class BcakgroundLines extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            BcakgroundImage : this.props.OnHoverImage
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.OnHoverImage !== nextProps.OnHoverImage) {
          this.setState ={
              BcakgroundImage:nextProps.OnHoverImage
          }
        }
      }

    render(){
        //style={{backgroundImage:'url('+this.props.OnHoverImage+')'}}
        return(            
            <div className="background__images" style={{backgroundImage:'url('+this.props.OnHoverImage+')'}} > 
                <div className="lines" >
                    <div className="bgLines__ray--r"></div>
                    <div className="bgLines__ray--b"></div>
                    <div className="bgLines__ray--g"></div>
                    <div className="bgLines__ray--r"></div>
                    <div className="bgLines__ray--b"></div>
                    <div className="bgLines__ray--g"></div>
                    <div className="bgLines__ray--r"></div>
                </div> 
            </div>
        );
    }
}

export default BcakgroundLines;

