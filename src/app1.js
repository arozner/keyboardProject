
import React, { useState, useRef } from "react";


import {Keyboard} from "./project_Keyboard/keyboard"
import {Screen,Color} from "./project_Keyboard/screen"
import logo from './logo.svg';
import './App.css';



function App() {

const[text1,setext1]=useState(``);
const [consecutiveSpaces, setConsecutiveSpaces] = useState(0);




const update = (x) => {
  if (x === "רווח" || x === "profit") {
    if (text1.length > 0) {
      const spaces = ` `.repeat(consecutiveSpaces + 1);
      console.log(spaces.length);
      setext1((prevText) => prevText + spaces);
      console.log(text1.length);
      setConsecutiveSpaces((prevSpaces) => prevSpaces + 1);
      console.log(consecutiveSpaces);
      
    }
  } else if (x === "מחק" || x === "Delete") {
    setext1((prevText) => prevText.slice(0, -1));
    setConsecutiveSpaces(0);
  } else if (x === "מחק הכל" || x === "Delete_all") {
    setext1("");
    setConsecutiveSpaces(0);
  } else {
    setext1((prevText) => prevText + x);
    setConsecutiveSpaces(0);
  }
};


return (
      
  <div>
  <Screen my_Screen={text1}        />
  <Keyboard   my_keyboard={update}           />
  


 </div>
);
}

export default App;


