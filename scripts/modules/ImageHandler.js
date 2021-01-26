//Simple function I designed to handle all images where errors are encountered
const ImageHandler = ()=>{
    let allImages = document.querySelectorAll("img");

    allImages.forEach(image => {
        image.addEventListener("error", e=>{
            e.preventDefault();
            e.currentTarget.src = "./assets/images/sprites/brokenImg.png";
        });
    });
}

//export function as a module
export default ImageHandler;