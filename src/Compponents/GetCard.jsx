import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function GetCard() {
    const [list, setList] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    if (!list) {
        return <div className="loader"></div>;
    }

    return (
        <table className="table caption-top">
            <thead>
                <tr>
                    <th scope="col">Si No</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {list.map((data) => (
                    <tr key={data.id} className='hovers'>
                    
                        <td><Link to={`/address/${data.id}`}>{data.id}</Link></td>
                        <td>
                            <Link to={`/address/${data.id}`}>
                                {data.name}
                            </Link>
                        </td>
                        <td><Link to={`/address/${data.id}`}>{data.username}</Link></td>
                        <td><Link to={`/address/${data.id}`}>{data.email}</Link></td>
                        <td><Link to={`/address/${data.id}`}>{data.phone}</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GetCard;
