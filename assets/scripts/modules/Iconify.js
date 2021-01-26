//A simple function I made for handling on page icons
const Iconify = (elementQuery, iconHTML) => {
    //get all matched elements
    let matchedElements = document.querySelectorAll(elementQuery);

    //input the icon's SVG that matches the classname or id specified
    matchedElements.forEach(matchedElement => {
        matchedElement.innerHTML = iconHTML;
    });
}

//export function as a module
export default Iconify;