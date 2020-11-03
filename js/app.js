const links = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar-nav");


// Set year for the copyright
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


//change background color of navbar
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const header = document.querySelector(".header-container");
    const scroll = document.querySelector(".scroll-link");
 
 
    //show back to top link  
    if(scrollHeight > 500){
        header.classList.add("bg-light");
        scroll.classList.add("show-link");
    }else {
        header.classList.remove("bg-light");
        scroll.classList.remove("show-link");
    }

    
});

//Get active links
// navbar.addEventListener("click", function(e){
//     const name = e.target.dataset.name;

//     if(name){
//         links.forEach(function(link){
//             link.classList.remove("active");
//             e.target.classList.add("active");
//             console.log(e.target.classList + e.target.innerHTML);
//         });
//     }
// });


//change background color of newletter form when active
const newsLetter = document.querySelector(".news-input");
newsLetter.addEventListener("click", function(){
    newsLetter.style.backgroundColor = "inherit";
});
