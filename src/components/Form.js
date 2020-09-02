import React from 'react';

import css from './form.module.css';

export default function Form(props) {

    const handleInputChange = (event) => {
        const newValue = +event.target.value;
        props.onAmountChange(newValue);
    }

    const { label, value, step, min } = props;
    const id = 'input' + label;

    return (
        <div className='input-field col s6 m4 l3'>

            <div className={css.formContainer} >
                <label className='active' htmlFor={id}>
                    {label}
                    <input type='number' id={id} value={value} onChange={handleInputChange} step={step} min={min} />
                </label>
            </div>
        </div>
    );
}
