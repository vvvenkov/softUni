import { Link, Outlet } from "react-router";

export default function Admin() {
    return (
        <>
            <nav>
                <Link to=".">Dashboard</Link>
                <Link to="users">Users</Link>
                <Link to="posts">Posts</Link>
            </nav>

            <h1>Admin</h1>

            <Outlet />

            <footer>End of admin</footer>
        </>
    );
}
