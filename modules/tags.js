var Tags = ``;

function randomIcons(){
    var icons = ["gallery_icon","channel_icon","video_icon","",""];
    return icons[Math.floor(Math.random() * icons.length)];
}

for(var i = 11;i<20;i++){
        Tags += `
        <div class="image_holder"  onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
}
//Add last image for Responsive twerk
Tags += `
        <div class="image_holder last_image" onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
export default Tags;
