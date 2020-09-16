import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query{
  repositories{
    pageInfo {
      totalCount
    }
      edges{
        node{
          id
            ownerName
          name
          createdAt
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
          authorizedUserHasReviewed
        }
      }
  }
}
`;
