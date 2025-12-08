import { useParams } from "react-router";

export default function About() {
    const { '*': splat } = useParams();
    console.log(splat);

    return (
        <h2>About Page</h2>
    );
}
