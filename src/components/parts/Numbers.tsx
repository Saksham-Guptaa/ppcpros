import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
  const { ref: ref30, inView: inView30 } = useInView({ triggerOnce: true });
  const { ref: ref200M, inView: inView200M } = useInView({ triggerOnce: true });

  return (
    <div className="flex justify-around items-center py-10">
      <div className="text-center" ref={ref20}>
        <div className="text-8xl font-bold text-gray-800">
          {inView20 && <CountUp end={20} duration={2} suffix="%" />}
        </div>
        <div className="text-gray-600">Increase in conversions over the first 6 months</div>
      </div>
      <div className="text-center" ref={ref30}>
        <div className="text-8xl font-bold text-gray-800">
          {inView30 && <CountUp end={30} duration={2} suffix="%" />}
        </div>
        <div className="text-gray-600">Increase in Search Impression Share on Average</div>
      </div>
      <div className="text-center" ref={ref200M}>
        <div className="text-8xl font-bold text-gray-800">
          {inView200M && <CountUp end={200} duration={2} prefix="$" suffix="M+" />}
        </div>
        <div className="text-gray-600">In online sales and MQLs generated</div>
      </div>
    </div>
  );
};

export default Stats;
