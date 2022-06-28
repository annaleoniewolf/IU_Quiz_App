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
import { useContext } from 'react'
import { AuthContext } from "../context/authContext"
import PageNotFound from "../components/blocks/PageNotFound"

const Pages = () => {
    //Auth token
    const { token } = useContext(AuthContext)
    return (
        <Routes>
            <Route path="/" element={token ? <Dashboard /> : <PageNotFound />} />
            <Route path="/fragenkatalog" element={token ? <Fragenkatalog /> : <PageNotFound />} />
            <Route path="/datenschutz" element={<Datenschutz />}/>
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/chat" element={token ? <Chat /> : <PageNotFound />} />
            <Route path="/freunde" element={token ? <Freunde /> : <PageNotFound />} />
            <Route path="/einzelspieler" element={token ? <Einzelspieler /> : <PageNotFound />} />
            <Route path="/duell" element={token ? <Duell /> : <PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={token ? <Profil /> : <PageNotFound />} />
        </Routes>
    )
}

export default Pages
