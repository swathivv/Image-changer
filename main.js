let light=document.getElementById('bulb');
light.addEventListener('click',function(light){
    light.target.classList.toggle('bulb-on')
})