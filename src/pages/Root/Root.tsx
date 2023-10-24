import {useState}from "react";
import {Link} from 'react-router-dom'
import {Button} from "antd";

function Root() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button type="primary" onClick={() => setCount(count + 1)}>+1</Button>
             <Link to="/Test">Test</Link>
        </div>
    )

}

export  default Root;