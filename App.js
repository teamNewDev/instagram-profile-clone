import TopNav from './modules/TopNav.js'
import BottomNav from './modules/BottomNav.js'
import Bio from './modules/Bio.js'

const App = () => `<div class="container">
            <div class="content-container">

                <!-- Navigation Area -->
                     ${TopNav()}
                

                <!-- Profile Area -->
                     ${Bio()}
                

                <!-- Footer section -->
                     ${BottomNav()}
                
            </div>
        </div>`

document.querySelector("#root").innerHTML = App();