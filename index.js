'use-strict';
let user_tem = document.querySelector('.layer');
let user_name = document.querySelector('#h3');

function user_api(){
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => user_data(data));

}
user_api();

function user_data(data){
 user_name.innerHTML = data.quote;
}

setInterval(user_api, 1500);
