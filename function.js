        const videoBox = document.querySelectorAll(".video");
        const video1 = document.querySelector("#video1");
        const video2 = document.querySelector("#video2");
        const galleryButtons = document.querySelectorAll(".gallery__icons i");
        const switchMedia = document.querySelectorAll(".switch");
        const allImages = document.querySelectorAll(".image");
        const slideUpToggleButton = document.querySelectorAll(".fa-ellipsis-v");
        const slideUpMenu = document.querySelector('.slide-up-menu');

        galleryButtons.forEach(button => {
            button.addEventListener("click", (e)=>{
                let current = document.querySelectorAll(".active-gallery");
                current.forEach(active => active.classList.remove("active-gallery"));
                e.target.className += " active-gallery"

                const handleSwitchMedia = (e) => {
                    let current = document.querySelectorAll(".active");
                    current.forEach(active => active.classList.remove("active"));
                    switchMedia[e].className += " active"
                }

                if(button.classList.contains("fa-tv")){
                    handleSwitchMedia(1)
                }else if(e.target.classList.contains("fa-video")){
                    handleSwitchMedia(2)
                }else if(e.target.classList.contains("fa-magic")){
                    handleSwitchMedia(3)
                }else if(e.target.classList.contains("fa-user-nurse")){
                    handleSwitchMedia(4)
                }else if(e.target.classList.contains("fa-th")){
                    handleSwitchMedia(0)
                }
            })
        })

        function playPause(myVideo, icon) { 
            if (myVideo.paused) {
                icon.classList.replace("fa-play", "fa-pause")
                myVideo.play(); 
            }else {
                icon.classList.replace("fa-pause", "fa-play")
                myVideo.pause();
            }
                
        } 

        videoBox.forEach(video => {
            video.addEventListener("click", (e)=>{
                if(e.target.id == "video1"){
                    const icon = e.target.parentElement.querySelector("i");
                    playPause(video1, icon)
                }else if(e.target.id == "video2"){
                    const icon = e.target.parentElement.querySelector("i");
                    playPause(video2, icon)
                }
            })
        })

        allImages.forEach(image => image.addEventListener("click", ()=>{
            const sourceLength = image.children[0].src.indexOf("images/");
            const imageSource = image.children[0].src.slice(sourceLength);
            // Overlay(imageSource)
            const overlay = document.querySelector(".overlay");
            document.querySelector(".overlay").style.display = "flex"
            document.querySelector(".overlay").style.right = "0"
            document.querySelector(".overlay").children[1].children[0].style.backgroundImage = `url(${imageSource})`
            document.querySelector(".overlay").children[0].children[0].children[0].addEventListener("click", ()=> overlay.style.display = "none")
        }))

        slideUpToggleButton.forEach(button => button.addEventListener("click", ()=> {
            if(slideUpMenu.style.bottom == "0px"){
                slideUpMenu.style.bottom = "-1000px"
            }else{
                slideUpMenu.style.bottom = "0px"
            }
        }));

        slideUpMenu.children[0].addEventListener("click", ()=>{
                if(slideUpMenu.style.bottom == "0px"){
                slideUpMenu.style.bottom = "-1000px"
                }else{
                    slideUpMenu.style.bottom = "0px"
                }
        })