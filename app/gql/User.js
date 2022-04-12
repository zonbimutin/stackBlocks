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

// Queries
export const LOGIN = gql`
	mutation Login($input: UsersPermissionsLoginInput!) {
	  login(input: $input) {
		jwt
	  }
	}
`;

export const VALIDATE_TOKEN = gql`
  query validateToken ($token: TokenInput) {
    validateToken(token: $token){
      token
    }
  }
`