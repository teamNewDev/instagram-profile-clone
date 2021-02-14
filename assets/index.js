//IMPORT MODULES
import TopBar from "../modules/topbar.js";
import Bio from "../modules/bio.js";
import Buttons from "../modules/buttons.js";
import Scroll from "../modules/scroll.js";
import Suggestions from "../modules/suggestion.js";
import Tabs from "../modules/tabs.js";
import Profile from "../modules/profile.js";
import Posts from "../modules/posts.js";
import NavBar from "../modules/navbar.js";
import Options from "../modules/options.js";
import Loader from "../modules/loader.js";
import Overlay from "../modules/overlay.js";
import Popup from "../modules/popup.js";
import PostPopUp from "../modules/post-popup.js";

const Insta = () => {
  return `
  ${PostPopUp()}
  ${Overlay()}
  ${Loader()}
  ${Options()}
  ${Popup()}
  ${TopBar()}
  ${Profile()}
  ${Bio()}
  ${Buttons()}
  ${Suggestions()}
  ${Scroll()}
  ${Tabs()}
  ${Posts()}
  ${NavBar()}
 
  
  `;
};

document.querySelector(".insta").innerHTML = Insta();

//VARIABLES
const suggestion = document.querySelector(".suggestion");
const loader = document.querySelector(".loader");
const btnArrow = document.querySelector(".btn.arrow");
const btnFollow = document.querySelector(".btn.follow");
const btnFollowing = document.querySelector(".btn.following");
const popUpCont = document.querySelector(".popup-cont");
const overLay = document.querySelector(".overlay");
const overLay2 = document.querySelector(".overlay2");
const overLay3 = document.querySelector(".overlay3");
const navBar = document.querySelector(".navbar");
const unFollow = document.querySelector(".unfollow");
const optionsBtn = document.querySelector(".fa-ellipsis-v");
const optionsCont = document.querySelector(".options-cont");
const cuppy = document.querySelector(".cuppy");
const postPopup = document.querySelector(".post-popup-cont");
const photo = document.querySelector(".post-popup .photo");
const heart = document.querySelector(".photo .fa-heart");
const heart2 = document.querySelector(".actions .fa-heart");

console.log(heart);
//CLICK FUNCTIONS

//toggle suggestions
btnArrow.addEventListener("click", () => {
  suggestion.classList.toggle("active");
});

//show post
cuppy.addEventListener("click", () => {
  postPopup.classList.add("active");
  overLay3.classList.add("active");
});

//like post
photo.addEventListener("click", (e) => {
  heart.classList.toggle("active");
  heart2.classList.add("active");
});

//add overlay3 -> close post popup
overLay3.addEventListener("click", () => {
  postPopup.classList.remove("active");
  overLay3.classList.remove("active");
});

//follow
btnFollow.addEventListener("click", () => {
  btnFollowing.classList.add("active");
  btnFollow.classList.add("hide");
  suggestion.classList.add("active");
});

//show unfollow pop up
btnFollowing.addEventListener("click", () => {
  popUpCont.classList.add("active");
  overLay.classList.add("active");
  navBar.classList.add("hide");
});

//add overlay -> hide unfollow popup
overLay.addEventListener("click", () => {
  popUpCont.classList.remove("active");
  overLay.classList.remove("active");
  navBar.classList.remove("hide");
});

//unfollow
unFollow.addEventListener("click", () => {
  popUpCont.classList.remove("active");
  btnFollow.classList.remove("hide");
  btnFollowing.classList.remove("active");
  overLay.classList.remove("active");
  navBar.classList.remove("hide");
});

//show options
optionsBtn.addEventListener("click", () => {
  optionsCont.classList.add("active");
  overLay2.classList.add("active");
});

//show second overlay -> close options popup
overLay2.addEventListener("click", () => {
  overLay2.classList.remove("active");
  optionsCont.classList.remove("active");
});

//page load screen splash
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 2000);
});
