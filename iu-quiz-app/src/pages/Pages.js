import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"


const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}

export default Pages
