import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_SCORES} from "../../gql/Score";
import {Table} from "react-bootstrap";

const PlayersScore = () => {
	const [scores, setScores] = useState([])
	
	const { data, loading, refetch } = useQuery(GET_SCORES, {
		fetchPolicy: "no-cache"
	});
	
	useEffect(()=>{
		if(data) {
			if(data.scores.data) setScores(data.scores.data)
		}
	}, [data])
	
	return (
		<div className={'p-4'}>
			{scores
				?
				<Table >
					<thead>
						<tr>
							<th>#</th>
							<th>Username</th>
							<th>Date</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{scores.map((score, index) => {
							const {value, user, createdAt} = score.attributes
							const date = new Date(createdAt)
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{user.data.attributes.username}</td>
									<td>{date.toLocaleDateString()}</td>
									<td>{value}</td>
								</tr>
							)
						})}
						
					</tbody>
				</Table>
				:
				<h2>No Scores</h2>
			}
		</div>
	)
}

export default PlayersScore