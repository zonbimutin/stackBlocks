import Header from "./Header";

const Global = ({children}) => {
	
	return (
		<>
			<Header/>
			{children}
		</>
	)
}

export default Global