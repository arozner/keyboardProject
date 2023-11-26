
import React, { useState, useRef } from "react";

export const Screen = ({ my_Screen }) => {
    const [colors, setColors] = useState([{ color: "", startIndex: 0 }]); // Track colors and their start indices
    const [backgroundColor, setBackgroundColor] = useState("");
    const sclas = useRef();

    const update_color = (x) => {
        const newColor = { color: x, startIndex: my_Screen.length };
        setColors([...colors, newColor]);
        setBackgroundColor(""); // Reset background color when changing text color
    };

    const update_color2 = (x) => {
        setBackgroundColor(x);
    };

    const renderStyledText = () => {
        const styledText = colors.map((colorObj, index) => {
            const endIndex = index + 1 < colors.length ? colors[index + 1].startIndex : undefined;
            const coloredText = my_Screen.slice(colorObj.startIndex, endIndex);
            return (
                <span key={index} style={{ color: colorObj.color, backgroundColor }}>
                    {coloredText}
                </span>
            );
        });
        return styledText;
    };

    return (
        <>
            <pre className="screen">
                {renderStyledText()}
            </pre>

            <select className="screen2" onClick={(e) => update_color(e.target.value)}>
                <option value="" disabled selected>
                    בחר צבע טקסט
                </option>
                <option value="blue">כחול</option>
                <option value="yellow">צהוב</option>    
                <option value="orange">כתום</option>
                <option value="red">אדום</option>
            </select>
        </>
    );
};







export default Screen;

