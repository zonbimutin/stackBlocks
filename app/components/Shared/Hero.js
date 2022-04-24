import {useEffect} from "react";
import Button from "./Button";

const Hero = ({data}) => {
	
	const {text, background } = data
	
	const style = {
		backgroundImage: `url("${background.data.attributes.url}")`
	}
	
	
	return (
		<div id={"home"} className={"fix"}>
			<div className="slider-wrapper">
				<div className="slide fullscreen slider-paralax slider-style-3 bg_image" style={style}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className={`inner`}>
									{text.label && <span className={"font-700 theme-gradient"}>{text.label}</span>}
									{text.title && <h1 className="title" style={{width: "100%"}}>{text.title}</h1>}
									{text.text && <div className={"description"}>{text.text}</div>}
									{text.buttons &&
										<div>
											{text.buttons.map((button, index) => {
												return <Button key={index} data={button}/>
											})}
										</div>
									}
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero