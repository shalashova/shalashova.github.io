
let elem1 =document.querySelector('#elem1')
let elem2 =document.querySelector('#elem2')
let elem3 =document.querySelector('#elem3')
let elem4 =document.querySelector('#elem4')
let elem5 =document.querySelector('#elem5')

elem1.addEventListener('click', func)
elem2.addEventListener('click', func)
elem3.addEventListener('click', func)
elem4.addEventListener('click', func)
elem5.addEventListener('click', func)
function func() {
	alert('message');
}

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('mouseout', function(){
   alert('mouseover');
})

let btn3=document.querySelector('#btn3')
let text3 = document.querySelector('#text3')
let problem3 =document.querySelector('.problem3')
btn3.addEventListener('click', function(){
    alert(text3.textContent)
    text3.textContent = 'Ha-ha-ha!'
})
text3.addEventListener('click', function(){
    problem3.classList.add('open')
})


let btn4=document.querySelector('#btn4')
let text4 = document.querySelector('#text4')
let problem4 = document.querySelector('.problem4')
btn4.addEventListener('click', function(){
    alert(text4.innerHTML)
})
text4.addEventListener('click', function(){
    problem4.classList.add('open')
})

let btn5=document.querySelector('#btn5')
let text5 = document.querySelector('#text5')
let ref5 = document.querySelector('.ref5')
let problem5 = document.querySelector('.problem5')

btn5.addEventListener('click', function(){
    text5.textContent = ref5.href
})
text5.addEventListener('click', function(){
    problem5.classList.add('open')
})

let input6 = document.querySelector('#input6')
let btn6 = document.querySelector('#btn6')
let text6=document.querySelector('#text6')
let problem6 = document.querySelector('.problem6')
btn6.addEventListener('click', function(){
    alert(input6.value)
})
text6.addEventListener('click', function(){
    problem6.classList.add('open')
})