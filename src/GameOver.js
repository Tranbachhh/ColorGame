function GameOver({handleReset}){
    return (
        <div className="row justify-content-center">
          <img src="https://petxinh.weebly.com/uploads/1/3/1/7/131737961/6e42a05041329f8571063dedb368f21b_orig.gif" className="col-4 one-time-animation" alt="gameover"></img>
          <h1 className="d-flex justify-content-center align-items-center text-warning col-12">GameOver</h1>
          <button className="text-warning btn btn-primary col-2 reset" onClick={handleReset}>Reset</button> 
        </div>
    )
}

export default GameOver