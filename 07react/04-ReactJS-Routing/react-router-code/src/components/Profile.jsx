export default function Profile({
    user,
}) {
    return (
        <>
            <h2>Profile</h2>

            <strong>{user?.username}</strong>
        </>
    );
}
