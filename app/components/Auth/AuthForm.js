import {useState} from 'react';
// Components
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {Button} from "react-bootstrap";

const AuthForm = (props) => {

    const [showLogin , setShowLogin] = useState(true);

    return (
        <div className="auth">
            <div className="form-container">
            { showLogin ? (
                <LoginForm />
            ) : (
                <RegisterForm setShowLogin={ setShowLogin }/>
            ) 
            }
            </div>

            <div className="change-form">
                <p>
                    { showLogin ? (
                        <>
                            Vous n'avez pas de compte ?
                            <span className={'link-primary theme-gradient ms-2'} style={{cursor: "pointer"}} onClick={() => setShowLogin(!showLogin)} variant="link">S'enregistrer!</span>
                        </>

                    ) : (
                        <>
                            Vous avez déjà un compte?
                            <span className={'link-primary theme-gradient ms-2'} style={{cursor: "pointer"}} onClick={() => setShowLogin(!showLogin)} variant="link">Se connecter!</span>
                        </>
                    ) }
                </p>
            </div>
        </div>
    )
}

export default AuthForm;
