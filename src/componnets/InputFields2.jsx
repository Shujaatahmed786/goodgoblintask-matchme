import React from 'react';
import Input2 from './dummyInput2';

const InputFieldsTwo = () => {
    return (
        <div>
            <h1>{Input2.heading}</h1>
            {Input2.inputs.map((input) => (
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

export default InputFieldsTwo;
