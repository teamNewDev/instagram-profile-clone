import TopBar from './modules/TopBar.js';
import ProfileInfo from './modules/ProfileInfo.js';
import UserButtons from './modules/UserButtons.js';
import UserStoryInfo from './modules/UserStoryInfo.js';
import Gallery from './modules/Gallery.js';


const App = () => 
        {
            return(
            `
            ${TopBar()}
            ${ProfileInfo()}
            ${UserButtons()}
            ${UserStoryInfo()}
            ${Gallery()}
            `
            )
    }

document.querySelector('.instagram__page').innerHTML = App();
