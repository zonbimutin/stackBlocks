import Header2 from "./Header2";

const Global = ({children}) => {
	const header = {
		menu: {
			links: [
				{
					label: "Home",
					url: "/"
				},
				{
					label: "Game",
					url: "/game"
				},
				{
					label: "Scores",
					url: "/score"
				}
			]
		},
		logo: null
	}
	
	return (
		<div id={"page"} className={'active-dark'}>
			<Header2 header={header}/>
			{children}
		</div>
	)
}

export default Global