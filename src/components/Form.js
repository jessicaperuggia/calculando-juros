import React from 'react'

export default function Form() {
    return (
        <div>
            <h1>Calculando Juros Comportos</h1>
            <div className='container'>
                <label>Capital inicial:</label>
                <input type='number' />
                <label>Taxa de juros mensal:</label>
                <input type='number' />
                <label>Período (meses)</label>
                <input type='number' />
            </div>
        </div>
    )
}
