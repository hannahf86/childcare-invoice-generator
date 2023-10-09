// REACT-ROUTER-ROM 
import { useLoaderData } from "react-router-dom";

// SCENES
import Intro from "./Intro";

// TOAST
import { toast } from "react-toastify";

//  HELPERS
import { fetchData } from "../Utilities/Helpers"

// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

// ACTIONS
export async function dashboardAction({ request }) {
    const data = await request.formData();
    try {
        const formData = Object.fromEntries(data);
        localStorage.setItem('userName', JSON.stringify(formData.userName));
        return toast.success(`Welcome, ${formData.userName}!`)
    } catch (e) {
        throw new Error("There was a problem creating your account")
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <>
            {
                userName ? (
                    <p>{userName}</p>
                ) : <Intro />
            }
        </>
    )
}
export default Dashboard