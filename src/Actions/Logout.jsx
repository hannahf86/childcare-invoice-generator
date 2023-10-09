//  REACT-ROUTER-DOM
import { redirect } from "react-router-dom";

// HELPERS
import { deleteItem } from "../Utilities/Helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName"
    })

    toast.success("You've deleted your user info")

    // return redirect
    return redirect("/")
}