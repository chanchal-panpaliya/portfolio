import React from 'react';
//css
import '../../css/comman_backgroundline.css';


class CommanPage_BckLines extends React.Component{
   
    render(){
  
        return(            
            <div className="wrapper"> 
             <div className="headBox headBox--darkBg"> 
               <div className="headBox__bgLines bgLines">
                    <div className="bgLines__line1"></div>
                    <div className="bgLines__line2"></div>
                    <div className="bgLines__line3 "> </div>
                {/* --------------------------------------------------------------------*/}
                    <div className="bgLines__line4 ">
                        <div className="bgLines__line--alpha4_1"></div>
                        <div className="bgLines__line--alpha4_2"></div>
                        <div className="bgLines__line--alpha4_3"></div>
                    </div>
                    <div className="bgLines__line4_continue" style={{top:'100%'}}>
                        <div className="bgLines__line--alpha4_1_continue" ></div>
                        {/* <div className="bgLines__line--alpha4_2_continue" ></div>
                        <div className="bgLines__line--alpha4_3_continue"></div>
                        <div className="bgLines__line--alpha4_4_continue"></div> */}
                    </div>
                {/*-----------------------------------------------------------------------*/}
                    <div className="bgLines__line5 ">
                        <div className="bgLines__line--alpha5_1"></div> 
                        <div className="bgLines__line--alpha5_2"></div>
                        <div className="bgLines__line--alpha5_3"></div>
                    </div>
                    <div className="bgLines__line5_continue" style={{top:'100%'}}>
                        <div className="bgLines__line--alpha5_1_continue" ></div>
                        {/* <div className="bgLines__line--alpha5_2_continue" ></div>
                        <div className="bgLines__line--alpha5_3_continue"></div> */}
                    </div>
                {/*-------------------------------------------------------------------------*/}
                    <div className="bgLines__line6 ">
                        <div className="bgLines__line--alpha6_1"> </div> 
                        <div className="bgLines__line--alpha6_2"></div>
                        <div className="bgLines__line--alpha6_3"></div>
                    </div>
                    <div className="bgLines__line6_continue" style={{top:'100%'}}>
                        <div className="bgLines__line--alpha6_1_continue" ></div>
                        {/* <div className="bgLines__line--alpha6_2_continue" ></div>
                        <div className="bgLines__line--alpha6_3_continue"></div> */}
                    </div>
                {/*--------------------------------------------------------------------------*/}
                    <div className="bgLines__line7 ">
                        <div className="bgLines__line--alpha7_1"> </div> 
                        <div className="bgLines__line--alpha7_2"></div>
                        <div className="bgLines__line--alpha7_3"></div>
                    </div>
                    <div className="bgLines__line4_continue" style={{top:'100%'}}>
                        <div className="bgLines__line--alpha7_1_continue" ></div>
                        {/* <div className="bgLines__line--alpha7_2_continue" ></div>
                        <div className="bgLines__line--alpha7_3_continue"></div> */}
                    </div>
                {/*--------------------------------------------------------------------------*/}
               </div>
              </div>
            </div>
        );
    }
}

export default CommanPage_BckLines ;

