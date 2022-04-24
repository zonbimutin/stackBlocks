import { gql } from "@apollo/client";

// Mutations
export const SAVE_SCORE = gql`
mutation SaveScore ($input : ScoreInput!) {
  createScore(data : $input) {
    data {
        id
     }
  }
}
`;


// Queries
export const GET_SCORES = gql`
query Scores {
  scores(sort:"value:desc" pagination: { page: 1, pageSize: 10 }) {
    data {
      attributes {
        value
        createdAt
        user {
          data {
            attributes {
              username
            }
          }
        }
      }
    }
  }
}
`;

export const USER_SCORES = gql`
query Scores($filters : ScoreFiltersInput) {
  scores(filters: $filters pagination: {page: 1 pageSize: 10}) {
    data {
      attributes {
        value
        createdAt
        user {
          data {
            attributes {
              username
            }
          }
        }
      }
    }
  }
}
`;