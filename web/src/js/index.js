import * as React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const MOUNT_NODE = document.getElementById('app');


ReactDOM.render(
    <App />,
    MOUNT_NODE,
    () => {
        console.log('My app is running')
    }
)
