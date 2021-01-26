// Import our modules

import Header from "../modules/app_header.module.js";
import BottomNav from "../modules/app_nav.module.js";
import Bio from "../modules/bio.module.js";
import Posts from "../modules/posts.module.js";
import PostList from "./posts.js";
import TagList from "./tags.js";

const App = () => {
  return `
      ${Header()}
      ${Bio()}
      ${Posts()}
      ${BottomNav()}
    `;
};

document.querySelector(".app").innerHTML = App();

// Get all the tags
var tags = TagList;

// Get all the posts
var posts = PostList;

// Set our tag abeg
const tagsContainer = document.querySelector(".app_intro--tag_list");
tagsContainer.innerHTML = tags
  .map(
    (i) =>
      `<div class="tag_list--item"> 
        <div class="tag_list--item_img--counter">  
            <img src=${i.tag_img} alt="Tag me" class="tag_list--item_img--pic">  
        </div>
        <p class="tag_list--item_text">${i.tag_name}</p> 
      </div>`
  )
  .join(" ");

// Please set the post
const postContainer = document.querySelector(".tab_content--posts");
postContainer.innerHTML = posts
  .map(
    (i) =>
      `<div class="post_item">
        <img src=${i.post_img} alt="Post" class="post_item--img">
            <div class="post_item--type">
            ${
              i.post_type === 0
                ? ``
                : i.post_type === 1
                ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" /><path d="M17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.2zM5 8v2h2V8H5z" />
                </svg>`
                : i.post_type === 2
                ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm6-12v2h2V5h-2z"/></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 13v8H4a1 1 0 0 1-1-1v-7h8zm2-10h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7V3zM3 4a1 1 0 0 1 1-1h7v8H3V4z"/></svg> `
            }
            </div>
                
            </div>
        </div>
        `
  )
  .join(" ");

// Lets work on controlling the onscroll effect on tabs

var tabs = document.querySelector(".app_main--tabs");
var sticky = tabs.offsetTop;

const fixTheTab = () => {
  if (window.pageYOffset > sticky - 10) {
    tabs.classList.add("app_main--tabs_fixed");
  } else {
    tabs.classList.remove("app_main--tabs_fixed");
  }
};

window.onscroll = function () {
  fixTheTab();
};
