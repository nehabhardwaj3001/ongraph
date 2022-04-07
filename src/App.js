import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const bestMatches = []
  const [term, setTerm] = useState('');
  const [info, setInfo] = useState({ bestMatches: [] });

const handleSubmit = () => {
  axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=0SL0DBPBVUIXHD42`)
      .then(res => {
        setInfo(res.data);
        console.log(res.data);
      }
      )
}

return (
  <div classname='container'>
      <input type='text' placeholder="IBM" onChange={(e) => setTerm(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
   
      <div  className='data-box'> 
          <h3>please search any term</h3>
          {info.bestMatches.map((infos, index) => (
                    <div className="box" key={index}>
                        <div className="name" ><b>Symbol:</b> {infos["1. symbol"]}</div>
                            <div><b>Name:</b> {infos["2. name"]}</div>
                        <div><b>Type: </b>{infos["3. type"]}</div>
                        <div><b>Region: </b>{infos["4. region"]}</div>
                        <div><b>Market Open: </b>{infos["5. marketOpen"]}</div>
                        <div><b>Market Close: </b>{infos["6. marketClose"]}</div>
                        <div><b>Timezone: </b>{infos["7. timezone"]}</div>
                        <div><b>Currency: </b>{infos["8. currency"]}</div>
                        <div><b>MatchScore: </b>{infos["9. matchScore"]}</div>
                       
                    </div>
                    
                ))}
          
  </div></div>
)
}


export default App



