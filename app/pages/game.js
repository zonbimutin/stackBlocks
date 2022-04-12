import { useEffect, useImperativeHandle, useState } from 'react';
import UserInterface from '../objects/UserInterface';
import { Gameplay } from '../objects/Gameplay';
import Observer, { EVENTS } from '../Observer';

import styles from '../styles/Home.module.css'
export default function Home() {
    const [userInterface, setUserInterface] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (!userInterface) {
            let inter = new UserInterface();
            setUserInterface(inter);

            let game = new Gameplay(document.querySelector('#game-container'));
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
		<div className={styles.container} onClick={click}>
            <div id="points" className="animate__animated noselect">0</div>
            <div id="button-start" className="animate__animated noselect">
                <div>StackBlocks</div>
                <button onClick={start}>Start</button>
            </div>
            <div id="gameover" className="animate__animated noselect">
                Game Over
            </div>

            <div id="game-container"></div>
		</div>
	)
}
