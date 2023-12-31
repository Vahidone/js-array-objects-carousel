const btnNext = document.getElementById("btn-t");
const btnPrev = document.getElementById("btn-b");
const btnReverse = document.getElementById("btn-reverse");
const itemsWrap = document.querySelector(".items-wrapper");

const photos = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

itemsWrap.innerHTML = " ";
let counterImg = 0;
let reverseDirection = false;

photos.forEach((photo) => {
  itemsWrap.innerHTML += `
    <div class="img-space item">
      <img src="${photo.image}">

      <div class="text-space">
        <h2 class="title">${photo.title}</h2>
        <p class="text">${photo.text}</p>
      </div>
    </div>
  `;
});


const itemCollection = document.getElementsByClassName("item");
const thumbCollection = document.getElementsByClassName("thumb");

// ...

//  Nascondo immagini all'inizio
for (let i = 0; i < itemCollection.length; i++) {
  itemCollection[i].classList.add("hide");
}

// Mostro solo la prima immagine
itemCollection[0].classList.remove("hide");
thumbCollection[0].classList.add("active");

// Funzione per avviare l'auto-scroll
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(function () {
    if (!reverseDirection) {
      // dirtezione normale
      itemCollection[counterImg].classList.add("hide");
      thumbCollection[counterImg].classList.remove("active");

      counterImg++;

      if (counterImg === itemCollection.length) {
        counterImg = 0;
      }
    } else {
      // dirtezione inversa
      itemCollection[counterImg].classList.add("hide");
      thumbCollection[counterImg].classList.remove("active");

      counterImg--;

      if (counterImg < 0) {
        counterImg = itemCollection.length - 1;
      }
    }

   
    itemCollection[counterImg].classList.remove("hide");
    thumbCollection[counterImg].classList.add("active");
  }, 3000);
}

// Avvia l'auto-scroll iniziale
startAutoScroll();


for (let i = 0; i < thumbCollection.length; i++) {
  thumbCollection[i].addEventListener("click", function () {
    // Nascondi l'immagine attualmente attiva
    itemCollection[counterImg].classList.add("hide");
    thumbCollection[counterImg].classList.remove("active");

   
    counterImg = i;
    itemCollection[counterImg].classList.remove("hide");
    thumbCollection[counterImg].classList.add("active");

    
    reverseDirection = i < counterImg;
    autoScrollInterval && clearInterval(autoScrollInterval); 
    startAutoScroll(); 
  });
}

// Botton next
btnNext.addEventListener("click", function () {
  reverseDirection = false; // Imposto la direzione a normale
  autoScrollInterval && clearInterval(autoScrollInterval); // Cancello l'auto-scroll
  startAutoScroll(); // Riavvio l'auto-scroll

  
  thumbCollection[counterImg].classList.remove("active");
  counterImg = (counterImg + 1) % itemCollection.length;
  thumbCollection[counterImg].classList.add("active");
});

// Botton prev
btnPrev.addEventListener("click", function () {
  reverseDirection = true; // Imposto la direzione a inversa
  autoScrollInterval && clearInterval(autoScrollInterval); // Cancello l'auto-scroll
  startAutoScroll(); // Riavvio l'auto-scroll

  
  thumbCollection[counterImg].classList.remove("active");
  counterImg = (counterImg - 1 + itemCollection.length) % itemCollection.length;
  thumbCollection[counterImg].classList.add("active");
});