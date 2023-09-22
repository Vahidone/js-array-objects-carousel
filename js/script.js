const photos = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];


const btnNext = document.getElementById('btn-t');
const btnPrev = document.getElementById('btn-b');
const itemsWrap = document.querySelector('.items-wrapper');






// reset 
itemsWrap.innerHTML = '';




let counterImg = 0;

for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  itemsWrap.innerHTML += `<img src="${photo}" class="item hide">`;
  
}

const itemCollection = document.getElementsByClassName('item');
const thumbCollection = document.getElementsByClassName('thumb');

itemCollection[0].classList.remove('hide');
thumbCollection[0].classList.add('active');

// botton next 
btnNext.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('hide');
  thumbCollection[counterImg].classList.remove('active');
  
  counterImg++;

  if(counterImg === itemCollection.length) {
    counterImg = 0;
  }

  itemCollection[counterImg].classList.remove('hide');
  thumbCollection[counterImg].classList.add('active');
  btnPrev.classList.remove('hide');

});


// botton prev 
btnPrev.addEventListener('click', function () {
  itemCollection[counterImg].classList.add('hide');
  thumbCollection[counterImg].classList.remove('active');

  counterImg--;

  if(counterImg < 0) {
    counterImg = itemCollection.length - 1;
  }

  itemCollection[counterImg].classList.remove('hide');
  thumbCollection[counterImg].classList.add('active');
  btnNext.classList.remove('hide'); 
 
});


