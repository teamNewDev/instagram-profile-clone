import Header from "./Modules/Header.js"
import ProfileBio from "./Modules/ProfileBio.js"
import Activities from "./Modules/Activities.js"
import Gallery from "./Modules/Gallery.js"
import Footer from "./Modules/Footer.js"




const App = () => {
    return `
     <div class="wrapper">
    ${Header()}
    ${ProfileBio()}
    ${Activities()}
    ${Gallery()}
    ${Footer()}
    </div>
    `
}


document.getElementById('root').innerHTML = App();