import { useEffect, useState } from "react";
import { getMovie } from "./api";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Banner = styled.div`
  height: 80px;
  background-color: lightgray;
`;

const Container = styled.section`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

const Con = styled.div``;

const Bg = styled.img`
  width: 100%;
`;

export const Home = () => {
  const [movieData, setMovieData] = useState();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await getMovie(1);
        setMovieData(result.results);
        // =>영화 데이터 배열값 저장

        setResultData(result);
        // => 요청값 저장
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //   console.log("영화데이터" + movieData);
  //   console.log("데이터" + resultData);

  const fetchData = async () => {
    try {
      let page = (resultData.page += 1);
      if (resultData.page <= resultData.total_pages) {
        const { results } = await getMovie(page);
        setMovieData(movieData.concat(results));
        console.log(movieData);
        // =>스크롤 추가가 된다.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Banner />
      {movieData && (
        <Container>
          <InfiniteScroll
            dataLength={movieData.length}
            next={fetchData}
            hasMore={true}
          >
            <div>
              {movieData.map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`} state={{ title: data.title }}>
                    <Bg
                      src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    />
                    <h3>{data.title}</h3>
                  </Link>
                </Con>
              ))}
            </div>
          </InfiniteScroll>
        </Container>
      )}
    </div>
  );
};
