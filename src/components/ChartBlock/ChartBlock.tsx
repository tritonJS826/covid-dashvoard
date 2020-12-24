import React from 'react';
import Chart from '../Chart';
import ChartPagination from '../ChartPagination';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

import { IMergedElement } from '../../interfaces/redux/appStore';
import { casesDataType } from '../../interfaces/types';

const dataMock = [
  { month: '1991', value: 3 },
  { month: '1992', value: 4 },
  { month: '1993', value: 3.5 },
  { month: '1994', value: 5 },
  { month: '1995', value: 4.9 },
  { month: '1996', value: 6 },
  { month: '1997', value: 7 },
  { month: '1998', value: 9 },
  { month: '1999', value: 13 },
];

interface Props {
  data: Array<IMergedElement>;
  casesData: casesDataType;
}

const ChartBlock: React.FC<Props> = ({ data }) => {
  const chartData = () => { // rewrite
    // data.map((el) => {
    //   const value = el.TotalConfirmed;
    //   return {
    //     month: el.date,
    //     value,
    //   };
    // });
    console.log(data);
    return dataMock;
  };

  return (
    <>
      { data && console.log(data)}
      <div className={`${appstyles.app_component_block} ${styles.chartblock}`}>
        {console.log(data || dataMock)}
        <Chart data={chartData()} />
        <ChartPagination />
      </div>
    </>
  );
};

export default ChartBlock;
