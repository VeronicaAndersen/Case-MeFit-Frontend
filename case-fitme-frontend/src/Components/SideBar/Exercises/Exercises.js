import React, { useEffect, useState } from 'react';
import ExerciseItem from './ExerciseItem';
import keycloak from '../../../Keycloak/keycloak';
import Sets from '../Sets/InsertSets';
import InsertExercises from './InsertExercise';

const apiUrl = process.env.REACT_APP_API_URL

export default function Exercises() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Exercise api fetch request with error handling. */
    useEffect(() => {
        const headers = { Authorization: `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/exercise`, { headers, crossDomain: true })
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
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <div className="content">
                <h1>Exercises</h1>
                <InsertExercises />
                <Sets />

                {loading === false && apiData.map((data) => {
                    return (
                        <div key={data.id} >
                            <ExerciseItem exercise={data} />
                        </div>)
                })}
            </div>
        </>
    )
}
