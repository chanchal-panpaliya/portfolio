import React from "react";
import '../../css/HomeScreenBackground.css';
import blackscreen from '../../img/38119.jpg';
import mark1 from '../../img/scrolling_img/mark1.png';
import mark2 from '../../img/scrolling_img/mark2.png';
import bananatalk from '../../img/scrolling_img/bananatalk.png';
import swedish from '../../img/scrolling_img/swedishtalk.png';
import emoji from '../../img/scrolling_img/emoji.png';
import movie from '../../img/scrolling_img/movie.png';
import cashregistermanager from '../../img/scrolling_img/cashregistermanager.png';
import birthdayluckynumber2 from '../../img/scrolling_img/birthdayluckynumber2.png';
import birthdaypalindrome from '../../img/scrolling_img/birthdaypalindrome.png';
import funwithtriangles from '../../img/scrolling_img/funwithtriangles.png';
import stockprofitloss from '../../img/scrolling_img/stockprofitloss.png';
  
class HomeScreenBackground extends React.Component {
  
  render() {
    return (
      // <div style={{position:"absolute",backgroundImage:'url('+blackscreen+')',width:'79%',height:'71%'}}>
      <div style={{position:'fixed',backgroundImage:'url('+blackscreen+')',height:'auto'}}>
        <div className="container" >
  <main>
    <header>
      <h2 className="subheader">— projects</h2>
      </header>

      <section>
              <h2>A CLI App</h2>
              <img src={mark1} alt="A CLI App"/> 
            </section>

            <section>
              <h2>A Quiz App</h2>
              <img src={mark2} alt="A CLI App"/> 
            </section>

            <section>
              <h2> Minion Speak </h2>
              <img src={bananatalk} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Fun Translation App</h2>
              <img src={swedish} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Know Your Emotions</h2>
              <img src={emoji} alt="A CLI App"/> 
            </section>

            <section>
              <h2>GoodBooks</h2>
              <img src={movie} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Cash Register</h2>
              <img src={cashregistermanager} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Birthdate - lucky or Not</h2>
              <img src={birthdayluckynumber2} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Fun With Triangles</h2>
              <img src={funwithtriangles} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Birthdate are palindrome</h2>
              <img src={birthdaypalindrome} alt="A CLI App"/> 
            </section>

            <section>
              <h2>Profit or Loss </h2>
              <img src={stockprofitloss} alt="A CLI App"/> 
            </section>


    <div className="callout">

      </div>
   
  </main>
</div>


      </div>
     
    );
  }
}
  
export default HomeScreenBackground ;
    