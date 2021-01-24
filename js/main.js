/**include the html contents**/

import _galleryContent from "./gallery.js";
import _popupContent from "./popup.js";
import _catg from "./categories.js";

const include = (text, selector)=>{
  document.querySelector(selector).innerHTML = text;
};
include(_galleryContent, ".g-container");
include(_popupContent, ".popup-background");
include(_catg, ".category-links");
/*Popup initialization stuff*/
const popup = document.querySelector(".popup-background");
const trigger = document.querySelector("#popup-trigger");
const cancelBtn = document.querySelector(".popup>.cancel")
trigger.addEventListener("click", (e)=>{
  popup.style.display = "flex";
})
cancelBtn.onclick = e=>popup.style.display = "none";

//Doing this to ensure the images are all square in shape. I still have css issues *haha*
let imgcntr = document.querySelectorAll(".img-container");
imgcntr.forEach(x=>{
  x.style.height = x.clientWidth+"px";
});
