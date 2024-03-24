var sliderImgs = Array.from(document.querySelectorAll(".slide-container img"));

var slidesCount = sliderImgs.length;

var curSlide = 1;

var img = document.getElementsByClassName("img");


var slideNumber = document.getElementById("slide-number");

var next = document.getElementById("next");
var prev = document.getElementById("prev");



next.onclick = nextSlide;
prev.onclick = prevSlide;



var indicatorEle = document.createElement('ul');
indicatorEle.setAttribute('id', 'indicator-ul');

for(var i = 1; i <= slidesCount; i++){
    
    var indicatorItem = document.createElement('li')

    indicatorItem.setAttribute('data-index', i);

    indicatorItem.appendChild(document.createTextNode(i));
    
    indicatorEle.appendChild(indicatorItem);
    
}

document.getElementById("indicators").appendChild(indicatorEle);

var indicatorCreatedUl = document.getElementById("indicator-ul");
var indicatorsArray = Array.from(document.querySelectorAll("#indicator-ul li"));

for(var i = 0; i < indicatorsArray.length; i++){
    indicatorsArray[i].onclick = function(){
        curSlide = +this.getAttribute('data-index');
        
        theChecker();
        
    }
}

theChecker();





//next slide function
function nextSlide(){

    if(curSlide != slidesCount){
        curSlide++;
        
        theChecker();
        
    };
}

//prev slide function
function prevSlide(){
    
    if(curSlide != 1){
        curSlide--;
        
        theChecker();    
    }
    
    
}

// checker function 
function theChecker() {
    
    slideNumber.textContent = 'Slide #' + (curSlide) + ' of ' + slidesCount;
    
    removeActives();
    
    sliderImgs[curSlide - 1].classList.add('active');
    indicatorCreatedUl.children[curSlide - 1].classList.add('active');
    
    if(curSlide == 1){
        prev.classList.add('disabled');
    }else{
        prev.classList.remove('disabled');
    }
    
    if(curSlide == slidesCount){
        next.classList.add('disabled');
    }else{
        next.classList.remove('disabled');
    }
    
}

//remove function
function removeActives() {
    sliderImgs.forEach( function (img){
        img.classList.remove('active');
    });
    indicatorsArray.forEach(function (li){
        li.classList.remove('active');
    });
}

// img click function
img[1].onclick = function(){
    img.classList.toggle("activeImg");
    console.log("img");
}
console.log(img[1]);