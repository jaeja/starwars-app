

let getData = ()=>{
  fetch('https://swapi.co/api/people/')
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
      let result='';
    data.results.forEach((user)=>{
      const {name , films, vehicles} = user;
      result+=
      `<div class="card"> 
      <h5>Username : ${name}</h5>
     <ul class="container">
     <li> User Full Name : ${name}</li>
     <li id="films"> User Films : ${films} </li>
     <li> User Vehicles : <a>${vehicles}</a> </li>
     </ul>
      </div>`;
      document.getElementById('cards'). innerHTML = result;
      

    })
  })
}

window.onload=getData;