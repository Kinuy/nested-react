import ComponentD from "./ComponentD.tsx";
import {useContext} from "react";
import {UserContext} from "./ComponentA.tsx";

export default function ComponentC() {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
};