let background_img = ['video/EP03.mp4','video/ingame.mp4','video/1.mp4','video/2.mp4','video/3.mp4','video/noCRT.mp4','video/4.mp4']
let current = 0
function movingArrow(move){
    if(move == 'rightArrow'){
        current = (current+1) % background_img.length
    }
    else if(move == 'leftArrow'){
        current = (current-1 + background_img.length) % background_img.length
    }
    document.getElementById('myVideo').classList.add('blur')
    setTimeout(()=>{
        const antiCache = '?t=' + new Date().getTime();
        document.getElementById('myVideo').src = background_img[current]+antiCache;
        document.getElementById('myVideo').load();    
        document.getElementById('myVideo').play();
        if(document.getElementById('blur').checked){
            document.getElementById('blur').checked = true
        }
        else{
            document.getElementById('myVideo').classList.remove('blur');
        }
    },500)
}
document.getElementById('rightArrow').addEventListener('click',e=>(movingArrow('rightArrow')))
document.getElementById('leftArrow').addEventListener('click',e=>(movingArrow('leftArrow')))
document.addEventListener('keydown',e=>{
    if(e.key == 'ArrowRight'){
        movingArrow('rightArrow')
    }
    else if(e.key == 'ArrowLeft'){
        movingArrow('leftArrow')
    }

})
