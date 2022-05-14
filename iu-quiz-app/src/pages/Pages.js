import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"
import Duell from "./Duell"
import Einzelspieler from "./Einzelspieler"
import Login from "./Login"


const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/einzelspieler" element={<Einzelspieler />} />
            <Route path="/login" element={<Login />} />
            <Route path="/duell" element={<Duell />} />
        </Routes>
    )
}

export default Pages
