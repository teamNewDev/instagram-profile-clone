var Images = "";

function randomIcons(){
    var icons = ["gallery_icon","channel_icon","video_icon","",""];
    return icons[Math.floor(Math.random() * icons.length)];
}

for(var i = 1;i<55;i++){
        Images += `
        <div class="image_holder" onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
}
//Add last image for Responsive twerk
Images += `
        <div class="image_holder last_image" onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
export default Images;
