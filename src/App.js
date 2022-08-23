import './App.css';
import Events from './Components/Events';
import Hello from './Components/Hello';
import IncDec from './Components/IncDec';
import State from './Components/State';
import Form from './Components/Form';
import ListAndKey from './Components/ListAndKey';
import React, { useState } from 'react';
import Validation from './Components/Validation';
import FetchAPI from './Components/Api/FetchAPI';
import Toggle from './Components/Toggle';
import Mount from './Components/Lifecycle/Mount';
import Update from './Components/Lifecycle/Update';
import Unmount from './Components/Lifecycle/Unmount';
import Useref from './Components/Useref';
import Api_practice from './Components/Api/Api_practice';
import Project from './Components/Project';
import Newone from './Components/Newone';
import Tempalate from './Components/Tempalate';
import Context from './Components/ContextApi/Context';




function App() {

  const name1="Hello user"

    function getdata(a){
      alert(a)
      document.write(a)
    }



  return (
    <div className="App">
    {/* <Hello name="harshita"/> */}
    {/* <State data={name1} getitem={getdata}/> */}
    {/* <Events/> */}
    {/* <ListAndKey/> */}
    {/* <Form/> */}
    {/* <IncDec/> */}
    {/* <DateAndTime/> */}
    {/* <Mount name1="harshita"/> */}
    {/* <Update/> */}
    {/* <Unmount/> */}
    {/* <Validation/> */}
    {/* <FetchAPI/> */}
    {/* <Api_practice/> */}
    {/* <Toggle/> */}
    {/* <Useref/> */}
    {/* <Project/> */}
    {/* <Newone /> */}
    <Context/>
    {/* <Tempalate/> */}
    </div>
  );
}

export default App;


// function App() {
//   const onClickHandler = (e) => {
//     // e.preventDefault();
//     console.log(e);
//   }
 
//   return (
//     <div className="App">
//       {/* <button onMouseEnter={onClickHandler}> */}
//       <button onClick={onClickHandler}>
//         Click
//       </button>
      
//     </div>
//   );
// }

// export default App;
