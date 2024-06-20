import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function GetCard() {
    const [list, setList] = useState([]);
    const [display, displayCard] = useState(false);
    const [displaycompnay, displaycompnayCard] = useState(false);
    const [user, setUser] = useState(null);
    const [companys, setCompany] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const addressCard = (user) => {
        setUser(user);
        displayCard(true);
    }
    const companyCard = (companys) => {
        setCompany(companys)
        displaycompnayCard(true);
    }

    const closeModal = () => {
        displayCard(false);
        displaycompnayCard(false);
        
    }

    return (
        <>
            {/* <h1 style={{ textAlign: "center", textTransform: 'uppercase', marginBottom: "2rem" }}>List of User's Data</h1> */}
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Si No</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        {/* <th scope="col">Address</th>
                        <th scope="col">Company</th> */}
                        
                    </tr>
                </thead>
                <tbody>
                    {list.map((data) => (
                        <tr key={data.id} className='hovers'>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            {/* <td>
                                <button type="button" className="btn btn-sm btn-primary" onClick={() => addressCard(data)}>Know More</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary" onClick={() => companyCard(data)}>Read More</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {user && (
                <div className={`modal ${display ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: display ? 'block' : 'none' }} >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{user.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Street</strong> {user.address.street}</p>
                                <p><strong>Suite:</strong> {user.address.suite}</p>
                                <p><strong>City:</strong> {user.address.city}</p>
                                <p><strong>Zipcode:</strong> {user.address.zipcode} </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {companys && (
                <div className={`modal ${displaycompnay ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: displaycompnay ? 'block' : 'none' }} >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Name</strong> {companys.company.name}</p>
                                <p><strong>CatchPhrase:</strong> {companys.company.catchPhrase}</p>
                                <p><strong>BS:</strong> {companys.company.bs}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </>
    );
}

export default GetCard;
