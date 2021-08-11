import React, { useEffect, useState } from 'react'
import api from '../utils/api'

export const Posts = (props) => {
    const { title } = props;

    const [posts, setPosts] = useState([])


    useEffect(async () => {
        console.log('CALL api');
        const axiosResponse = await api.get('/posts');
        console.log(axiosResponse);
        setPosts(axiosResponse.data)
    }, [])

    console.log('Posts : ', posts);

    return (
        <div className="posts-wrapper">
            <h1>{title}</h1>
            <ul>
                {
                    posts.map(post => {
                        return (<li key={post.id}>{post.title}</li>)
                    })
                }
            </ul>
        </div>
    )
}