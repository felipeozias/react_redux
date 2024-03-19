import { useEffect } from "react"
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom"

import Form from "../views/Form"
import Home from "../views/Home"

function Root() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/form")
    }, [navigate])

    return <></>
}

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Form />,
        },
        {
            path: "/form",
            element: <Form />,
        },
        {
            path: "/home",
            element: <Home />,
        },
    ])

    return <>
        <RouterProvider router={router} />
    </>
}
