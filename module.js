//import modules
import Status from "./modules/status.js";
import Tabs from "./modules/tabs.js";
import Images from "./modules/images.js";
import Footer from "./modules/footer.js";
import Videos from "./modules/videos.js";
import Channels from "./modules/channels.js";
import Tags from "./modules/tags.js";
import Layer1 from "./modules/layer1.js";
import Layer2 from "./modules/layer2.js";

//shotcut function to getElementById
function byId(id) {
    return document.getElementById(id);
}

//Set first layer of the app
byId("layer1").innerHTML = Layer1();

//Set second layer of the app
byId("layer2").innerHTML = Layer2();


//Set tabs from module
document.querySelector(".tab").innerHTML = Tabs();


//Set status from module
byId("layer3").innerHTML = Status();

//Set footer from module
byId("layer5").innerHTML = Footer();

//Set footer for page3 from module
byId("layer6").innerHTML = Footer();

//set images from module
byId("galleryTab").innerHTML = Images;

//set videos from module
byId("videoTab").innerHTML = Videos();

//set channels from module
byId("channelTab").innerHTML = Channels();

//set tags from module
byId("tagTab").innerHTML = Tags;