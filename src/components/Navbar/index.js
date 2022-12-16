import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import Logo from "../../assets/logo.png";
import { searchMovies } from "../../features/slice/movieSlice";

const NavbarNav = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // function untuk handle search
  const handleSearch = () => {
    if (search === "") {
      alert("Search input tidak boleh kosong");
    } else {
      dispatch(searchMovies({ search }));
      setSearch("");
    }
  };

  // handle eksekusi search ketika enter ditekan
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    } else {
      setSearch(event.target.value);
    }
  };

  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand href="/about" className="text-white">
          <img src={Logo} alt="gambar" width={80} />
          <span className="navhead">Hacktiv8 Kelompok 2</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              // type='search'
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleKeyDown}
              onKeyDown={handleKeyDown}
            />
            <Button variant="dark" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNav;
