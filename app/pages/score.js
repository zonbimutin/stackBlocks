import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useAuth from "../hooks/useAuth";
import UserScore from "../components/Score/UserScore"
import PlayersScore from "../components/Score/PlayersScore";


const Score = () => {
	
	// Hook useAuth
	const { auth } = useAuth();
	
	const style = {
		backgroundImage: `url("/bg-game.jpg")`
	}
	
	return (
		<div id={"scores"} className={"fix"}>
			<div className="slider-wrapper">
				<div className="slide fullscreen slider-paralax slider-style-3 bg_image " style={style}>
					<div className="container h-100">
						<div className={`inner h-100 p-0`}>
							<h1>Scoreboard</h1>
							<div className={'card h-100 overflow-hidden p-4'} style={{borderRadius: '3rem'}}>
								<Tabs className={`h-100`}>
									<TabList className={`tab-style--1 justify-content-center`}>
										<Tab className={'ms-4 me-4'}>TOP 10 PLAYERS SCORES</Tab>
										{auth && <Tab className={'ms-4 me-4'}>MY TOP 10 SCORES </Tab>}
									</TabList>
									<div className={`h-100 overflow-auto`}>
										<TabPanel>
											<PlayersScore/>
										</TabPanel>
										{auth &&
											<TabPanel>
												<UserScore auth={auth}/>
											</TabPanel>
										}
										
									</div>
								</Tabs>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Score

