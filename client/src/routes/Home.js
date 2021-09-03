import styled from "styled-components";
import { gql, useQuery } from "@apollo/react-hooks";

import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      description_full
      medium_cover_image
      isLiked @client
    }
  }
`;

// 여기서 isLiked는 클라이언트에서 정의한 reslovers이다

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  margin: 25px 0px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo Movie App</Title>
        <Subtitle>With GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((item) => (
          <Movie
            key={item.id}
            id={item.id}
            isLiked={item.isLiked}
            bg={item.medium_cover_image}
          />
        ))}
      </Movies>
    </Container>
  );
};

export default Home;
