import { useContext } from "react";
import { globalContext } from "../store/GlobalProvider";



export function globalStore() {
    let store = useContext(globalContext)
    return store
}