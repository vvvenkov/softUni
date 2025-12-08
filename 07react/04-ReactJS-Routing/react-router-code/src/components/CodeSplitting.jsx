
import { lazy, Suspense } from "react";

// import("../util/calcUtil.js")
//     .then(calc => console.log(calc.sum(5, 10)));
const SeparateBundle = lazy(() => import('./SeparateBundle'));

export default function CodeSplitting() {
    return (
        <>
            <h2>Code Splitting</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <SeparateBundle />
            </Suspense>
        </>
    );
}
