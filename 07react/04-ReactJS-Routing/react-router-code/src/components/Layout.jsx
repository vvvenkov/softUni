import { Outlet } from "react-router";

export default function Layout() {
    return (
        <section style={{backgroundColor: 'blue'}}>
            <h3>Layout</h3>
            
            <Outlet />
        </section>
    );
}
