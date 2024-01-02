import { Outlet } from "react-router-dom";
import HeaderDs from "../../components/HeaderDs";

export default function HomeMain() {
    return (
        <div className="home-main-container">
            <HeaderDs />
            <Outlet />
        </div>
    );
}
