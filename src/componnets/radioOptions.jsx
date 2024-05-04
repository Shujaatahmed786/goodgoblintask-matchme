import React from 'react';
import Dummy from '../componnets/dummydata';

const RadioOptionsFromDummy = () => {
    return (
        <div className='flex'>
            <h1>{Dummy.heading}</h1>

            {Dummy.radioOptions.map((option) => (
                <div key={option.id}>
                    <label>
                        <input
                            type="radio"
                            name="radioOptions"
                            value={option.value}
                            disabled
                        />
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioOptionsFromDummy;
