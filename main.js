import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Buttons from "./components/Main/Buttons.js";
import NavPhotos from "./components/Main/NavPhotos.js";
import Profile from "./components/Main/Profile.js";
import ProfileDescription from "./components/Main/ProfileDescription.js";
import SlideStories from "./components/Main/SlideStories.js";

const Root = () => {
  return ` 
  ${Header}
  ${Profile}
  ${ProfileDescription}
  ${Buttons}
  ${SlideStories}
  ${NavPhotos}
  ${Footer}
  `;
};

document.getElementById("root").innerHTML = Root();
