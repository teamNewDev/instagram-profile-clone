//import all page Navigator data from specified modules
import NavBottom from "./Nav/NavBottom.js"
import NavTop from "./Nav/NavTop.js"

//set imported modules into a single Nav object
const Nav = {
    top: NavTop,
    bottom: NavBottom
}

//export Nav object
export default Nav;