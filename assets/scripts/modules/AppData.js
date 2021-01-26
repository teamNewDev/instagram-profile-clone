//Import all app data needed to setup a simple app for the App class
import GalleryData from "./AppData/GalleryData.js"
import HighlightsData from "./AppData/HighlightsData.js"
import IconifyData from "./AppData/IconifyData.js"
import InstagramIcons from "./AppData/InstagramIconsData.js";

//compile modules into a single object
const AppData = {
    gallery: GalleryData,
    highlights: HighlightsData,
    iconify: IconifyData,
    instagramIcons: InstagramIcons
};

//export object as a module
export default AppData;