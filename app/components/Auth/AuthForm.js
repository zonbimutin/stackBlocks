import {useState} from 'react';
// Components
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

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
                            <span onClick={() => setShowLogin(!showLogin)} >S'enregistrer!</span>
                        </>

                    ) : (
                        <>
                            Vous avez déjà un compte?
                            <span onClick={() => setShowLogin(!showLogin)} >Se connecter!</span>
                        </>
                    ) }
                </p>
            </div>
        </div>
    )
}

export default AuthForm;
