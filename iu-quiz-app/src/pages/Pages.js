import { Route, Routes } from "react-router-dom"

import Dashboard from "./Dashboard"
import Duell from "./Duell"
import Einzelspieler from "./Einzelspieler"
import Login from "./Login"
import Profil from "./Profil"
import Fragenkatalog from "./Fragenkatalog"
import Datenschutz from "./Datenschutz"
import Freunde from "./Freunde"
import Impressum from "./Impressum"
import Chat from "./Chat"


const Pages = () => {
 
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fragenkatalog" element={<Fragenkatalog />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/freunde" element={<Freunde />} />
            <Route path="/einzelspieler" element={<Einzelspieler />} />
            <Route path="/duell" element={<Duell />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
        </Routes>
    )
}

export default Pages
