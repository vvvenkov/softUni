import { useParams, useSearchParams, useLocation } from "react-router";

export default function City() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    console.log(params);
    console.log(searchParams.getAll('orderBy'));
    console.log(location);
    
    // setTimeout(() => {
    //     setSearchParams({page: 1})
    // }, 2000)

    return (
        <>
            <h2>City Page</h2>

            <p>The name of the city is: {params.city}</p>
        </>
    );
}
