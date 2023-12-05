const menu = document.querySelector(".navlinks");
const menuBtn = document.querySelector(".ckbox");

menuBtn.onclick = ()=>{
    menu.classList.toggle("active");
    }


// menuBtn.addEventListener('change',function(){
//     if(this.checked){
//         menu.classList.add("active");
//     } else {
//         menu.classList.add("unactive");
//     }
// })