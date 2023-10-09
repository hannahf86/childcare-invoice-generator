// REACT-ROUTER-ROM 
import { useLoaderData } from "react-router-dom";

// SCENES
import Intro from "./Intro";
import AddHoursForm from "../Components/AddHoursForm";

// TOAST
import { toast } from "react-toastify";

//  HELPERS
import { fetchData, createInvoice } from "../Utilities/Helpers"

// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    const invoices = fetchData("invoices");
    return { userName, invoices }
}

// ACTIONS
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data)

    // new user submission
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (e) {
            throw new Error("There was a problem creating your account.")
        }
    }

    if (_action === "createInvoice") {
        try {
            createInvoice({
                name: values.name,
                hours: values.hoursPerWeek,
                funding: values.funding,
            })
            return toast.success("Weekly hours added!")
        } catch (e) {
            throw new Error("There was a problem creating your invoice.")
        }
    }
}

const Dashboard = () => {
    const { userName, invoices } = useLoaderData()

    return (
        <>
            {
                userName ? (
                    <div className="dashboard">
                        <h1>Welcome back, <span className="accent">{userName}</span></h1>
                        <div className="gird-sm">
                            {/* {invoices ? (): ()} */}
                        </div>

                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddHoursForm />
                            </div>
                        </div>
                    </div>
                ) : <Intro />
            }
        </>
    )
}
export default Dashboard