import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Emojis = () => {

    const [emoji, setEmoji] = useState({})

    useEffect (() => {
        axios.get('https://api.emojisworld.fr/v1/random?&limit=1')
            .then(res => setEmoji(res.data.results[0]))
    }, [])

    const changeEmoji = () => {
        axios.get('https://api.emojisworld.fr/v1/random?&limit=1')
            .then(res => setEmoji(res.data.results[0]))
    }

    console.log(emoji)

    return (
        <div className='card-emojis'>
            <p className='emoji-name'>{emoji.name}</p>
            <p className='emoji-emoji'>{emoji.emoji}</p>
            <button onClick={changeEmoji}>Change</button>
        </div>
    );
};

export default Emojis;