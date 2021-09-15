import React, { useState } from 'react'

const App = () => {
  const [person, setperson] = useState({fullname:"Chatti Aymen",bio:"Ahssen wehed",source:"https://i.pinimg.com/736x/11/29/cc/1129ccf3bf4a7b46de2d68e37d95dc87.jpg", profession:"student"})
  const [show, setshow] = useState(false)
  const[timer, setTimer] = useState(1);
  setInterval(() => {
    setTimer(timer + 1)
  }, 10000)
  const handleClick =()=> {
  setshow(!show)
  }
  return(
    <div className="home">
      <button onClick ={handleClick}> lalé : {timer} </button>
      {show ? (
        <ul className="appel">
          <div>
            <li>
              {" "}
              <h1> fullName: {person.fullname} </h1>
            </li>
            <li>
              {" "}
              <h2> bio: {person.bio} </h2>{" "}
            </li>
            <li>
              {" "}
              <h3> profession:{person.profession} </h3>
            </li>
            <img src={person.source} alt={person.fullfame} />
          </div>
        </ul>
      ) : null}
    </div>
  );
};
export default App;