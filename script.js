//shortcut

function byId(id) {
    return document.getElementById(id);
}

function set(key, data) {
    return localStorage.setItem(key, data);
}

function get(key) {
    return localStorage.getItem(key);
}

//page navigation
function page(data) {
    try{
        for(i=0;i<10;i++){
            try{
                byId("page"+i).style.display = "none";
            }catch(e){

            }
        }
        var page = byId(data);
        page.style.display = "block";
        var ani = anime({
            targets: '#' + data,
            duration: 500,
            delay: 0,
            translateX: [360, 0],
            loop: false,
            easing: 'linear',
            direction: 'alternate',
        });
        //twerk to retain scroll point
        document.body.scrollTo(0,get("scrollTop"));
    }catch(e){
        console.log(e);
    }
}

//launch main page after 3seconds
setTimeout(function(){
  page("page2");
},5000);


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active"); //tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.classList.add("active");
}
var elem = document.querySelector(".image_info img");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

byId("menu_dots").onclick = function(){
  openFullscreen();
}

function openImage(src){
  set("scrollTop",document.body.scrollTop);
  byId("image").src = src;
  page("page3");
}