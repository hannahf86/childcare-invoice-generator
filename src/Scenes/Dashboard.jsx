import React, { useState, useRef } from 'react';

// ICONS
import { HiPrinter, HiDownload } from 'react-icons/hi'

// LIBRARIES
// import { useReactToPrint } from 'react-to-print'


// REACT-ROUTER-DOM 
import { useLoaderData } from "react-router-dom";

// SCENES
import Intro from "./Intro";
import AddFamilyForm from "../Components/AddFamilyForm";
import AddChildForm from "../Components/AddChildForm";
import InvoiceSummary from "../Components/InvoiceSummary";

// TOAST
import { toast } from "react-toastify";

//  HELPERS
import { fetchData, familyName, addChild, waait, } from "../Utilities/Helpers";
import { useEffect } from "react";

// LOADERS
export function dashboardLoader() {
    const userName = fetchData("userName");
    const familyName = fetchData("familyName");
    const addChild = fetchData("addChild");
    return { userName, familyName, addChild }
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
    const [familyData, setFamilyData] = useState([]);

    // PRINTING FUNCTION
    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //     documentTitle: { familyName },
    //     onAfterPrint: () => alert("Printing successful!")
    // })

    // DOWNLOAD FUNCTION


    // Takes the raw data and makes it structured
    useEffect(() => {
        familyName?.length > 0 &&

            // Puts everything from familyName and only the children with the matching fmilyNameId
            setFamilyData(familyName.map(f => ({
                ...f,
                childrenArray: addChild?.filter(c => c.familyNameId === f.id) || []
            })))
    }, [familyName, addChild])

    return (
        <>
            {
                userName ? (
                    <div className="dashboard">
                        <h1>Welcome back, <span className="accent">{userName}</span></h1>

                        <div className="grid-sm">
                            {!familyData && (
                                <p>Add a family name below to get started.</p>
                            )}
                            <AddFamilyForm />
                        </div>

                        <div className="grid-sm">
                            {familyData?.map(f => (
                                <div className="grid-lg" key={f.id}>
                                    <div className="flex-lg">
                                        <AddChildForm familyName={familyName} />
                                    </div>

                                    <h2>Existing Invoices</h2>
                                    <div className="invoices" ref={componentRef}>
                                        {
                                            <InvoiceSummary familyName={f.familyName} childrenArray={f.childrenArray} />
                                        }
                                        {/* <div className='utils-btn'>
                                            <button onClick={handlePrint} className='btn'>
                                                <HiPrinter size={25} />
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div >
                ) : <Intro />
            }
        </>
    )
}
export default Dashboard