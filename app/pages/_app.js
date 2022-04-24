import {useEffect} from "react";

import AuthProvider from "../context/AuthProvider";

import client from "../apollo-client";

import {ApolloProvider} from "@apollo/client";
import {ToastContainer} from "react-toastify";

import Global from "../components/Global/Global";

import '../scss/style.scss'

const MyApp = ({ Component, pageProps }) => {

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	
	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<Global>
					<Component {...pageProps } />
				</Global>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</AuthProvider>
		</ApolloProvider>
	)
}

export default MyApp
