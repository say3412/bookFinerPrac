import BookArea from "./BookArea";
import Header from "./Header";
import SearchArea from "./SearchArea";
import BookContext from "../contexts/BookContext";
import SearchContext from "../contexts/SearchContext";
import PaginationContext from "../contexts/PaginationContext";
import useBookSearch from "../hooks/useBookSearch";

export default function BookFinderPrac() {
  const { search, pagination, bookCon } = useBookSearch();

  return (
    <SearchContext.Provider value={search}>
      <BookContext.Provider value={bookCon}>
        <Header />
        <PaginationContext.Provider value={pagination}>
          <SearchArea />
          <BookArea />
        </PaginationContext.Provider>
      </BookContext.Provider>
    </SearchContext.Provider>
  );
}
