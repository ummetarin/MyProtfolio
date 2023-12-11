

import { Outlet } from "react-router-dom";
import Footer from "../Nav/Footer";
import Nav from "../Nav/Nav";


const Mainlayout = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Mainlayout;