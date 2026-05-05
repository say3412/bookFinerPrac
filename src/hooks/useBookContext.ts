import { useContext } from "react";
import BookContext from "../contexts/BookContext";


export default function useBookContext() {
    const context = useContext(BookContext)

    if (!context) {
        throw new Error('BookContext Provider is null.');
    }

    return context;
}