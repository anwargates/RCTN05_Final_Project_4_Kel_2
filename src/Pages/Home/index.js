import React, { useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Carde from "../../components/Cards/Card";
import { searchMovies } from "../../features/slice/movieSlice";
const Home = () => {
  const movieState = useSelector((state) => state?.movies);
  const dispatch = useDispatch();

  // pencarian default ketika webpage dibuka
  useEffect(() => {
    dispatch(
      searchMovies({
        page: 1,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fungsi ganti page previous
  const handlePrevious = async () => {
    await dispatch(
      searchMovies({
        search: movieState.currentSearch,
        page: movieState.currentPageNumber - 1,
      })
    );
  };

  // fungsi ganti page next
  const handleNext = async () => {
    await dispatch(
      searchMovies({
        search: movieState.currentSearch,
        page: movieState.currentPageNumber + 1,
      })
    );
  };

  // fungsi handle informasi pada title
  const handleTitle = () => {
    // console.log('ERROR MESSAGE', movieState.errorMessage)
    // console.log('currentSearch', movieState.currentSearch)
    if (movieState.errorMessage) {
      return movieState.errorMessage;
    } else if (movieState.currentSearch) {
      return `Search results for ${movieState.currentSearch}`;
    } else {
      return "Show your favorite movies";
    }
  };

  return (
    <>
      {/* {console.log('movieState', movieState)} */}
      <Container className="px-4 home">
        <Row className="py-4">
          <h1>{handleTitle()}</h1>
        </Row>
        <Row className="d-flex justify-content-around gap-5">
          {movieState.isPending ? (
            <Spinner style={{ width: 200, height: 200 }} animation="border" />
          ) : (
            movieState?.item?.map((item) => (
              <Carde key={item.imdbID} item={item} />
            ))
          )}
        </Row>
        {(movieState.errorMessage === undefined || movieState.isSuccess) && (
          <Row className="next d-flex justify-content-end mt-4 gap-2">
            <Button
              disabled={movieState.currentPageNumber === 1 ? true : false}
              style={{
                width: 100,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              onClick={handlePrevious}
            >
              <FaArrowLeft />
              Prev
            </Button>
            <div
              style={{
                width: 50,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {movieState.currentPageNumber}
            </div>
            <Button
              disabled={
                movieState.currentPageNumber === movieState.totalPage
                  ? true
                  : false
              }
              style={{
                width: 100,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              onClick={handleNext}
            >
              Next
              <FaArrowRight />
            </Button>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
