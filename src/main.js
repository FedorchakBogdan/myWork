var listDivs = document.querySelectorAll('.slide');
// console.log(listDivs);
var currentSlide = 0;
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var slideInterval = setInterval(autoplay,8000);

function autoplay(){
    listDivs[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%listDivs.length;
    listDivs[currentSlide].className = 'slide active';
}
var playing = true;

function pauseSlideshow() {
	playing = false;
	clearInterval(slideInterval);
}
 
function goToSlide(n) {
	listDivs[currentSlide].className = 'slide';
	currentSlide = (n+listDivs.length)%listDivs.length;
	listDivs[currentSlide].className = 'slide active';
}
function next_slide() {
	goToSlide(currentSlide+1);
}
function prev_slide() {
	goToSlide(currentSlide-1);
}

next.onclick = function() {
	next_slide();
	pauseSlideshow();

};
prev.onclick = function() {
	prev_slide();
	pauseSlideshow();
};




class Popup {
   constructor(color, title, text) {
       this.color = color;
       this.text = text;
       this.title = title;
       this.togglePopup = this.togglePopup.bind(this);
   }
   createPopup() {
       var popup = document.createElement('div');
       popup.classList.add('model-window');

       var popupCont = document.createElement('div');
       popupCont.classList.add('popup-content');
       popupCont.style.backgroundColor = this.color;
       popup.appendChild(popupCont);

       var popupTitle = document.createElement('div');
       popupTitle.classList.add('popup-title');
       popupCont.appendChild(popupTitle);

       var h2Element = document.createElement('h2');
       h2Element.innerText = this.title;
       popupTitle.appendChild(h2Element);

       var popupBody = document.createElement('div');
       popupBody.classList.add('popup-body');
       popupBody.innerText = this.text;
       popupCont.appendChild(popupBody);

       var popupActions = document.createElement('div');
       popupActions.classList.add('popup-actions');
       popupCont.appendChild(popupActions);

       var closeBtn = document.createElement('button');
       closeBtn.classList.add('green-btn');
       closeBtn.innerText = 'close me, please';
       popupActions.appendChild(closeBtn);

       var body = document.querySelector('body');
       body.appendChild(popup);

       this.popup = popup;
       closeBtn.addEventListener('click', this.togglePopup)
   }
   togglePopup() {
       this.popup.classList.toggle('active');
   }
}

function getValue(){
   	var value_color = document.getElementById('input-color').value;
   	var value_title = document.getElementById('input-title').value;
   	var value_text = document.getElementById('input-text').value;
   	var Popup_box = new Popup( value_color, value_title, value_text);
	Popup_box.createPopup();
	var popup_btn = document.createElement('button');
	var nav_popup = document.querySelector('.nav-popup');
	nav_popup.appendChild(popup_btn);
	var openBtn = popup_btn;
	openBtn.style.backgroundColor = value_color;
	openBtn.innerText = 'Открыть';
	openBtn.addEventListener('click', Popup_box.togglePopup);
}

// var errorPopup1 = new Popup('red', 'We learn JS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
// errorPopup1.createPopup();

// var errorPopup2 = new Popup('green', ' consectetur adipisicing elit.', 'We learn JS2');
// errorPopup2.createPopup();

// var openBtn1 = document.querySelector('.open-popup1');
// openBtn1.addEventListener('click', errorPopup1.togglePopup);

// var openBtn2 = document.querySelector('.open-popup2');
// openBtn2.addEventListener('click', errorPopup2.togglePopup);