num.innerHTML=parseInt(0)
minus.addEventListener('click',()=>{
    num.innerHTML=parseInt(num.innerHTML) -1   
})
plus.addEventListener('click',()=>{
    num.innerHTML=parseInt(num.innerHTML) +1
})
Add_button.addEventListener('click',()=>{

    deafault_num.innerHTML=num.innerHTML
})

image_korzinka.addEventListener('click',()=>{
const korzina=document.createElement('div')
const p=document.createElement('div')
const natija=document.createElement('h1')
header.appendChild(korzina)
korzina.className='header'
korzina.style.cssText='width: 20%; background-color: rgb(222, 210, 210);z-index: 1000; position:absolute; top:0px; right:0px;'
korzina.appendChild(p)
p.innerHTML='Korzina'
p.style.cssText='font-size:30px; text-align:center; color:rgb(255, 125, 26); border-bottom: 2px solid black;'
korzina.appendChild(narx)
korzina.appendChild(natija)
natija.innerHTML=+narx.innerHTML * + num.innerHTML
console.log(+narx.innerHTML*+num.innerHTML)



})
