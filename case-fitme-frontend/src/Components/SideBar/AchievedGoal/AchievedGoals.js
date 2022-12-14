import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

const ArchivedGoals = () => {
/* Api fetch for goals. */
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/goal`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setApiData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
        {/* Prints out a list of achieved goals. */}
            {apiData.map(data => {
                if (data.achieved === true) {
                    return (
                        <div key={data.id} className="weekly-schedule">
                            <div className="weekly-todo">
                                <p className="workout">{data.goalName}</p>
                                {<div>
                                    <p className="type">{data.date}</p>

                                </div>}
                                <div className="circle" id='item-complete'></div>
                            </div>
                        </div>)
                } 
            })}
        </>
    )
}
export default ArchivedGoals;

