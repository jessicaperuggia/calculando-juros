import React from 'react';
import Form from './components/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Installments from './components/Installments';


export default function App() {

  const [initialCapital, steInitialCapital] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [monthsPeriod, setMonthsPeriod] = useState(1);
  const [parcelControl, setParcelControl] = useState([]);


  useEffect(() => {
    calculateParcel(initialCapital, interestRate, monthsPeriod);
  }, [initialCapital, interestRate, monthsPeriod]);

  const calculateParcel = (initialCapital, interestRate, monthsPeriod) => {
    const newParcel = [];

    let currentId = 1;
    let currentValue = initialCapital;
    let percentage = 0;

    for (let i = 1; i <= monthsPeriod; i++) {
      const percentValue = (currentValue * Math.abs(interestRate)) / 100;

      currentValue = interestRate >= 0 ? currentValue + percentValue : currentValue - percentValue;

      percentage = (currentValue / initialCapital - 1) * 100;

      newParcel.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - initialCapital,
        percentage,
        profit: interestRate > 0,
      });
    }
    setParcelControl(newParcel);
  };

  const handleInitialCapitalChange = (newValue) => {
    steInitialCapital(newValue);
  }

  const handleInterestRateChange = (newValue) => {
    setInterestRate(newValue);
  }

  const handleMonthsPeriodChange = (newValue) => {
    setMonthsPeriod(newValue);
  }

  return (
    <div className='container'>
      <h1 className='center'>Calculando Juros Comportos</h1>
      <div className='row'>

        <Form label='Capital inicial:' value={initialCapital} onAmountChange={handleInitialCapitalChange} step='100' min='1000' />
        <Form label='Taxa de juros mensal:' value={interestRate} onAmountChange={handleInterestRateChange} step='0.1' min='-12' />
        <Form label='Período(meses):' value={monthsPeriod} onAmountChange={handleMonthsPeriodChange} step='1' min='1' />
      </div>

      <Installments data={parcelControl} />

    </div>
  )

}
