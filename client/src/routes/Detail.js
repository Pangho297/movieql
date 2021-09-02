import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_full
    }
  }
`;

// 첫번째 줄(query getMovie($id: Int))은 Apollo를 위한 줄, 변수의 type을 검사하도록 돕는다
// 나머지는 실제 query를 서버로 전송한다

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 65px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { id },
  });

  // 쿼리에 변수가 들어가게 된다면 useQuery()의 두번째 인자로 변수를 할당해주면 된다.
  // 위의 예제처럼 variables: { args }와 같이 넣으면 된다.

  if (loading) {
    return "Loading...";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};

export default Detail;
