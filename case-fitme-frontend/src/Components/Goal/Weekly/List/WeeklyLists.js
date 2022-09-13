import React, { useEffect, useState } from 'react';
const WeeklyLists = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(`https://fitmecase.herokuapp.com/api/v1/workout`)
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
            {apiData.map(data => {
                if (data.complete === true) {
                    return (
                        <div key={data.id} className="weekly-schedule">
                            <div className="weekly-todo">
                                <p className="workout">{data.name}</p>
                                {<div>
                                    <p className="type">{data.type}</p>

                                </div>}
                                <div className="circle" id='item-complete'></div>
                            </div>
                        </div>)
                } else {
                    return (
                        <div key={data.id} className="weekly-schedule">
                            <div className="weekly-todo">
                                <p className="workout">{data.name}</p>
                                {<div>
                                    <p className="type">{data.type}</p>

                                </div>}
                                <div className="circle"></div>
                            </div>
                        </div>)
                }
            })}
        </>
    )
}
export default WeeklyLists;