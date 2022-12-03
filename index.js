function fetchApi(){
  let ftc = fetch("https://api.kanye.rest");
   try {
    ftc.then((res) => res.json())
    .then((data) => showDataFromApi(data));
   } catch (error) {
    console.log(error);
   }
}


function showDataFromApi(data){
  document.querySelector('.blockquote').innerHTML = data.quote;
}

setInterval(fetchApi, 2000);
