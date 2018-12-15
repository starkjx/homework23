var addBtn = document.querySelector('#addbtn');
var removeBtn = document.querySelector('#removebtn');
var toggle1Btn =document.querySelector('#toggle1');
var toggle2Btn =document.querySelector('#toggle2');
var boxPanel = document.querySelector('.box');

addBtn.addEventListener('click',function(){
  boxPanel.classList.add('active');
});


removeBtn.addEventListener('click',function(){
  boxPanel.classList.remove('active');
});

toggle1Btn.addEventListener('click',function(){
  if(boxPanel.classList.contains('active')){
    boxPanel.classList.remove('active');
  }else{
    boxPanel.classList.add('active');
  }
});

toggle2Btn.addEventListener('click',function(){
  boxPanel.classList.toggle('active');
});