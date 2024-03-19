import React, { Component, useState }  from 'react'; 

function App() {
  
  const [server,setServer] = useState()
   
  const url = '333' 
  
  fetch(url)
    .then((response) => { 
      return response.json();
    })
    .then((data) => {  
        setServer(data.created)
       console.log(data.created)
    })

  return (
    <div className="App"> 
       {server}
       <p>pra</p>
    </div>
  );
}

export default App;
