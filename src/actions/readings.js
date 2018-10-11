export const ADD_READING = 'ADD_READING';

export function addReading(reading) {
    console.log(reading);

    return {
        type: ADD_READING,
        reading
    };
};