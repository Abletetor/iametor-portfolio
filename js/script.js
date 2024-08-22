// navbar hiding and showing
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector(".header .menu");

menuBtn.addEventListener("click", () => {
     navbar.classList.toggle("show");
});


// hiding the header bar when scrolling down
document.onscroll = () => {
     navbar.classList.remove("show");
     
     if (window.scrollY > 0) {
          document.querySelector(".header").classList.add("active");
     } else {
          document.querySelector(".header").classList.remove("active");
     };
};

// hiding the header on onload of the site 
document.onload = () => {
     if (window.scrollY > 0) {
          document.querySelector(".header").classList.add("active");
     } else {
          document.querySelector(".header").classList.remove("active");
     }
};


// footer year 
document.getElementById("year").textContent = new Date().getFullYear();

