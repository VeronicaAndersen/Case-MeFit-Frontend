import { createHeaders } from '.'
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of exercise information)
export const createExercise = async (exerciseInfo) => {
    try {
        console.log(`${apiUrl}/exercise`);
        const response = await fetch(`${apiUrl}/exercise`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exerciseInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new exercise')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}


//Update an existing exercise
export const updateExercise = async (exerciseInfo, exerciseId) => {
    try {
        if(exerciseId === undefined){

            throw new Error("Game ID is undefined");

        }
        const response = await axios.put(`${apiUrl}/exercise/${exerciseId}`, exerciseInfo, {
            headers: {'Content-Type': 'application/json'}
            
        })
        console.log("hesadö");

        return [ null, response.data ]
    }
    catch (error) {
        return [ error.message, [] ]
        
    }
}

//Delete an existing exercise (takes in a exercise object)
export const deleteExercise = async (exerciseId) => {
    try {
        const response = await fetch(`${apiUrl}/exercise/${exerciseId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                exercises: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the exercise')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}
