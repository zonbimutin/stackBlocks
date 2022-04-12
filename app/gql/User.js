import { gql } from "@apollo/client";

// Mutations
export const REGISTER = gql`
	mutation Register($input: UsersPermissionsRegisterInput!) {
	  register(input: $input) {
		jwt
		user {
		  username
		  email
		}
	  }
	}
`;

export const LOGIN = gql`
	mutation Login($input: UsersPermissionsLoginInput!) {
	  login(input: $input) {
		jwt
	  }
	}
`;


// Queries
export const VALIDATE_TOKEN = gql`
  query validateToken ($token: TokenInput) {
    validateToken(token: $token){
      token
    }
  }
`