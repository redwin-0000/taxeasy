import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Animation=()=> {
  // const [text, setText] = useState("Ashutosh Singh")
  return (
   <>
   <div className="text-blue-700 text-[9px] md:text-2xl font-serif font-medium flex flex-col">
  <TypeAnimation
      sequence={[
        'Ab Business hua easy with...', 
        1000, 
        'TaxEasy !!!',
        2000, 
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block', color:'black' }}
    />
    </div>
   </>
  );
}

export default Animation;