import AuthContext from "./AuthContext";
import {useEffect, useMemo, useState} from "react";
import {decodeToken, getToken, removeToken} from "../utils/token";

const AuthProvider = ({children}) => {

	const [auth, setAuth] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		token ? setUser(token) : setAuth(null)

	}, []);

	const logout = () => {
		removeToken();
		setAuth(null);
	};

	const setUser = (userToken) => {
		setAuth(decodeToken(userToken));
	};

	const authData = useMemo(() => ({
		auth,
		logout,
		setUser,
	}), [auth]);

	return (
		<AuthContext.Provider value={authData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider