import React, { useState } from 'react';
import Chart from '../Chart';
import ChartPagination from '../ChartPagination';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

import { IChartData } from '../../interfaces/redux/appStore';
import { casesDataType } from '../../interfaces/types';

interface Props {
  data: Array<IChartData>;
  casesData: casesDataType;
}

const ChartBlock: React.FC<Props> = ({ data, casesData }) => {
  const chartData = (dataParam: IChartData[], casesDataParam: casesDataType) => {
    const dataForChart = dataParam.map((el) => {
      if (casesDataParam === 'deathCasesData') return { month: el.month, value: el.Deaths };
      if (casesDataParam === 'deseaseCasesData') return { month: el.month, value: el.Confirmed };
      return { month: el.month, value: el.Recovered };
    });

    return dataForChart;
  };

  const [isActive, setActive] = useState(false);

  const addActiveClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={
          isActive
            ? `${appstyles.app_component_block} ${styles.chart_popup}`
            : `${appstyles.app_component_block}`
        }
        onDoubleClick={addActiveClass}
      >
        <div className={`${appstyles.app_component_block} ${styles.chartblock}`}>
          <Chart data={chartData(data, casesData)} />
          <ChartPagination />
        </div>
      </div>

    </>
  );
};

export default ChartBlock;
