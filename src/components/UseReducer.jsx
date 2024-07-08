import PropTypes from 'prop-types';
import { useReducer } from 'react';

export const UseReducer = () => {

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                /* Los 3 puntos deja el contenido anterior y añade el nuevo */
                return { ...state, count: state.count + 1 };
            case 'decrement':
                return { ...state, count: state.count - 1 };
            case 'reset':
                return { ...initialState };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Exercise Hook useReducer</h2>
            <hr />
            <button className='increment-button' onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button className='decrement-button' onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button className='reset-button' onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
            <p className='count-text'>Count is {state.count}</p>
        </div >
    )
}

UseReducer.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
}