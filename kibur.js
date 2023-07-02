const draw = document.querySelector('.bar');

const slider = document.querySelector('.hidden');

const drawBtn = document.querySelector('.drawBtn').addEventListener('click', (e) => {
  slider.classList.remove('show');
  document.body.style.overflowY = "auto"
})
draw.addEventListener('click', () => {
  slider.classList.toggle('show');
  document.body.style.overflowY = "hidden"
})

const list = document.querySelectorAll('.hidden a');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    if (slider.classList.contains('show')) {
      slider.classList.remove('show');
      document.body.style.overflowY = "auto"
    }
  })
}


const overlay = document.querySelector('.sidebar-overlay');

const closeModelBtn = document.getElementsByClassName('closemodel');

const modelImg = document.getElementsByClassName('flex-container');

const btn = document.querySelector('.btnF');

const modelOpenBtn = document.getElementsByClassName('btnF');


overlay.addEventListener('click', closeModelBtn)

const modelCard = []
for (var prop in modelImg) {
  modelCard.push(modelImg[prop])
}

/*function closeModel(arg) {
  overlay.classList.remove('open')
  console.log(Array.from(modelCard).indexOf());
  document.body.style.overflowY = 'auto';}
function openModel(arg) {
}*/

for (let i = 0; i < modelOpenBtn.length; i++) {
  modelOpenBtn[i].addEventListener('click', () => {
    document.body.style.overflowY = 'hidden';
    overlay.classList.add('open');
    modelImg[i].classList.add('open')
    modelImg[i].querySelector('.closemodel').style.display ="block";
  });
}




for (let i = 0; i < closeModelBtn.length; i++) {
  closeModelBtn[i].addEventListener('click', () => {
    overlay.classList.remove('open');
    modelImg[i].classList.remove('open')
    modelImg[i].querySelector('.closemodel').style.display ="none";
    document.body.style.overflowY = 'auto';
  });
}