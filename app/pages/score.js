import {useMutation} from "@apollo/client";
import useAuth from "../hooks/useAuth";
import {SAVE_SCORE} from "../gql/Score";
import UserScore from "../components/Score/UserScore"

const Score = () => {
	
	// GraphQL mutation
	const [createScore] = useMutation(SAVE_SCORE);
	
	// Hook useAuth
	const { auth } = useAuth();

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
			<button onClick={() => saveScore(10)}>Save</button>
			{auth && <UserScore auth={auth}/>}
		</div>
	)
}

export default Score

