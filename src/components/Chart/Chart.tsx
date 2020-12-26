import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

interface Props {
  data: Array<{ month: string, value: number}>;
}

const Chart: React.FC<Props> = ({ data }) => {
  const lineRef = useRef();

  const config = {
    data,
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
