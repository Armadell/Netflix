
import './App.css';
import { useState } from 'react'
function App() {
  let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let day = daylist[new Date().getDay()]
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  var i=toDo.length

  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) =>  setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {console.log(toDo)}
        
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
     
        {
          
          toDos.map((data) => {
            if(data.text!=''){
            return (<div className="todo">
              <div className="left">
               
                <input onClick={(e) => {
                
                  setToDos(toDos.filter(getdata => {
                    if (getdata.id === data.id) {
                      getdata.status = e.target.checked
                    }else{
                      getdata.status=false
                    }
                    return getdata
                  }))
                }} value={data.status} type="checkbox" name="" id="" />
                <p>{data.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => {
                  //delecting todo
                  setToDos(toDos.filter((list) => {
                    if(list.status===true){
                       list.status=false
                    }

                    return list.id !== data.id
                  }))

                }} className="fas fa-times"></i>
              </div>
              
            </div>)
            }
          })
        }
        <h1>Completed Task</h1>
        {toDos.map((data) => {
          if (data.status) {
            return (<h1>
              {data.text}
            </h1>)
          }
          return null

        })}
      </div>
    </div>

  );
}

export default App;
