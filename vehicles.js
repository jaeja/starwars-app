let getData = ()=>{
    fetch('https://swapi.co/api/vehicles/')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
        let result='';
      data.results.forEach((user)=>{
        const {name , crew, passengers, films, vehicles} = user;
        result+=
        `<div class="card"> 
        <h5>Username : ${name}</h5>
       <ul class="container">
       <li> Name : ${name}</li>
       <li > Crew : ${crew} </li>
       <li> Passengers : <a>${passengers}</a> </li>
       <li> films : ${films} </li>
       </ul>
        </div>`;
        document.getElementById('cards'). innerHTML = result;
        
  
      })
    })
  }
  
  window.onload=getData;