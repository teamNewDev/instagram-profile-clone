//module (function) for computing the user series gallery from the valid gallery items data given

const UserGalleryMain = (galleryItemsData = [])=>{

    //define temporary  variable for holding gallery items
    let galleryItemsDataDOM = "";

    //print gallery data into the highlightsDOM variable
    galleryItemsData.forEach(galleryItemData=>{
        if(galleryItemData.galleryType.indexOf("main") !== -1){
            galleryItemsDataDOM += `
                <div class="gallery-item">
                    <span class="top-icon ig-icon-${galleryItemData.topIcon}"></span>
                    <img src="${galleryItemData.poster}" alt="An [${galleryItemData.topIcon}] post">
                </div>
            `;
        }
    });

    //return compiled HTML
    return `
        <div class="gallery-contents">
            ${galleryItemsDataDOM}
        </div>
    `;
}

export default UserGalleryMain;