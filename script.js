import Activities from './modules/Activities.js'
import Bio from './modules/Bio.js'
import Buttons from './modules/Buttons.js'
import Credentials from './modules/Credentials.js'
import Gallery from './modules/Gallery.js'
import Header from './modules/Header.js'
import Nav from './modules/Nav.js'

const App = () => {
    return (
        `
        ${Header()}
        ${Credentials()}
        ${Bio()}
        ${Buttons()}
        ${Activities()}
        ${Gallery()}
        ${Nav()}
        `
    )
}

document.getElementById('root').innerHTML = App()
