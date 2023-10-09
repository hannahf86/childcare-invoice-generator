import { Link, useNavigate, useRouteError } from "react-router-dom"

// ASSETS
import { HiHome, HiArrowSmLeft } from 'react-icons/hi'

const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <h1>Uh oh! There's been a problem!</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn--dark" onClick={() => navigate(-1)}>
                    <HiArrowSmLeft width={20} />
                    <span>Go Back</span>
                </button>

                <Link to='/' className="btn btn--dark" >
                    <HiHome width={20} />
                    <span>Go home</span>
                </Link>
            </div>
        </div>
    )
}
export default Error