import { useState } from "react";

function Stepper() {
    const [count, setCount] = useState(0);
    return (<p>{count}</p>);
}

export default Stepper;