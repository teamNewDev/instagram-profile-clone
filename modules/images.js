//image holder
let Images = "";

//get random icons for tagging images
function randomIcons(){
    var icons = ["gallery_icon","channel_icon","video_icon","",""];
    return icons[Math.floor(Math.random() * icons.length)];
}

//populate image holder with images using loop
for(var i = 1;i<55;i++){
        //iterate using 'i'
        Images += `
        <div class="image_holder" onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
}
//Add last image to retain Responsiveness
Images += `
        <div class="image_holder last_image" onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
export default Images;
