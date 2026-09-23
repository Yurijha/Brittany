const header=document.querySelector('.topbar');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
const name='Uriane Robinson',target=document.querySelector('#type-name');let i=0;target.textContent='';const type=()=>{if(i<name.length){target.textContent+=name[i++];setTimeout(type,75)}};setTimeout(type,450);
