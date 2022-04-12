import {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"


import AuthProvider from "../context/AuthProvider";
import client from "../apollo-client";

import '../styles/globals.css'
import '../styles/animate.min.css'
import {ApolloProvider} from "@apollo/client";
import {ToastContainer} from "react-toastify";
import Global from "../components/Global/Global";

const MyApp = ({ Component, pageProps }) => {

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<Global>
					<Component {...pageProps} />
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
