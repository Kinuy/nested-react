import ComponentC from "./ComponentC.tsx";

export default function ComponentB() {
    return (
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    );
};