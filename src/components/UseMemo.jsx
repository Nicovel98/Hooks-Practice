import PropTypes from 'prop-types'
import { useMemo } from 'react';

export const UseMemo = ({ count, setCount }) => {

    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    const squareCount = useMemo(() => {
        return count * count;
    }, [count]);

    return (
        <div>
            <h4>Exercise Hook UseMemo</h4>
            <button className='increment-button' onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>Count is {count}</p>
            <p>Double count is {doubleCount}</p>
            <p>Square of count is {squareCount}</p>
        </div>
    )
}

UseMemo.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
}