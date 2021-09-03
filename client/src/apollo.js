import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
  // resolvers는 백엔드또는 API에서 resolve하는 역활을 클라이언트에서 수행할 수 있게 해준다
  // 클라이언트에서 정의한 resolve는 클라이언트에서 Query를 요청할 수 있다.
});

export default client;
