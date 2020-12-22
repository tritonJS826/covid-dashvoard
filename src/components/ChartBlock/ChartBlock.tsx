import React from 'react';
import Chart from '../Chart';
import ChartPagination from '../ChartPagination';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

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
  data: Array<any>
}

const ChartBlock: React.FC<Props> = ({ data }) => (
  <div className={`${appstyles.app_component_block} ${styles.chartblock}`}>
    {console.log(data || dataMock)}
    <Chart data={dataMock} />
    <ChartPagination />
  </div>
);

export default ChartBlock;
