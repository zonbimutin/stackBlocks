import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {getToken} from "./utils/token";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_API_URI,
});

const authLink = setContext((_, { headers }) => {
	const token = getToken();

	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// connectToDevTools: true,
	ssrMode: typeof window === "undefined",
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink)
});

export default client;