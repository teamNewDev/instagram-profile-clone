//import image handler module(function) to handle all errored images
import ImageHandler from "./ImageHandler.js"
import HTMLComment from "./HTMLCommenter.js"

//the main app class for controlling the application behaviour
class App {

    //setup the valid app data provided to run the app
    constructor(appRootElement, appData, extraModules, activeGalleryPage = "series") {
        this.appRoot = document.querySelector(appRootElement);
        this.appData = appData;
        this.extraModules = extraModules;
        this.activeGalleryPage = activeGalleryPage;
    }

    //compile data into a single html content
    compileHTML() {
        let Hcmt = HTMLComment; 
        this.appHTML = `
            ${Hcmt("app navigator")}
            ${this.extraModules.Nav.top}
            <section class="app__user-profile">
                ${Hcmt("app user meta")}
                ${this.extraModules.User.meta}
                ${Hcmt("app user meta:end")}
                ${Hcmt("app user bio")}
                ${this.extraModules.User.bio}
                ${Hcmt("app user bio:end")}
                ${Hcmt("app user actions")}
                ${this.extraModules.User.actions}
                ${Hcmt("app user actions:end")}
                ${Hcmt("app user highlights")}
                ${this.extraModules.User.highlights(this.appData.highlights)}
                ${Hcmt("app user highlights:end")}
            </section>
            ${Hcmt("app navigator:end")}
            ${Hcmt("app user gallery")}
            <section class="app__user-gallery">
                ${Hcmt("gallery nav")}
                ${this.extraModules.User.gallery.nav}
                ${Hcmt("gallery nav:end")}
                ${Hcmt("gallery main content")}
                <div id="gallery-content-root">
                    ${this.extraModules.User.gallery.default}
                </div>
                ${Hcmt("gallery main content:end")}
            </section>
            ${Hcmt("app user gallery:end")}
            ${Hcmt("app user popup")}
            ${this.extraModules.User.popup}
            ${Hcmt("app user popup:end")}
            ${Hcmt("app user navigator bottom")}
            ${this.extraModules.Nav.bottom}
            ${Hcmt("app user navigator bottom:end")}
        `;
    }

    //compile data into a single html content
    setGalleryTogglers() {
        this.galleryTogglers = document.querySelector(".gallery-nav").querySelectorAll(".nav-item");
        this.galleryTogglers.forEach(toggler => {
            toggler.addEventListener("click", e => {
                let galleryType = e.currentTarget.getAttribute("gallery-type");
                this.loadGalleryPage(galleryType);
            });
        });

        this.checkActiveGalleryToggler();
    }

    //check for the toggler that matches the current galleryPage
    checkActiveGalleryToggler() {
        this.galleryTogglers.forEach(toggler => {
            if (toggler.getAttribute("gallery-type") == this.activeGalleryPage) {
                toggler.classList.add("active");
            } else {
                toggler.classList.remove("active");
            }
        });
    }

    //set popup element
    setPopup() {
        this.popup = document.getElementById("app-popup");
    }

    //activate popup element
    activatePopup() {
        this.popup.style.height = "100%";
    }

    //deactivate popup element
    deactivatePopup() {
        this.popup.style.height = "0%";
    }

    //setup togglers for activating and deactivating popup
    setPopupTogglers() {
        //get all elements with the "popup-toggler" as an id
        let popupTogglers = document.querySelectorAll("#popup-toggler");

        //loop through all matched
        popupTogglers.forEach(toggler => {
            //then check for the toggle action as=nd setup the action
            if (toggler.getAttribute("toggle-action") == "activate") {
                toggler.addEventListener("click", () => {
                    this.activatePopup();
                });
            } else if (toggler.getAttribute("toggle-action") == "deactivate") {
                toggler.addEventListener("click", () => {
                    this.deactivatePopup();
                });
            }
        });
    }

    //load current gallery page
    loadGalleryPage(galleryType) {
        let galleryContent = "";
        this.activeGalleryPage = galleryType;
        location.hash = this.activeGalleryPage;

        //check for matched page and set the values
        switch (galleryType) {
            case "main":
                galleryContent = this.extraModules.User.gallery.main(this.appData.gallery);
                break;
            case "series":
                galleryContent = this.extraModules.User.gallery.series(this.appData.gallery);
                break;
            default:
                galleryContent = this.extraModules.User.gallery.default;
        }

        //append to the gallery content root
        document.getElementById("gallery-content-root").innerHTML = galleryContent;
        //check for active toggler 
        this.checkActiveGalleryToggler();
        //handle all errored images
        ImageHandler();
    }

    //append compiled html to app root element
    appendHTML() {
        this.appRoot.innerHTML = this.appHTML;
    }

    //finally run the application
    run() {
        this.compileHTML();
        this.appendHTML();
        this.setGalleryTogglers();
        this.loadGalleryPage(this.activeGalleryPage);
        this.setPopup();
        this.setPopupTogglers();
        ImageHandler();
    }
}

export default App;