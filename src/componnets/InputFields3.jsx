import React from 'react';
import Input3 from './dummyInputs3';

const InputFieldsThree = () => {
    return (
        <div>
            <h1>{Input3.heading}</h1>
            {Input3.inputs.map((input) => (
                <div key={input.id}>
                    <label>{input.label}</label>
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

export default InputFieldsThree;
