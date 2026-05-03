import { useContext } from "react";
import BookContext from "../contexts/BookContext";

export default function useBookContext() {
  const contexts = useContext(BookContext);

  if (!contexts) {
    throw new Error("No BookContext Provider.");
  }

  return contexts;
}
