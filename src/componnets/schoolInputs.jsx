import React from 'react';
import InputDummy3 from '../componnets/schoolInput';

const InputFieldsThree = () => {
    return (
        <div>
            <h1>{InputDummy3.heading}</h1>
            {InputDummy3.inputs.map((input) => (
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
