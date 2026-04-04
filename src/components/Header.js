import Navigation from "./Navigation";
import Form from "./Form";

function Header({ handleSubmit }) {
  return (
    <>
      <h1>Movie Finder</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </>
  );
}

export default Header;
