var addBtn = document.querySelector('#addbtn');
var removeBtn = document.querySelector('#removebtn');
var boxPanel = document.querySelector('.box');

addBtn.addEventListener('click',function(){
  boxPanel.classList.add('active');
});


removeBtn.addEventListener('click',function(){
  boxPanel.classList.remove('active');
});