
import UserInterface from "../../objects/UserInterface";
import {Gameplay} from "../../objects/Gameplay";
import Observer, {EVENTS} from "../../Observer";
import {Button} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";

const StackBlocks = ({saveScore}) => {
	
	const [userInterface, setUserInterface] = useState(null);
	const [game, setGame] = useState(null);
	const [isStarted, setIsStarted] = useState(false);
	
	const gameContainer = useRef(null)
	
	const handleSaveScore = (value) => {
		saveScore(value)
	}
	
	
	useEffect(() => {
		if (!userInterface) {
			let inter = new UserInterface();
			setUserInterface(inter);
			
			let game = new Gameplay(gameContainer.current, handleSaveScore);
		}
		
	}, [])
	
	useEffect(() => {
		if (userInterface) {
			events();
		}
	}, [userInterface])
	
	
	const events = () => {
		Observer.emit(EVENTS.NEW_GAME);
	}
	
	const start = () => {
		setIsStarted(true);
		Observer.emit(EVENTS.START);
	}
	
	const click = () => {
		if(!isStarted) return;
		Observer.emit(EVENTS.CLICK);
	}
	
	return (
		<div className={"StackBlocks inner p-0"} onClick={click}>
			<div id="points" className="animate__animated noselect font-700">0</div>
			<div id="button-start" className="animate__animated noselect">
				<h1 className={'title m-auto'}>Stack Blocks</h1>
				<Button className={'btn btn-default btn-hover-white fs-2'} onClick={start}>Start Game</Button>
			</div>
			<div id="gameover" className="animate__animated noselect">
				<h1 className={'title m-auto'}>Game Over</h1>
				<Button className={'btn btn-default btn-hover-white fs-2'}>Restart</Button>
			</div>
			<div ref={gameContainer} id="game-container"></div>
		</div>
	)
}

export default StackBlocks