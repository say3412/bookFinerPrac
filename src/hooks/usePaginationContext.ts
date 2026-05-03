import { useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";

export default function usePaginationContext() {
  const contexts = useContext(PaginationContext);

  if (!contexts) {
    throw new Error(" PaginationContext Propvider가 없습니다.");
  }

  return contexts;

}