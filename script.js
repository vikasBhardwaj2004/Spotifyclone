console.log("welcome to Spotify");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myprogressBar = document.getElementById('myprogressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))



let songs = [
    {songName: "lalkara", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tareefan", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "100 milions", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "mina mina", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Softly", filePath: "songs/5.mp3", coverPath: "covers/10.jpg"},
    {songName: "top class", filePath: "songs/6.mp3", coverPath: "covers/10.jpg"},
    {songName: "bachke-bachke", filePath: "songs/3.mp3", coverPath: "covers/10.jpg"},
    {songName: "take it easy", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "enough", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "its me", filePath: "songs/2.mp3", coverPath: "covers/10.jpg"},

]

songItems.forEach((element, i)=> {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});
// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
        
    }
})
//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeallplays = ()=>{;
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

    })
})
