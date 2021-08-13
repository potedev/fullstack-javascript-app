import React, { useEffect, useState } from "react";

//Route && Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthRoute } from './components/authRoute'

import { Login } from './pages/login'
import { Register } from './pages/register'
import { Posts } from './pages/posts'
import { Layout } from "./components/layout";

import { getLocalStorageItem } from "./utils/localStorage";

const App = () => {
    //State title
    const [title, setTitle] = useState('Hello CPROM');
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    //UseEffect qui se trigger quand le composant est monté
    useEffect(() => {
        console.log('USEEFFECT -> App has been mounted')
        const user = getLocalStorageItem('user');
        console.log('user in store ?', user)
    }, [])

    //UseEffect qui se trigger quand le composant s'update
    //UseEffect se trigger quand la variable du state counter change
    useEffect(() => {
        console.log('USEEFFECT -> App has been updated : Counter')
    }, [counter])

    //UseEffect qui se trigger quand le composant s'update
    //UseEffect se trigger quand la variable du state isLoading change
    useEffect(() => {
        console.log('USEEFFECT -> App has been updated : IsLoading')
    }, [isLoading])

    const handleClick = (e) => {

        if (counter === 5) setIsLoading(false)

        console.log(e.target);
        setTitle('Nouveau titre')
        setCounter(counter + 1)
    }

    return (
        <Router>
            <Switch>
                {/* http://localhost:1234/register */}
                <Route path="/register" component={Register} />
                {/* http://localhost:1234/login */}
                <Route path="/login" component={Login} />
                <Layout>
                    {/* http://localhost:1234/ */}
                    <AuthRoute exact path="/" component={Posts} />
                    <AuthRoute path="/posts" component={Posts} />
                </Layout>
            </Switch>
        </Router>
        // <>
        //   {isLoading && <div>Loading...</div>}
        //   <div className="app-wrapper">
        //     <h1>{title} with counter : {counter}</h1>
        //     <button onClick={handleClick}>Change my title</button>
        //     <Login />
        //     <Register />
        //     <Posts title={"Liste des posts"} />
        //   </div>
        // </>
    );
};

export default App;
