let input=document.querySelector('input')
let btn=document.querySelector('button')
let text=document.querySelector('p')
let again=document.querySelector('#again')

num=Math.random()*100
num = Math.round(num)
console.log(num)

btn.addEventListener('click', function(){
  let result = parseInt(input.value)
  if (result == num){
    text.textContent='Верно!'
  }
  else if (result > num){
    text.textContent ='Меньше'
  }
  else{
    text.textContent ="Больше"
  }
})
 again.addEventListener('click', function(){
   num=Math.random()*100
  num = Math.round(num)
  input.value = ""
  text.textContent =""
  console.log(num)
 })