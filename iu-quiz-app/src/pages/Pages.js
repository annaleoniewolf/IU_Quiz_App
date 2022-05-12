import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"
import Einzelspieler from "./Einzelspieler"


const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/einzelspieler" element={<Einzelspieler />} />
        </Routes>
    )
}

export default Pages
