import React from 'react';
import Inputs from '../componnets/dummyInput';

const InputFields = () => {
    return (
        <div>
            <h1>{Inputs.heading}</h1>
            {Inputs.inputs.map((input) => (
                <div key={input.id}>
                    <label htmlFor={input.id}>{input.label}</label>
                    <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        defaultValue={input.value}
                    />
                </div>
            ))}
        </div>
    );
};

export default InputFields;
