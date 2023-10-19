// import React, {useState, useEffect} from "react"; 

// const App = () => {
//    const [gold, setGold] = useState(0);
//    const [silver, setSilver] = useState(0);
//    const [bronze, setBronze] = useState(0);


//    useEffect(()=>{
//     document.title = `Gold: ${gold} | Silver: ${silver}`;
//     console.log("use State got rendered")
//    }, []

//    )

   

//     return(
//         <div>

//             <h1>Gold: {gold} | Silver: {silver} | Bronze: {bronze}</h1>
//             <button onClick={() => setGold(gold + 1)}>Gold</button>
           
//             <button onClick={() => setSilver(silver + 1)}>Silver</button>
          
//             <button onClick={() => setBronze(bronze + 1)}>Bronze</button>


//         </div>
//     )
// }

// export default App;
// ---------------------------------
import React from "react";
import LiveSearch from "./Components/LiveSearch";


const App = () => {

    return(
        <div>
            <LiveSearch/>
        </div>
    )
}

export default App;