import { useState } from 'react'
// GraphQL
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/User";
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
            }
        },
    });

    return (
        <>
            <h2 className="form-title mb-3 theme-gradient">Se connecter!</h2>
            <Form className="login-form parki form-group" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="identifier"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.identifier && true}
                        // error={formik.errors.identifier && true}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.password && true}
                        // error={formik.errors.password && true}
                    />
                </Form.Group>

                <Button type="submit" className="btn btn-default mb-3">Se connecter!</Button>
                {error && <p className="text-danger">{error}</p>}
            </Form>
        </>     
    )
}

export default LoginForm;
