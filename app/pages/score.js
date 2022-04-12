import {useMutation} from "@apollo/client";
import {LOGIN} from "../gql/User";
import useAuth from "../hooks/useAuth";
import {SAVE_SCORE} from "../gql/Score";

const Score = () => {
	
	// GraphQL mutation
	const [createScore] = useMutation(SAVE_SCORE);
	
	// Hook useAuth
	const { auth, setUser } = useAuth();
	
	console.log(auth)
	
	const saveScore = async (value) => {
		try {
			const { data } = await createScore({
				variables: {
					input: {
						value,
						user: auth.id
					}
				}
			});
			
			console.log(data)
			
		} catch (error) {
			console.log(error)
		}
	}
	
	return (
		<div>
			<button onClick={() => saveScore(5)}>Save</button>
		</div>
	)
}

export default Score