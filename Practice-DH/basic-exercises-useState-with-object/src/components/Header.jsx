
export function Header({counter}){
    return(
        <div className="container">
        <h1 id="title">Exercises Helsinki</h1>
        <h2>{counter===0?<span className="badge text-bg-warning">Please press the Plus or Minus buttons to start the counter</span>:<span className="badge text-bg-warning">Counter: {counter} </span>}</h2>
        </div>
    )
}