import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InfoPage = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            const { data } = await axios.get('http://localhost:5000/api/info');
            setInfo(data);
        };
        fetchInfo();
    }, []);

    return (
        <div>
            <h1>Family Planning Information</h1>
            <ul>
                {info.map(item => (
                    <li key={item._id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoPage;
