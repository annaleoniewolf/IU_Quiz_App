import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"
import Einzelspieler from "./Einzelspieler"
import Login from "./Login"


const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/einzelspieler" element={<Einzelspieler />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Pages
