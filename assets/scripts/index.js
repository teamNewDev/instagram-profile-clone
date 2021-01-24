//Import app modules for runnig the page
import App from "./modules/App.js"
import AppData from "./modules/AppData.js"
import Iconify from "./modules/Iconify.js"
import Nav from "./modules/Nav.js"
import User from "./modules/User.js"

//Set up on page html modules
let onPageHTMLModules = {
    Nav: Nav,
    User: User,
}

//Get current page hash for determining current gallery page
let currentGalleryPage = location.hash.replace(/[#]/g, "");
//Hash validation
currentGalleryPage = currentGalleryPage.length > 0 ? currentGalleryPage : "main";

//Instantiate the app class from the App.js module with vid credentials
const newApp = new App("#app-root", AppData, onPageHTMLModules, currentGalleryPage);
//RUn application
newApp.run();

/*
    run Iconify module to print out all icons specified in the IconifyData
    module from the InstagramIconsData module
*/
AppData.iconify.forEach(iconData => {
    Iconify(`.ig-icon-${iconData}`, AppData.instagramIcons[iconData]);
});