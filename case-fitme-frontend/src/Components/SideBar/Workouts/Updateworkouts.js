import { updateWorkout } from '../../Api/Workout';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function UpdateWorkouts({ workout }) {

    const { handleSubmit } = useForm();
    const [name, setName] = useState(workout.name);
    const [complete, setComplete] = useState(workout.complete);
    const [type, setType] = useState(workout.type);

    /* Method that updates workouts. */
    const onUpdate = () => {
        workout.name = name;
        const newWorkout = {
            name: name,
            type: workout.type,
            complete: workout.complete
        }
        updateWorkout(workout, workout.id)
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
    
    /* Methods that sets the value from the form. */
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleType = (event) => {
        setType(event.target.value);
    }


    const handleComplete = (event) => {
        setComplete(event.target.value);
    }

    return (
        <>
            {/* Form that updates workout. */}
            <form className='updateForm' id='update-work' onSubmit={handleSubmit(onUpdate)}>
                <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                <div id={workout.id}>
                    <input className='input-form' type="text" name="type" value={type} onChange={event => handleType(event)} />
                    <input className='input-form' type="text" name="complete" value={complete} onChange={event => handleComplete(event)} />
                </div>
                <button className='save-btn' type="submit" onClick={onUpdate} value={workout.id}>Save</button>
            </form>
        </>
    )
}