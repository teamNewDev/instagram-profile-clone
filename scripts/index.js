//Import app modules for runnig the page
import AppData from "./modules/AppData.js"
import Iconify from "./modules/Iconify.js"
import ImageHandler from "./modules/ImageHandler.js"
import NavBottom from "./modules/NavBottom.js"
import NavTop from "./modules/NavTop.js"
import UserBio from "./modules/UserBio.js"
import UserMeta from "./modules/UserMeta.js"
import UserHighlights from "./modules/UserHighlights.js"
import UserGalleryNav from "./modules/UserGalleryNav.js"
import UserGalleryMain from "./modules/UserGalleryMain.js"


const App = ()=>{
    return `
        ${NavTop}
        <section class="app__user-profile">
            ${UserMeta}
            ${UserBio}
            ${UserHighlights(AppData.highlights)}
        </section>
        <section class="app__user-gallery">
            ${UserGalleryNav}
            <div id="gallery-content-root">
                ${UserGalleryMain(AppData.gallery)}
            </div>
        </section>
        ${NavBottom}
    `;

}

document.getElementById("app-root").innerHTML = App();

/*
    run Iconify module to print out all icons specified in the IconifyData
    module from the InstagramIconsData module
*/
AppData.iconify.forEach(iconData => {
    Iconify(`.ig-icon-${iconData}`, AppData.instagramIcons[iconData]);
});

ImageHandler();