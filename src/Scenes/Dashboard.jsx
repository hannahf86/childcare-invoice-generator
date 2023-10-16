// REACT-ROUTER-DOM 
import { useLoaderData } from "react-router-dom";

// SCENES
import Intro from "./Intro";
import AddChildForm from "../Components/AddChildForm";
import FamilyCard from "../Components/FamilyCard";

// TOAST
import { toast } from "react-toastify";

//  HELPERS
import { fetchData, createInvoice, waait, } from "../Utilities/Helpers";
import AddFamilyForm from "../Components/AddFamilyForm";


// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    const invoices = fetchData("invoices");
    const newChild = fetchData("newChild");
    return { userName, invoices, newChild }
}

// ACTIONS

// add button delay
export async function dashboardAction({ request }) {
    await waait()

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

    // new invoice submission
    if (_action === "createInvoice") {
        try {
            createInvoice({
                name: values.name,
                childName: values.childName,
                hours: values.hoursPerWeek,
                funding: values.funding,
                totalAmount: values.totalAmount,
            })
            return toast.success("Family name added")
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
                        <div className="grid-sm">
                            {
                                invoices && invoices.length > 0
                                    ? (
                                        < div className="grid-lg">

                                            <div className="flex-lg">
                                                <AddChildForm />
                                            </div>

                                            {/* EXISTING CHILDREN */}
                                            <h2>Current Invoice Info</h2>
                                            <div className="budgets">
                                                {
                                                    invoices.map((invoice) => (
                                                        <FamilyCard key={invoice.id} invoice={invoice} />
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    ) : (
                                        <div className="grid-sm">
                                            <p>Add a Family Name below to get started.</p>
                                            <AddChildForm />
                                        </div>
                                    )
                            }
                        </div>
                    </div >
                ) : <Intro />
            }
        </>
    )
}
export default Dashboard