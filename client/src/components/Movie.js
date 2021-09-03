import styled from "styled-components";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

// 클라이언트에서 Query를 작성하는것과 비슷하다 첫번째 줄(mutation likeMovie($id: Int!))은 Apollo를 위한 줄
// 쿼리문 뒤에 @client를 붙여 이 mutation이 백엔드가 아닌 클라이언트에 작성되어있다는것을 알려줘야 한다.

const Container = styled.div`
  height: 550px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, bg, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });

  // useMutation을 이용해 변형을 이용할 수 있다.

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? "UnLike" : "Like"}</button>
    </Container>
  );
};

export default Movie;
