const greeting = document.querySelector("#greeting");
const navbarLink = document.querySelector(".navbar-link");
const hamburger = document.querySelector(".hamburger-menu");
const account = document.querySelector("#account");
const jokes = document.querySelector("#jokes");
// let nama = "Ayaka";

// default
// account.innerHTML = nama;
document.querySelector("#year").innerHTML = new Date().getFullYear();

var getName = prompt("Who are you?");
if (getName) {
  account.innerHTML = getName;
  //  greeting

<<<<<<< HEAD
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h >= 4 && h < 10) greeting.innerHTML = `Selamat pagi, ${getName}`;
  if (h >= 10 && h < 15) greeting.innerHTML = `Selamat siang, ${getName}`;
  if (h >= 15 && h < 18) greeting.innerHTML = `Selamat sore, ${getName}`;
  if (h >= 18 || h < 4) greeting.innerHTML = `Selamat malam, ${getName}`;
} else if (getName === "") {
  //  greeting

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h >= 4 && h < 10) greeting.innerHTML = "Selamat pagi, Users" + h + m + s;
  if (h >= 10 && h < 15)
    greeting.innerHTML = "Selamat siang, Users" + h + m + s;
  if (h >= 15 && h < 18) greeting.innerHTML = "Selamat sore, Users" + h + m + s;
  if (h >= 18 || h < 4) greeting.innerHTML = "Selamat malam, Users" + h + m + s;
  account.innerHTML = "Orang Baik";
} else {
  alert("Waduh");
  window.location = "https://api.fian014.site/sfw/waifu";
}

=======
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h >= 4 && h < 10) greeting.innerHTML = `Selamat pagi, ${getName}`;
  if (h >= 10 && h < 15) greeting.innerHTML = `Selamat siang, ${getName}`;
  if (h >= 15 && h < 18) greeting.innerHTML = `Selamat sore, ${getName}`;
  if (h >= 18 || h < 4) greeting.innerHTML = `Selamat malam, ${getName}`;
} else if (getName === "") {
  //  greeting

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  account.innerHTML = "Users" + h + m + s;
  if (h >= 4 && h < 10) greeting.innerHTML = "Selamat pagi, Users" + h + m + s;
  if (h >= 10 && h < 15)
    greeting.innerHTML = "Selamat siang, Users" + h + m + s;
  if (h >= 15 && h < 18) greeting.innerHTML = "Selamat sore, Users" + h + m + s;
  if (h >= 18 || h < 4) greeting.innerHTML = "Selamat malam, Users" + h + m + s;
} else {
  alert("Waduh");
  window.location = "https://api.fian014.site/sfw/waifu";
}

>>>>>>> e9898e4e2c60311c3f7db02eb1e42f965e541e8d
// toggle menu

function showNavbar() {
  navbarLink.classList.toggle("active");
}

// click outside navbar

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});

// fetch jokes bapak2
fetch("https://candaan-api.vercel.app/api/text/random")
  .then((res) => res.json())
  .then((data) => (jokes.innerHTML = data.data));

// slick configuration

$(".single-slide").slick({
  arrows: false,
  autoplay: true,
  infinite: true,
  dots: true,
  autoplaySpeed: 2500,
});

$(".Content-card").slick({
  // dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  prevArrow: $(".prev-arrow"),
  nextArrow: $(".next-arrow"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// $(document).ready(function () {
//   $(".Content-card").slick({
//     autoplay: true,
//     autoplaySpeed: 2500,
//   });
// });
