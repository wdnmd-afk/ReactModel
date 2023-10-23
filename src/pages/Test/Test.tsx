import {useState} from "react";

function Test() {
    const [count, setCount] = useState(0);

    return (
        <div>
           Hello World! {count}
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )

}

export  default Test;