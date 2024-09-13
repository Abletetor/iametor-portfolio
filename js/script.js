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

// form handler
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
   const formData = new FormData(form);
   e.preventDefault();

   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);

   result.innerHTML = "Please wait...";

   fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: json
   })
      .then(async (response) => {
         let json = await response.json();
         if (response.status == 200) {
            alert(json.message);
         } else {
            console.log(response);
            alert(json.message);
         }
      })
      .catch(error => {
         console.log(error);
         alert("Something went wrong!");
      })
      .then(function () {
         form.reset();
         setTimeout(() => {
            result.style.display = "none";
         }, 3000);
      });
});

// footer year 
document.getElementById("year").textContent = new Date().getFullYear();

