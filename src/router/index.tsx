
import {
    createBrowserRouter
} from 'react-router-dom'
import Test from "@/pages/Test/Test.tsx";
import Root from "@/pages/Root/Root.tsx";

const router:any = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>
        },
        {
            path:'/test',
            element:<Test/>
        }
    ]
)

export default router

