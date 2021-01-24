//Import user page data and html from the user modules 
import UserActions from "./User/UserActions.js"
import UserBio from "./User/UserBio.js"
import UserMeta from "./User/UserMeta.js"
import UserHighlights from "./User/UserHighlights.js"
import UserGalleryDefault from "./User/UserGalleryDefault.js"
import UserGalleryNav from "./User/UserGalleryNav.js"
import UserGalleryMain from "./User/UserGalleryMain.js"
import UserPopup from "./User/UserPopup.js"
import UserSeries from "./User/UserGallerySeries.js"

//set all data into the User object
const User = {
    actions: UserActions,
    bio: UserBio,
    meta: UserMeta,
    gallery: {
        default: UserGalleryDefault,
        main: UserGalleryMain,
        nav: UserGalleryNav,
        series: UserSeries,
    },
    highlights: UserHighlights,
    popup: UserPopup
}

//export user page data object
export default User;