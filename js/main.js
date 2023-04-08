document.getElementById('mode-btn').addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('mode',document.body.classList)

});
if(localStorage.getItem('mode')!=''){
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById('mode-btn').checked=true;
}
let navigation=document.querySelector(".navigation")
let toggle=document.querySelector(".toggle")


toggle.onclick=function(){
    navigation.classList.toggle('navigation-active')
}

console.log(navigation.classList)
