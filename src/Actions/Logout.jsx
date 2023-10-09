//  REACT-ROUTER-DOM
import { redirect } from "react-router-dom";

// HELPERS
import { deleteItem } from "../Utilities/Helpers";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName"
    })
    // return redirect
    return redirect("/")
}