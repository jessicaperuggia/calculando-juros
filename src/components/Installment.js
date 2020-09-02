import React from 'react';

import css from './installment.module.css';
import { formatMoney, formatPercentage, formatMoneyPositiveNegative } from '../helpers/formatters';

export default function Installment({ data }) {
    const { id, value, difference, percentage, profit } = data;

    const classPositiveValue = 'green-text darken-4';
    const classPositivePercentageValue = 'blue-text darken-4';
    const classNegativeValue = 'red-text darken-4';
    const classNegativePercentageValue = 'orange-text darken-4';

    const classValue = profit ? classPositiveValue : classNegativeValue;
    const classPercentage = profit ? classPositivePercentageValue : classNegativePercentageValue;

    return (
        <div className='col s6 m3 l2'>
            <div className={css.installmentContainer}>
                <span className={css.span}>
                    <strong>{id}</strong>
                </span>
                <div>
                    <div className={classValue}>
                        <strong>{formatMoney(value)}</strong>
                    </div>

                    <div className={classValue}>
                        <strong>{formatMoneyPositiveNegative(difference)}</strong>
                    </div>

                    <div className={classPercentage}>
                        <strong>{formatPercentage(percentage)}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
