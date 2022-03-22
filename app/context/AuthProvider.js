import AuthContext from "./AuthContext";
import app from "../utils/firebase";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"
import {getAuth, onAuthStateChanged, deleteUser, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {useEffect, useMemo, useState} from "react";

const auth = getAuth(app)

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if(user){
				setUser(user)
			} else {
				setUser(null)
			}
		})

		return unsubscribe

	}, []);

	const register = async (data) => {
		try {
			const {username, email, password} = data
			const db = await getFirestore()

			// Verify username
			const docRef = doc(db, "usernames", username);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) throw new Error('username en uso')

			// Create Auth
			await createUserWithEmailAndPassword(auth, email, password)

			//Create User Document
			await setDoc(doc(db, "usernames", username), {
				uid: auth.currentUser.uid,
			});

		} catch (error) {
			if(error.code === "auth/email-already-in-use"){
				console.log(error.code)
			} else {
				console.log(error)
			}
		}
	}


	const login = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log(error)
		}
	}

	const logout = async () => {
		try {
			await signOut(auth)
		} catch (error) {
			console.log(error)
		}
	}

	const userData = useMemo(() => ({
		user,
		login,
		logout,
		register
	}), [user]);

	return (
		<AuthContext.Provider value={userData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider