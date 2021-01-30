//tag holder 
let Tags = ``;

//get random icons for tagging images 
function randomIcons() {
    let icons = ["gallery_icon", "channel_icon", "video_icon", "", ""];
    return icons[Math.floor(Math.random() * icons.length)];
}

//loop to construst image list to populate tag holder 
for (let i = 11; i < 20; i++) {
    //iterate using 'i'
    Tags += `
        <div class="image_holder"  onclick="openImage('gallery/${i}.jpg')">
            <div class="image_info">
                <img src="gallery/${i}.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
}
//Add last image for Responsive trick
Tags += `
        <div class="image_holder last_image" onclick="openImage('gallery/20.jpg')">
            <div class="image_info">
                <img src="gallery/20.jpg">
                <span class="image_icon ${randomIcons()}"></span>
            </div>
        </div>`;
export default Tags;
