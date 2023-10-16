// REACT-ROUTER-DOM 
import { useLoaderData } from "react-router-dom";

// SCENES
import Intro from "./Intro";
import AddFamilyForm from "../Components/AddFamilyForm";
import AddChildForm from "../Components/AddChildForm";
import ChildSummary from "../Components/ChildSummary";
// import Table from "../Components/Table";

// TOAST
import { toast } from "react-toastify";

//  HELPERS
import { fetchData, familyName, addChild, waait, } from "../Utilities/Helpers";

// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    const familyName = fetchData("familyName");
    return { userName, familyName }
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

    // new family added
    if (_action === "familyName") {
        try {
            familyName({
                familyName: values.familyName,
            })
            return toast.success("Family name added")
        } catch (e) {
            throw new Error("There was a problem creating your invoice.")
        }
    }

    // add child
    if (_action === "addChild") {
        try {
            addChild({
                name: values.addChild,
                childsAge: values.childsAge,
                hoursPerWeek: values.hoursPerWeek,
                funding: values.funding,
                familyNameId: values.selectedFamily
            })
            return toast.success("New child added!")
        } catch (e) {
            throw new Error("There was a problem creating your invoice.")
        }
    }
}

const Dashboard = () => {
    const { userName, familyName, addChild } = useLoaderData()

    return (
        <>
            {
                userName ? (
                    <div className="dashboard">
                        <h1>Welcome back, <span className="accent">{userName}</span></h1>

                        <div className="grid-sm">
                            {
                                familyName && familyName.length > 0
                                    ? (
                                        < div className="grid-lg">
                                            <div className="flex-lg">
                                                <AddFamilyForm />
                                                <AddChildForm familyName={familyName} />
                                            </div>
                                            <h2>Existing Invoices</h2>
                                            <div className="budgets">
                                                {
                                                    familyName.map((family) => (
                                                        <ChildSummary key={family.id} family={family} />
                                                    ))
                                                }
                                            </div>
                                        </div>


                                    ) : (
                                        <div className="grid-sm">
                                            <p>Add a family name below to get started.</p>
                                            <AddFamilyForm />
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