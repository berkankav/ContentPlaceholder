let header = document.querySelector("#header");
let title = document.querySelector("#title");
let excerpt = document.querySelector("#excerpt");
let profile_img = document.querySelector("#profile_img");
let names = document.querySelector("#name");
let date = document.querySelector("#date");

let animated_bgs = document.querySelectorAll(".animated-bg");
let animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="img/background.jpg" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, adipisci suscipit tempore rerum error eos. Non facere fuga dicta magnam!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    names.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}