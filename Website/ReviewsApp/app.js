const reviews = [
  {
    id: 1,
    name: "Devang Sharma",
    job: "Web Developer",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    desc: "We are seeking a skilled web developer to join our team. The ideal candidate will have expertise in front-end and/or back-end development, with a strong understanding of web technologies such as HTML, CSS, JavaScript, and related frameworks.  ",
  },
  {
    id: 2,
    name: "Ryan Reynolds",
    job: "UX Designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHNjdG-ehK_xG6aLnegnxaJBYr8Vyz0t8fVcop4pE3OjXewEoYNFI9XnIFaPl3wP4JNI&usqp=CAU",
    desc: "We are seeking a skilled web developer to join our team. The ideal candidate will have expertise in front-end and/or back-end development, with a strong understanding of web technologies such as HTML, CSS, JavaScript, and related frameworks. ",
  },
  {
    id: 3,
    name: "Ronny Grew",
    job: "UI Designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hjdJuEv9fFLpnCL4vW-GIL_ewiAoiGRCK4EfyWQPKLFDpOHGAajoKMirxdYVZPboZDs&usqp=CAU",
    desc: "We are seeking a skilled web developer to join our team. The ideal candidate will have expertise in front-end and/or back-end development, with a strong understanding of web technologies such as HTML, CSS, JavaScript, and related frameworks.",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.querySelector(".job");
const desc = document.querySelector(".info");
const randomBtn = document.getElementById("randomBtn");

let currentItem = 0
console.log(currentItem)

randomBtn.addEventListener('click',()=>{
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem)
    showPerson(currentItem)
})

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.innerText = item.name;
  job.innerText = item.job;
  desc.innerText = item.desc;
}

const prev = document.querySelector(`.prevBtn`);
const next = document.querySelector(`.nextBtn`);

next.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prev.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
