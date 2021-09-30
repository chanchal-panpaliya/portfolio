import './App.css';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
// componenets
import HOME from './component/Home.js';
import MENU from './component/MenuBar/Menu.js';
import PROJECTS from './component/Projects.js';
import BLOGS from './component/Blogs.js';
import CARRER from './component/Carrer.js';
import Blog2 from './component/BlogPages/Blog2.js';
import Blog3 from './component/BlogPages/Blog3.js';
import Blog4 from './component/BlogPages/Blog4.js';
import Blog5 from './component/BlogPages/Blog5.js';


  
class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={HOME} />
        <Route path="/menu" component={MENU}/>
        <Route path="/projects" component={PROJECTS}/>
        <Route path="/blogs" component={BLOGS}/>
        <Route path="/carrer" component={CARRER}/>
        <Route path="/blog_18september2021" component={Blog2}/>  
        <Route path="/blog_12september2021" component={Blog3}/>  
        <Route path="/blog_6september2021" component={Blog4}/>  
        <Route path="/blog_24august2021" component={Blog5}/>             
      </div>
    </BrowserRouter>
    );
  }
}
  
export default App;

