let getData = ()=>{
    fetch('https://swapi.co/api/films/')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
        let result='';
      data.results.forEach((user)=>{
        const {title , producer, director, character, vehicles} = user;
        result+=
        `<div class="card"> 
        <h5>Username : ${name}</h5>
       <ul class="container">
       <li> Title : ${title}</li>
       <li > Producer : ${producer} </li>
       <li> Director : <a>${director}</a> </li>
       <li> Full Name : ${character}</li>
       <li> Vehicles : <a>${vehicles}</a> </li>
       </ul>
        </div>`;
        document.getElementById('cards'). innerHTML = result;
        
  
      })
    })
  }
  
  window.onload=getData;