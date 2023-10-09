// REACT-ROUTER-ROM 
import { Outlet, useLoaderData } from "react-router-dom";

//  HELPERS
import { fetchData } from "../Utilities/Helpers"

// LOADERS
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

// COMPONENTS
import Nav from '../Components/Nav'

// ASSETS
import kids from '../Assets/bottom.png'



const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className="layout">
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={kids} height={100} />
        </div>
    )
}
export default Main