import React, { useEffect, useState } from 'react';

export default function Photos() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsData();
    }, []);

    const getCommentsData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const actualComments = await response.json();
            setComments(actualComments);
            document.title = "Photos";
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };
    return (
        <section>
            {
                comments.map((data) => (
                    <div className="card" style={{width: "18rem"}} key={data.id}>
                        <img src={data.thumbnailUrl} alt="No Image" />
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <a href={data.url} className="btn btn-sm btn-primary">Know More</a>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}
