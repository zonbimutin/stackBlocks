import useAuth from "../hooks/useAuth";
import {useMutation} from "@apollo/client";
import {SAVE_SCORE} from "../gql/Score";
import StackBlocks from "../components/Game/StackBlocks";
import {useEffect, useState} from "react";
import Button from "../components/Shared/Button";


export default function Game() {
    
    const {auth} = useAuth()
    const [user, setUser] = useState(auth)
    const [score, setScore] = useState(0)
    
    // GraphQL mutation
    const [createScore] = useMutation(SAVE_SCORE);
    
    const saveScore = async () => {
        if(user) {
            try {
                const { data } = await createScore({
                    variables: {
                        input: {
                            value: score,
                            user: auth.id
                        }
                    }
                });
                
                console.log(data)
                
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    useEffect(() => {
        console.log('scoreeee')
        saveScore()
    }, [score])
    
    useEffect(() => {
        setUser(auth)
        console.log(auth)
    }, [auth])
    
    const style = {
        backgroundImage: `url("/bg-game.jpg")`
    }

	return (
        <div id={"game"} className={"fix"}>
            <div className="slider-wrapper">
                <div className="slide fullscreen slider-paralax slider-style-3 bg_image p-0" style={style}>
                    <StackBlocks auth={auth} saveScore={(value) => setScore(value)}/>
                </div>
            </div>
        </div>
    )
}
