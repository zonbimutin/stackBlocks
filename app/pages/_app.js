import AuthProvider from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

import '../styles/globals.css'
import '../styles/animate.min.css'
const MyApp = ({ Component, pageProps }) => {

	const {user} = useAuth()
	console.log(user)

	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp
