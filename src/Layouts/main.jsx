// REACT-ROUTER-ROM 
import { Outlet, useLoaderData } from "react-router-dom";

//  HELPERS
import { fetchData } from "../Utilities/Helpers"

// COMPONENTS
import Nav from '../Components/Nav'

// ASSETS
import kids from '../Assets/bottom.png'

// LOADERS
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

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