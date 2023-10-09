// REACT-ROUTER-ROM 
import { useLoaderData } from "react-router-dom";

//  HELPERS
import { fetchData } from "../Utilities/Helpers"

// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div>
            <h3>Dashboard</h3>
        </div>
    )
}
export default Dashboard