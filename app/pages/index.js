import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_HOME} from "../gql/Pages";
import Hero from "../components/Shared/Hero";

const Home = () => {
	
	const [home, setHome] = useState(null)
	const { data, loading, refetch } = useQuery(GET_HOME, {
		fetchPolicy: "no-cache"
	});
	
	
	useEffect(() => {
		if(data) {
			setHome(data.home.data.attributes)
		}
		
	}, [data])
	
	if(!home) return null
	return (
		<div id={"home"}>
			{home.hero && <Hero data={home.hero}/>}
		</div>
	)
}

export default Home
