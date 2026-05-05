import { useContext } from "react";
import PaginationContext from "../contexts/PaginationContext";

export default function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error("PaginationContext Provider is null.");
  }

  return context;
}
