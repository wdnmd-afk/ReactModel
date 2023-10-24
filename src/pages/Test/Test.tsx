import {useState} from "react";
import style from '&/Test.module.scss'
function Test() {
    const [count, setCount] = useState(0);

    return (
        <div className={style.box}>
           Hello World! {count}
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )

}

export  default Test;