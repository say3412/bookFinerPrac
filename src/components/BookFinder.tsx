import BookArea from "./BookArea";
import Header from "./Header";
import SearchArea from "./SearchArea";
import BookContext from "../contexts/BookContext";
import SearchContext from "../contexts/SearchContext";
import PaginationContext from "../contexts/PaginationContext";
import useBookSearch from "../hooks/useBookSearch";

export default function BookFinderPrac() {
  const { bookCon, search, pagination } = useBookSearch();

  return (
    <BookContext.Provider value={bookCon}>
      <Header />
      <SearchContext.Provider value={search}>
        <PaginationContext.Provider value={pagination}>
          <SearchArea />
          <BookArea />
        </PaginationContext.Provider>
      </SearchContext.Provider>
    </BookContext.Provider>
  );
}
