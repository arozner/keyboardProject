import React, { useState } from "react";

export const Keyboard=({my_keyboard})=>{

      
  const [language, setLanguage] = useState("hebrew");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const keys = {
    hebrew: [
       "1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"א",
"ב",
"ג",
"ד",
"ה",
"ו",
"ז",
"ח",
"ט",
"י",
"כ",
"ך",
"ל",
"מ",
"ם",
"נ",
"ן",
"ס",
"ע",
"פ",
"ף",
"צ",
"ץ",
"ק",
"ר",
"ש",
"ת",
"רווח",
"מחק",
"מחק הכל"
     
    ],
    english: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "profit",
      "Delete",
      "Delete_all",
    
    ],
  };

  const renderKeys = (language) => {
    return (<div id="board">
     { keys[language].map((key) => (
        <button key={key} onClick={()=>my_keyboard(key)} className="keyboard-key">{key}</button>
      ))}
      </div>
    );
    
  };

  return (
    <div>
<div>
{ }


</div>

      <select onChange={handleLanguageChange} value={language}>
        <option value="hebrew">עברית</option>
        <option value="english">אנגלית</option>
      </select><br></br>
      {renderKeys(language)}
    </div>
  );

} 



