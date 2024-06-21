import React, { useEffect, useState } from 'react';

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsData();
    }, []);

    const getCommentsData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const actualComments = await response.json();
            setComments(actualComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    if (!comments) {
        return <div className="loader"></div>;
    }
    return (
        <section>
            {
                comments.map((data) => (
                    <div className="card" style={{width: "18rem",display:'grid'}} key={data.id}>
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <h6 className='card-email'> {data.email}</h6>
                                <p className="card-text">{data.body}</p>
                               
                            </div>
                    </div>
                ))
            }
            </section>
    );
}
