import Welcome from './Welcome';
import Quest from './Quest.jpeg';
import Casino from './Casino.jpg';
import React, { useState, useEffect } from 'react';

function App() {
    const [dog, setDogImage] = useState('');

    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <div>
            <p>Random Dog Image</p>
            <img id="dog" src={dog} alt="A random dog" style={{ maxWidth: '300px' }} />
            <button id="fetchButton" onClick={fetchDogImage}>Fetch Dog Image</button>

            <Welcome />
            <div style={{ display: 'flex', gap: '5px' }}>
                <div
                    style={{
                        width: '500px',
                        height: '500px',
                        backgroundImage: `url(${Casino})`,
                        backgroundSize: 'cover'
                    }}
                ></div>
                <div
                    style={{
                        width: '500px',
                        height: '500px',
                        backgroundImage: `url(${Quest})`,
                        backgroundSize: 'cover'
                    }}
                ></div>
            </div>

            <div style={{ display: 'flex', gap: '5px' }}>
                <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Lemurs</li>
                </ul>

                <ol>
                    <li>Pizza</li>
                    <li>Double Chocolate Chunk Cookie</li>
                    <li>Sundae</li>
                </ol>
            </div>
        </div>
    );
}

export default App;
