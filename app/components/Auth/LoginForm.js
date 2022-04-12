import { useState } from 'react'
// GraphQL
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/user";
// Token manage
import { setToken } from "../../utils/token";
// Hooks
import useAuth from "../../hooks/useAuth";
// Form Validation
import { useFormik } from "formik";
import * as Yup from "yup";

// Toast 
import { toast } from "react-toastify";
import {Button, Form} from "react-bootstrap";


function initialValues() {
    return {
        identifier: "",
        password: "",
    };
}

const LoginForm = (props) => {

    // Hook Form error state
    const [error, setError] = useState('');
    
    // GraphQL mutation
    const [login] = useMutation(LOGIN);
    
    // Hook useAuth
    const { auth, setUser } = useAuth();
    
    // Hook Formik
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            identifier: Yup.string()
                .email("El email no es valido")
                .required("El email es obligatorio"),
            password: Yup.string()
                .required("El password es obligatorio"),
        }),
        onSubmit: async (formData) => {
            
            setError('');

            try {
                const logUser = formData;
                console.log(logUser)

                const { data } = await login({
                    variables: {
                        input: logUser
                    }
                });

                // Get Token
                const { jwt } = data.login;
                // Save Token in localStorage
                setToken(jwt);
                // Set User in AuthContext
                setUser(jwt);
                // Toast Success message
                toast.success('User Loged');
                //Close modal if existe
                if(props.closeModal) {
                    props.closeModal(false);
                }

            } catch (error) {
                setError(error.message);
                console.log(error);
            }
        },
    });

    console.log(auth);

    return (
        <>
            <div className="form-title">Se connecter!</div>
            <Form className="login-form parki form-group" onSubmit={formik.handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Email"
                    name="identifier"
                    value={formik.values.identifier}
                    onChange={formik.handleChange}
                    error={formik.errors.identifier && true}
                />
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password && true}
                />

                <Button type="submit" className="parki btn btn-gradient-primary btn-lg ">Se connecter!</Button>
                {error && <p className="submit-error">{error}</p>}
            </Form>
        </>     
    )
}

export default LoginForm;
