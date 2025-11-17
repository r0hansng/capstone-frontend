import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout