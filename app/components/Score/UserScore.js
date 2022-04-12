import {useQuery} from "@apollo/client";
import {USER_SCORES} from "../../gql/Score";
import {useEffect, useState} from "react";

const UserScore = ({auth}) => {
	
	const [scores, setScores] = useState([])
	
	const { data, loading, refetch } = useQuery(USER_SCORES, {
		filters: {
			user: {
				id: {
					eq: auth.id
				}
			}
		}
	});
	
	useEffect(()=>{
		if(data) {
			console.log(data)
		}
	}, [data])
	
	return <div>hello</div>
}

export default UserScore