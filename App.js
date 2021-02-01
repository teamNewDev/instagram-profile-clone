import TopNav from './modules/TopNav.js'
import BottomNav from './modules/BottomNav.js'
import Bio from './modules/Bio.js'
import Overlay from './modules/Overlay.js'
import SlideUpMenu from './modules/SlideUpMenu.js'

const App = () =>
        `<div class="container">
            <div class="content-container">

                <!-- Navigation Area -->
                
                ${TopNav()}

                <!-- Profile Area -->
                     ${Bio()}

                <!-- overlay -->
                ${Overlay()}

                <!-- slideUpMenu -->
                ${SlideUpMenu()}

                <!-- Footer section -->
                    ${BottomNav()}
            </div>
         </div>`

document.querySelector("#root").innerHTML = App();