var audio1 = new Audio('./audio/1.mp3');
var audio2 = new Audio('./audio/2.mp3');
var audio3 = new Audio('./audio/3.mp3');
var audio4 = new Audio('./audio/4.mp3');
var audio5 = new Audio('./audio/5.mp3');
var audio6 = new Audio('./audio/6.mp3');
var audio7 = new Audio('./audio/7.mp3');
var audio8 = new Audio('./audio/8.mp3');
var audio9 = new Audio('./audio/9.mp3');
var audio10 = new Audio('./audio/10.mp3');
var audio11 = new Audio('./audio/11.mp3');
var audio12 = new Audio('./audio/12.mp3');
var audio13 = new Audio('./audio/13.mp3');
var audio14 = new Audio('./audio/14.mp3');
var audio15 = new Audio('./audio/15.mp3');
var audio16 = new Audio('./audio/16.mp3');
var audio17 = new Audio('./audio/17.mp3');
var audio18 = new Audio('./audio/18.mp3');
var audio19 = new Audio('./audio/19.mp3');
var audio20 = new Audio('./audio/20.mp3');
var audio21 = new Audio('./audio/audio21.mp3');
var audio22 = new Audio('./audio/audio22.mp3');

var button1 = document.querySelector(".audio1");
console.log(button1)
var button2 = document.querySelector(".audio2");
var button3 = document.querySelector(".audio3");
var button4 = document.querySelector(".audio4");
var button5 = document.querySelector(".audio5");
var button6 = document.querySelector(".audio6");
var button7 = document.querySelector(".audio7");
var button8 = document.querySelector(".audio8");
var button9 = document.querySelector(".audio9");
var button10 = document.querySelector(".audio10");
var button11 = document.querySelector(".audio11");
var button12 = document.querySelector(".audio12");
var button13 = document.querySelector(".audio13");
var button14 = document.querySelector(".audio14");
var artist1= document.querySelector(".artist1");
var artist2= document.querySelector(".artist2");
var artist3= document.querySelector(".artist3");
var artist4= document.querySelector(".artist4");
var artist5= document.querySelector(".artist5");
var artist6= document.querySelector(".artist6");
var artist7= document.querySelector(".artist7");
var artist8= document.querySelector(".artist8");
var artist9= document.querySelector(".artist9");
var artist10= document.querySelector(".artist10");

var artist_name= document.querySelector(".artist_name");
var artist_desc= document.querySelector(".artist_desc");

var played_song_img= document.querySelector(".played_song");
var played_song_name= document.querySelector(".played_song_name");
var played_song_artist= document.querySelector(".played_song_artist");
var gif= document.querySelector(".gif");
var main_player= document.querySelector(".main_player");

var img1= document.querySelector(".img1");
var img2= document.querySelector(".img2");
var img3= document.querySelector(".img3");
var img4= document.querySelector(".img4");
var img5= document.querySelector(".img5");
var img6= document.querySelector(".img6");
var img7= document.querySelector(".img7");
var img8= document.querySelector(".img8");
var img9= document.querySelector(".img9");
var img10= document.querySelector(".img10");


var toggle=0 
button1.addEventListener('click', function() {
  played_song_img.src="./img/1.jpg"
  played_song_name.innerText="On My Way"
    played_song_artist.innerText="Alan Walker"
    if(toggle==0){
        audio1.play();
        gif.classList.remove("hidden")
        button1.classList.remove("fa-regular fa-circle-play")
        toggle=1
    }
    else{
        audio1.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button2.addEventListener('click', function() {
    played_song_img.src="./img/2.jpg"
    played_song_name.innerText="Fade"
    played_song_artist.innerText="Alan Walker"
    if(toggle==0){
        audio2.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio2.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button3.addEventListener('click', function() {
    played_song_img.src="./img/3.jpg"
    played_song_name.innerText="Cartoon"
    played_song_artist.innerText="Daniel levi"
    if(toggle==0){
        audio3.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio3.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button4.addEventListener('click', function() {
    played_song_img.src="./img/4.jpg"
    played_song_name.innerText="Warriyo Martals"
    played_song_artist.innerText="Mortals"
    if(toggle==0){
        audio4.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio4.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button5.addEventListener('click', function() {
    played_song_img.src="./img/5.jpg"
    played_song_name.innerText="Etrugual-Gazi"
    played_song_artist.innerText="Etrugual"
    if(toggle==0){
        audio5.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio5.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button6.addEventListener('click', function() {
    played_song_img.src="./img/6.jpg"
    played_song_name.innerText="Electronic Music"
    played_song_artist.innerText="Electro"

    if(toggle==0){
        audio6.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio6.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button7.addEventListener('click', function() {
    played_song_name.innerText="Agar Tum Saath Ho"
    played_song_artist.innerText="Arijit Singh"
    played_song_img.src="./img/7.jpg"
    if(toggle==0){
        audio7.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio7.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button8.addEventListener('click', function() {
    played_song_name.innerText="Suna Hai"
    played_song_artist.innerText="Neha Kakkar"
    played_song_img.src="./img/8.jpg"
    if(toggle==0){
        audio8.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio8.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button9.addEventListener('click', function() {
    played_song_img.src="./img/9.jpg"
    played_song_name.innerText="Dilbar"
    played_song_artist.innerText="Neha Kakkar"
    if(toggle==0){
        audio9.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio9.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button10.addEventListener('click', function() {
    played_song_name.innerText="Duniya"
    played_song_artist.innerText="Akhil"
    played_song_img.src="./img/10.jpg"
    if(toggle==0){
        audio10.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio10.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button11.addEventListener('click', function() {
    played_song_name.innerText="Lagdi Lahore Di"
    played_song_artist.innerText="Guru Randhawa"
    played_song_img.src="./img/11.jpg"
    if(toggle==0){
        audio11.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio11.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button12.addEventListener('click', function() {
    played_song_img.src="./img/12.jpg"
    played_song_name.innerText="Putt Jatt Da"
    played_song_artist.innerText="Diljit Dosanjh"
    if(toggle==0){
        audio12.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio12.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button13.addEventListener('click', function() {
    played_song_img.src="./img/13.jpg"
    played_song_name.innerText="Baarishein"
    played_song_artist.innerText="Atif Aslam"

    if(toggle==0){
        audio13.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio13.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
button14.addEventListener('click', function() {
    played_song_img.src="./img/14.jpg"
    played_song_name.innerText="Vaste"
    played_song_artist.innerText="Dhavani Bhanushali"
    if(toggle==0){
        audio14.play();
        gif.classList.remove("hidden")
        toggle=1
    }
    else{
        audio14.pause();
        gif.classList.add("hidden")
        toggle=0
    }
});
artist1.addEventListener('click', function() {
    played_song_img.src="./img/10.jpg"
    played_song_name.innerText="Duniya"
    played_song_artist.innerText="Akhil"
    artist_name.innerText="Akhil"
    artist_desc.innerText="Akhil is a Punjabi singer known for his soulful and romantic songs. He has a distinctive voice and has gained popularity for his unique style."
    if(toggle==0){
        audio10.play();
        gif.classList.remove("hidden")
        img1.classList.remove("hidden")
        toggle=1
    }
    else{
        audio10.pause();
        gif.classList.add("hidden")
        img1.classList.add("hidden")
        toggle=0
    }
});
artist2.addEventListener('click', function() {
    played_song_img.src="./img/2.jpg"
    played_song_name.innerText="Fade"
    played_song_artist.innerText="Alan Walker"
    artist_name.innerText="Alen Walker"
    artist_desc.innerText="Alan Walker is a Norwegian music producer and DJ known for his electronic dance music. He gained international fame with his hit single Faded, which has over 2 billion views on YouTube."
    if(toggle==0){
        audio2.play();
        gif.classList.remove("hidden")
        img2.classList.remove("hidden")
        toggle=1
    }
    else{
        audio2.pause();
        gif.classList.add("hidden")
        img2.classList.add("hidden")
        toggle=0
    }
});
artist3.addEventListener('click', function() {
    played_song_img.src="./img/7.jpg"
    played_song_name.innerText="Agar Tum Saath Ho"
    played_song_artist.innerText="Arijit Singh"
    artist_name.innerText="Arjit Singh-Agar tum saath ho"
    artist_desc.innerText="Arijit Singh is an Indian singer and music composer known for his soulful and romantic songs. He has won numerous awards for his work in Bollywood films and is one of the most popular singers in India."
    if(toggle==0){
        audio7.play();
        gif.classList.remove("hidden")
        img3.classList.remove("hidden")
        toggle=1
    }
    else{
        audio7.pause();
        gif.classList.add("hidden")
        img3.classList.add("hidden")
        toggle=0
    }
});
artist4.addEventListener('click', function() {
    played_song_img.src="./img/14.jpg"
    played_song_name.innerText="Vaste"
    played_song_artist.innerText="Dhavani Bhanushali"
    artist_name.innerText="Dhvani Bhanushali"
    artist_desc.innerText="Dhvani Bhanushali is an Indian singer and songwriter known for her work in Bollywood films and independent music. She gained popularity with her hit single Vaaste and has since released several successful songs."
    if(toggle==0){
        audio14.play();
        gif.classList.remove("hidden")
        img4.classList.remove("hidden")
        toggle=1
    }
    else{
        audio14.pause();
        gif.classList.add("hidden")
        img4.classList.add("hidden")
        toggle=0
    }
});
artist5.addEventListener('click', function() {
    played_song_img.src="./img/12.jpg"
    played_song_name.innerText="Putt Jatt Da"
    played_song_artist.innerText="Diljit Dosanjh"
    artist_name.innerText="Diljit Dosanjh"
    artist_desc.innerText="Diljit Dosanjh, commonly known as Diljit, is an Indian actor, singer, and television presenter who primarily works in Punjabi and Hindi films. He is known for his versatile acting skills and has won several awards for his work in the film industry."
    if(toggle==0){
        audio12.play();
        gif.classList.remove("hidden")
        img5.classList.remove("hidden")
        toggle=1
    }
    else{
        audio12.pause();
        gif.classList.add("hidden")
        img5.classList.add("hidden")
        toggle=0
    }
});
artist6.addEventListener('click', function() {
    played_song_img.src="./img/11.jpg"
    played_song_name.innerText="Lagdi Lahore Di"
    played_song_artist.innerText="Guru Randhawa"
    artist_name.innerText="Guru Randhawa"
    artist_desc.innerText="Guru Randhawa is an Indian singer, songwriter, and music composer known for his Punjabi-language songs that blend traditional and modern music styles."
    if(toggle==0){
        audio11.play();
        gif.classList.remove("hidden")
        img6.classList.remove("hidden")
        toggle=1
    }
    else{
        audio11.pause();
        gif.classList.add("hidden")
        img6.classList.add("hidden")
        toggle=0
    }
});
artist7.addEventListener('click', function() {
    played_song_img.src="./img/21.jpg"
    played_song_name.innerText="Blue Eyes"
    played_song_artist.innerText="Honey Singh"
    artist_name.innerText="Honey Singh"
    artist_desc.innerText="Honey Singh is an Indian rapper, music producer, and actor known for his commercial rap songs in Bollywood films and independent music."
    if(toggle==0){
        audio21.play();
        gif.classList.remove("hidden")
        img7.classList.remove("hidden")
        toggle=1
    }
    else{
        audio21.pause();
        gif.classList.add("hidden")
        img7.classList.add("hidden")
        toggle=0
    }
});
artist8.addEventListener('click', function() {
    played_song_img.src="./img/15.jpg"
    played_song_name.innerText="Lut Gaye"
    played_song_artist.innerText="Jubin Nautiyal"
    artist_name.innerText="Jubin Nautiyal"
    artist_desc.innerText="Jubin Nautiyal is an Indian singer and music composer known for his soulful and romantic songs in Bollywood films and independent music."
    if(toggle==0){
        audio15.play();
        gif.classList.remove("hidden")
        img8.classList.remove("hidden")
        toggle=1
    }
    else{
        audio15.pause();
        gif.classList.add("hidden")
        img8.classList.add("hidden")
        toggle=0
    }
});
artist9.addEventListener('click', function() {
  
    played_song_img.src="./img/22.jpg"
    played_song_name.innerText="stay"
    played_song_artist.innerText="Justin Beiber"
    artist_name.innerText="Justin Beiber"
    artist_desc.innerText="Justin Bieber is a Canadian singer, songwriter, and music producer known for his pop and R&B music. He has sold millions of records worldwide and is one of the best-selling music artists of all time."
    if(toggle==0){
        audio22.play();
        gif.classList.remove("hidden")
        img9.classList.remove("hidden")
        toggle=1
    }
    else{
        audio22.pause();
        gif.classList.add("hidden")
        img9.classList.add("hidden")
        toggle=0
    }
});
artist10.addEventListener('click', function() {
    played_song_img.src="./img/8.jpg"
    played_song_name.innerText="Suna Hai"
    played_song_artist.innerText="Neha Kakkar"
    artist_name.innerText="Neha Kakkar"
    artist_desc.innerText="Neha Kakkar is an Indian singer known for her work in Bollywood films and independent music. She has a versatile voice and has sung in various languages such as Hindi, Punjabi, and Bengali."
    if(toggle==0){
        audio8.play();
        gif.classList.remove("hidden")
        img10.classList.remove("hidden")
        toggle=1
    }
    else{
        audio8.pause();
        gif.classList.add("hidden")
        img10.classList.add("hidden")
        toggle=0
    }
});



