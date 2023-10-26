import './Chart.css';
import ChartBar from 'components/ChartBar/CharBar';

const Chart = props => {
  const totalMaximum = props.dataPoints.reduce((max, item) => Math.max(max, item.value), 0);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
