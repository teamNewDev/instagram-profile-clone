import activities from './modules/activities.js'
import bio from './modules/bio.js'
import buttons from './modules/buttons.js'
import credentials from './modules/credentials.js'
import gallery from './modules/gallery.js'
import header from './modules/header.js'
import nav from './modules/nav.js'

const app = () => {
    return (
        `
        ${header}
        ${credentials}
        ${bio}
        ${buttons}
        ${activities}
        ${gallery}
        ${nav}
        `
    )
}

document.getElementById('root').innerHTML = app()
