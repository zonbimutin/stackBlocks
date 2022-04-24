import {useQuery} from "@apollo/client";
import {USER_SCORES} from "../../gql/Score";
import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

const UserScore = ({auth}) => {
	
	const [scores, setScores] = useState([])
	
	const { data, loading, refetch } = useQuery(USER_SCORES, {
		filters: {
			user: {
				id: {
					eq: auth.id
				}
			}
		},
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
						<th>Date</th>
						<th>Score</th>
					</tr>
					</thead>
					<tbody>
					{scores.map((score, index) => {
						const {value, createdAt} = score.attributes
						const date = new Date(createdAt)
						return (
							<tr key={index}>
								<td>{index + 1}</td>
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

export default UserScore