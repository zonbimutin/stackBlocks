import useAuth from "../hooks/useAuth";
import {getFirestore} from "firebase/firestore"

import styles from '../styles/Home.module.css'
export default function Home() {

	const {user, login, logout, register} = useAuth()

	const data = {
		username: 'falarcon12',
		email: 'test12@gamil.com',
		password: 'test1234'
	}

	return (
		<div className={styles.container}>
			{user &&
				<h4>{`${user.uid}`}</h4>
			}
			<button onClick={() => login(data.email, data.password)}>Login</button>
			<button onClick={() => logout() }>Logout</button>
			<button onClick={() => register(data) }>Register</button>
		</div>
	)
}
