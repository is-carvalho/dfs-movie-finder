import Container from "./Container";

function Search({ searchTerm }) {
  return (
    <div>
      <h2>{searchTerm} Movie</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
}

export default Search;
