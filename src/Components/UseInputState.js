import { useState } from "react";


const UseInputState = (defaultValue= null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange =e=>{
        setValue(e.target.value);
    }
    return [value, handleChange]
};

export default UseInputState;