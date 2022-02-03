import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { InputGroup } from '../components/inputGroup'
import { SubmitButton } from '../components/submitButton'

import { setLocalStorageItem } from '../utils/localStorage'
import api, { addXsrfToken } from '../utils/api'
import axios from 'axios'

export const Login = () => {

    //Mes states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null)
        setFieldError(null)
        setIsLoading(false)

        console.log('handleSubmit triggered');

        //Logic du call d'API à faire pour la partie LOGIN

        const body = {
            email,
            password
        }

        try {
            const result = await api.post('/auth/login', body);

            if (result.status === 200) {
                console.log(result.data);
                setLocalStorageItem(result.data.xsrfToken, 'xsrf')
                addXsrfToken(result.data.xsrfToken)
                setRedirect(true)
            }
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    const handleGitHubAuth = () => {
        const apiCall = axios.get(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&redirect_uri=http://localhost:1234/inscription`)
    }

    return (
        <div>
            <h1>Login</h1>
            <p style={{ color: "red" }}>{error && error}</p>
            {isLoading && <p>Loading...</p>}
            <form onSubmit={handleSubmit}>
                <InputGroup handleChange={setEmail} isValid={fieldError !== "email"} label="Email" type="email" required />
                <InputGroup handleChange={setPassword} isValid={fieldError !== "password"} label="Password" type="password" required={true} minLength="1" maxLength="15" />
                <SubmitButton name="Se connecter" />
            </form>
            <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&scope=read:user,user:email&redirect_uri=http://localhost:1234/inscription?oauth`}>Se connecter avec Github</a>
        </div>
    )
}