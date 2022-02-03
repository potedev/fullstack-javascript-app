import React, { useEffect, useState } from 'react'
import api, { addXsrfToken } from '../utils/api'
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';

export const Posts = (props) => {
    const { title } = props;

    const [posts, setPosts] = useState([])


    useEffect(async () => {

        // const usersPublicResponse = await api.get('/users/public');
        // console.log('public users', usersPublicResponse.data)
        // setPosts(usersPublicResponse.data)

        console.log('CALL api');
        const xsrfToken = getLocalStorageItem('xsrf')
        addXsrfToken(xsrfToken);
        const axiosResponse = await api.get('/auth/me');
        console.log(axiosResponse);
        setLocalStorageItem(axiosResponse?.data?.email, 'email')

        const usersPrivateResponse = await api.get('/users/');
        console.log('Admin user rights ? ', usersPrivateResponse);
        setPosts(usersPrivateResponse.data)
    }, [])

    const refreshToken = async () => {

        const axiosResponse = await api.post('/auth/token/refresh');
        console.log('refresh response :', axiosResponse)

        if (axiosResponse.status === 201) {
            setLocalStorageItem(axiosResponse.data.xsrfToken, 'xsrf')
            addXsrfToken(axiosResponse.data.xsrfToken);
        }
    }

    // console.log('Posts : ', posts);

    return (
        <div className="posts-wrapper">
            <h1>{title}</h1>
            <button onClick={refreshToken}>refresh token</button>
        </div>
    )
}