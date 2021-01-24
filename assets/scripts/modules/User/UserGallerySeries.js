//module (function) for computing the user series gallery from the valid gallery items data given

const UserSeries = (galleryItemsData = []) => {

    //define temporary  variable for holding gallery items
    let galleryItemsDataDOM = "";

    //print gallery data into the highlightsDOM variable
    galleryItemsData.forEach(galleryItemData => {
        if (galleryItemData.galleryType.indexOf("series") !== -1) {
            galleryItemsDataDOM += `
                <div class="series-item">
                    <img src="${galleryItemData.poster}" alt="">
                    <div class="series-content">
                        <p> ${galleryItemData.title}</p>
                    </div>
                </div>
            `;
        }

    });

    //return compiled HTML
    return `
    <div class="user-series autoset">
        <div class="series-heading">
            Series
        </div>
        <div class="series-main">
        ${galleryItemsDataDOM}
            
        </div>
    </div>
    `;
}

export default UserSeries;