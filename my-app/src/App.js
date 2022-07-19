import React, {useEffect, useState} from "react"
const Search = (props) => {
  return (<div>
    <h1>{props.search}</h1>
    <input style={{width: '300px', height:'80px'}}
    value={props.search}
    onChange={(event)=>props.setSearch(event.target.value, event)}></input>
  </div>)
}
const App = () => {
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
setTimeout(()=> {
  setLoading(false)
}, 3000)
  }, [])

   return (
    <div>
    {loading ? <h1>Loading</h1>:<Loading search={search} setSearch={setSearch} counter={counter} setCounter={setCounter}/>}
    </div>
  )
}
const Counter = (props) => {
  return (<div>
      <h1>{props.counter}</h1>
      <button style={{height:"50px", width:"70px"}}onClick={()=> props.setCounter(props.counter + 1)}>Change counter</button>
      </div>
  )
}
const Loading = (props) => {
  return (<div style={{display:"flex", justifyContent: "center", height:"100vh", alignItems:"center"}}>
    <Search search={props.search} setSearch={props.setSearch} />
    <Counter counter={props.counter} setCounter={props.setCounter} />
    </div>)}
export default App;