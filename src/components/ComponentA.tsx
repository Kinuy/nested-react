import ComponentB from "./ComponentB.tsx";
import {createContext, useState} from "react";

export const UserContext = createContext()

export default function ComponentA() {

    const [user, setUser] = useState("Icke")

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>

        </div>
    );
};