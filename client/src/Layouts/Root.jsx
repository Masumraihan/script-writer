import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

const Root = () => {


    return (
        <div>
            <div className=" sticky top-0 z-50 w-full text-white">
                <div className="absolute top-0 w-full">
                    <Navbar />
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Root;