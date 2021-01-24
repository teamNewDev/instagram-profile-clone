//module (function) for computing the user highlights from the valid highlights data given

const UserHighlights = (highlightsData = [])=> {

    //define the variable for holding highlights
    let highlightsDOM = "";

    //print  hightlights into the highlightsDOM variable
    highlightsData.forEach(highlightData=>{
        highlightsDOM += `
            <div class="highlight-item">
                <div class="highlight-image">
                    <img src="${highlightData.poster}" alt="[${highlightData.title}]">
                </div>
                <div class="hightlight-description">
                    ${highlightData.title}
                </div>
            </div>
        `;
    });
    
    //return inputed higlights
    return `
        <div class="user-highlights autoset">
                ${highlightsDOM}
        </div>
    `;
}

export default UserHighlights;