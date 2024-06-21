import React, { useEffect, useState } from 'react';

export default function Photos() {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        getphotosData();
    }, []);

    const getphotosData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos?10");
            const actualPhotos = await response.json();
            setPhotos(actualPhotos);
            document.title = "Photos";
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }
    if (!photos) {
        return <div className="loader"></div>;
    }
    return (
        <section>
            {
                photos.map((data) => (
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
