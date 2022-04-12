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