import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    // resolvers는 백엔드 또는 API에서 resolve하는 역활을 클라이언트에서 수행할 수 있게 해준다
    // 클라이언트에서 정의한 resolve는 클라이언트에서 Query를 요청할 수 있다.
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true,
            medium_cover_image: "",
          },
        });
      },
    },
    // 변형(Mutation)을 이용하는 방법은 백엔드에서 이용하는 방법과 유사하다
    // 첫번째 인자인 경로는 _를 이용해 무시하고 두번째는 인자는 변형을 일으킬 대상의 인자을 입력한다
    // 세번째 인자는 context로 cache를 준다
  },
});

export default client;
