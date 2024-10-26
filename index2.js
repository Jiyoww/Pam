const message_pop =  document.getElementById("mess");
const content2 = document.getElementById("popup2");

const pics_pop =  document.getElementById("pics");
const content3 = document.getElementById("popup3");

message_pop.onclick = function() {
    content2.style.display = 'block';
}

pics_pop.onclick = function() {
    content3.style.display = 'block';
}

window.onclick = function(event){
    if(event.target === content2){
        content2.style.display = 'none';
    }
    else if(event.target === content3){
        content3.style.display = 'none';
    }          
}

const img1_button = document.getElementById('img1');
const img1_pop = document.getElementById('img1_pop');
const image1 = document.getElementById('image1_function');

const img2_button = document.getElementById('img2');
const img2_pop = document.getElementById('img2_pop');
const image2 = document.getElementById('image2_function');

const img3_button = document.getElementById('img3');
const img3_pop = document.getElementById('img3_pop');
const image3 = document.getElementById('image3_function');

const img4_button = document.getElementById('img4');
const img4_pop = document.getElementById('img4_pop');
const image4 = document.getElementById('image4_function');

const img5_button = document.getElementById('img5');
const img5_pop = document.getElementById('img5_pop');
const image5 = document.getElementById('image5_function');

const img6_button = document.getElementById('img6');
const img6_pop = document.getElementById('img6_pop');
const image6 = document.getElementById('image6_function');

img1_button.onclick = function(){
    img1_pop.style.display = 'flex';
}

img2_button.onclick = function(){
    img2_pop.style.display = 'flex';
}

img3_button.onclick = function(){
    img3_pop.style.display = 'flex';
}

img4_button.onclick = function(){
    img4_pop.style.display = 'flex';
}

img5_button.onclick = function(){
    img5_pop.style.display = 'flex';
}

img6_button.onclick = function(){
    img6_pop.style.display = 'flex';
}

img1_pop.onclick = function(event){
    if(event.target !== image1){
        img1_pop.style.display = 'none';
    }
}

img2_pop.onclick = function(event){
    if(event.target !== image2){
        img2_pop.style.display = 'none';
    }
}

img3_pop.onclick = function(event){
    if(event.target !== image3){
        img3_pop.style.display = 'none';
    }
}

img4_pop.onclick = function(event){
    if(event.target !== image4){
        img4_pop.style.display = 'none';
    }
}

img5_pop.onclick = function(event){
    if(event.target !== image5){
        img5_pop.style.display = 'none';
    }
}

img6_pop.onclick = function(event){
    if(event.target !== image6){
        img6_pop.style.display = 'none';
    }
}

