const Button = ({data}) => {
	const {style, link} = data
	
	return (
		<>
			{data &&
				<a
					href={`${link.url}`}
					className={`btn btn-${style} btn-hover-white`}
					target={link.target}
					rel={link.target && 'noopener noreferrer'}
				>
					{link.label}
				</a>
			}
		</>
	)
}

export default Button