import React, { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion'
import axios from 'axios'

export const Page = (props) => {

    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        const lol = axios.get(`http://localhost:3000/page/bc900b80007741468ba4901ab96615b6`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Cross-Origin-Resource-Policy': 'cross-origin',
                'Cross-Origin-Embedder-Policy': 'credentialless',
            },
        });
        console.log('lol', lol);

        lol.then(res => setBlocks(res.data));
    }, [])

    console.log('blocks :', blocks)

    return (
        <NotionRenderer blockMap={blocks} />
    )
}
