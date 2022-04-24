import {gql} from "@apollo/client";

// Queries
export const GET_HOME = gql`
query Home {
 home {
    data {
      id
      attributes {
        hero {
          ... on ComponentSharedHero {
            background {
              data {
                attributes {
                  url
                }
              }
            }
            text {
              ... on ComponentSharedText {
                label
                title
                text
                buttons {
                  ... on ComponentSharedButton {
                    style
                    link {
                      ... on ComponentSharedLink {
                        url
                        label
                        target
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;