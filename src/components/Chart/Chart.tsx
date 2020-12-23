import React, { useRef } from 'react';
// import styles from './style.module.scss';
import { Line } from '@ant-design/charts';

//     The same data as in the table.
//     By country:
//     array1 TotalConfirmed (by default)
//     array2 TotalDeaths
//     array3 TotalRecovered
//     array4 NewConfirmed = TotalConfirmed cases for the last available date
//     array5 NewDeaths = TotalDeaths for the last available date
//     array6 NewRecovered = TotalRecovered for the last available date
//     array7 (TotalConfirmed / 100 000 global population) = TotalConfirmed for the 100thnds popul
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array9 (TotalRecovered  / 100 000 global population) = TotalRecovered  for the 100thnds popul
//     array10 (NewConfirmed / 100 000 global population) = NewConfirmed for the 100thnds popul
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population
//     array12 (NewRecovered / 100 000 global population) = NewRecovered for the 100thnds popultn

interface Props {
  data: Array<{ month: string, value: number}>;
}

const Chart: React.FC<Props> = ({ data }) => {
  const lineRef = useRef();

  const config = {
    data,
    // style: {
    //   height: '70%',
    //   width: '100%',
    //   margin: '15px',
    // },
    autoFit: false,
    xField: 'month',
    yField: 'value',
  };

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Line {...config} ref={lineRef} />
    </>
  );
};

export default Chart;
