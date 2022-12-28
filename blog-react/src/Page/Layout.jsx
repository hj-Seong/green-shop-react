import { Outlet } from "react-router-dom";
import PageLink from "../components/PageLink";

const Layout = () => {
    return ( 
        <div>
            <PageLink />
            <Outlet/>
        </div>
     );
}
 
export default Layout;