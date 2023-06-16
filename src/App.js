import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { motion } from "framer-motion";

import Item from "./Item";
import Time from "./Time";
import GameOver from "./GameOver";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const dataa = [1,2,3,4,5,6,7,8]
let scores = 0 
let highscores = 0

function App() {

  const [key,setKey] = useState(Math.floor(Math.random() * 8) + 1)
  const [bool,setBool] = useState(true)
  
  const redValue = Math.round(Math.random()*200);
  const greenValue = Math.round(Math.random()*200);
  const blueValue = Math.round(Math.random()*200);

  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  const handleClick = (data)=>{
      if(data===key){
        scores=scores+10
        setKey(Math.floor(Math.random() * 8) + 1)
      }
      else {
        setBool(false)
      }
  }

  const handleReset = ()=>{
    highscores = Math.max(highscores,scores) 
    scores = 0
    setBool(true)
  }


  useEffect(()=>{
    if(bool){
      const timeOut = setTimeout(()=>{
        setBool(false)
      },60000)

      return () =>{
        clearTimeout(timeOut)
      }
    }
  },[bool])

  

  return (
    <div className="App" >
      <div className="row px-5">
        <h1 className="col-5">Scores : {scores}</h1>
        <h1 className="col-5 text-danger">High Scores: {highscores}</h1>
      </div>
      {bool && (
        <div className="row">
          <div className="row px-5 col-12">
            <h2 className="col-2"> <FontAwesomeIcon icon={faHourglassHalf} />  Time:</h2> 
            <h2 className="col-1"><Time /> </h2>
            {/* <div className="col-2 rounded" style={{border:"1px solid black"}}>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{ duration: 60 }}
                style={{ width: "60px", height: "100%", background: "red"}}
              />
            </div>    */}
          </div>
          <div className="row col-9 m-auto">
                {
                dataa.map((data) =>
                  <div onClick={() => handleClick(data)} key={data} className="col-3 mb-4">
                    <Item color={color} index={data} key={data} pkey={key} />
                  </div>
                )
              }
          </div>
      </div>)}
      {!bool && 
          <GameOver handleReset={handleReset} />
      }
    </div>
  );
}

export default App;
