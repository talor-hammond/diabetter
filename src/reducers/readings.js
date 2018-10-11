import {
    ADD_READING
} from '../actions/readings';

export default function readings(state = [], action) {
    switch (action.type) {
        case ADD_READING:
            return [...state, action.reading];
        default:
            return state;
    };
};