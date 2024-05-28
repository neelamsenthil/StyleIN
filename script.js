const menubar = document.querySelector(".menu");
const sidebar = document.querySelector(".side-bar");
const x = document.querySelector(".x");
menubar.addEventListener('click',()=>{
    sidebar.style.left = '0'
})

x.addEventListener('click',()=>{
    sidebar.style.left = '-40%'


})



const productbox = document.getElementById("product-box")
const searchbox = document.getElementById("search")
const product = productbox.querySelectorAll("div")
const para = productbox.querySelectorAll("p")
// console.log(para)
let inputvalue = ""

searchbox.addEventListener("keyup",()=>{
    inputvalue = searchbox.value.toUpperCase()
    for(let i=0;i<para.length;i++){
        if(para[i].textContent.toUpperCase().indexOf(inputvalue)<0){
            product[i].style.display = "none"
        }
        else{
            product[i].style.display = "block"
        }
    

    }


})



const overlay = document.getElementById("overlay")
const image = document.querySelectorAll(".image")

image.forEach((img)=>{
    img.addEventListener('click',()=>{
        overlay.classList.add("active")
        const photos = document.createElement("img")
        photos.src = img.src
        photos.id="photos"
        while(overlay.firstChild){
            overlay.removeChild(overlay.firstChild)
        }
        overlay.append(photos)
    })

})

overlay.addEventListener('click',()=>{
    overlay.classList.remove("active")
})



