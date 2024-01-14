import React, { useEffect } from "react";
import { useState } from "react";
const Task = ({ title, descr, deletetask,index}) => {
  return (
    <div className="task">
      <div className="para">
        <div className="paras">
        <p  className="list" id="title">{title}</p>
        <p className="list"> {descr}</p>
        </div>
        <button className="del"
        onClick={()=>{
          deletetask(index)
        }}> Delete </button>
      </div>
    </div>
  );
};
const Home = () => {
  const arr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks, settasks] = useState(arr);
  const [title, settitle] = useState("");
  const [descr, setdescr] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    settasks([...tasks,{title,descr}]);
    settitle("")
    setdescr("")
  };
  const deletetask=(index)=>{
    const filteredarr=tasks.filter((val,i)=>{
      return i!==index;
    });
    settasks(filteredarr);
  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  return (
    <div className="cont" onSubmit={submithandler}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="main">
      <div className="left">
        <h2 className="lefty">SET !!!!!</h2>
      <h2 className="lefty">YOUR---</h2>
      <h2 className="lefty">GOALS..</h2></div>
      <form action="">
        <div className="box">
        <div className="input-group">
        <input
          type="text" className="input" id="task" required autocomplete="off"
          value={title}
          onChange={(e) => 
            settitle(e.target.value)}
        />
        <label className="label" for="task">TITLE</label>
            <br />
            <div className="dgp">
            <input type="text" className="descrip" id="descr" required autocomplete="off"
           value={descr}
           onChange={(e) => 
             setdescr(e.target.value)
           }
        />
        <label className="labels" for="descrip">DESCRIPTION</label>
            </div>  
        </div>
        </div>
      
        <button type="submit" className="add">ADD</button>
      </form>
      <div className="ball"><img id="ball" src="https://media.sketchfab.com/models/92ae212f348a4459b493a8b88635c850/thumbnails/1e9dfefe101f48179fc29248af78312d/3247344a94244e6da217a505da80603b.jpeg" alt="" /></div>
      </div>
      
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} descr={item.descr}
         deletetask={deletetask} index={index}/> //map needs unique key everytime so took index
      ))}
    </div>
  );
};

export default Home;
