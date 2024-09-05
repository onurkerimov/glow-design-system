

const DashedWeb = (props: any) => {
  const { ringCount = 8 } = props;
  const step = 360 / ringCount;
  const initialDeg = step / 2;
  const rx = 390;
  const dashArray = '4,2';
  const strokeWidth = 1;
  return (
    <svg width={1200} height={1200} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="myGradient">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="white" />
          <stop offset="70%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <mask id="mask2">
        <ellipse
          cx={600}
          cy={600}
          rx={800}
          ry={800}
          strokeWidth={strokeWidth}
          transform={`rotate(${0} 600 600)`}
          // fill='white'
          fill="url('#myGradient')" />

      </mask>
      <g mask="url(#mask2)">
        {Array.from({ length: ringCount / 2 }, (_, i) => i).map((i) => {
          return <ellipse
            cx={600}
            cy={600}
            rx={rx * 1.6}
            ry={120}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            transform={`rotate(${initialDeg + i * step} 600 600)`} />;
        })}
        {/* {Array.from({length: ringCount}, (_,i) => i).map((i) => {
              return   <ellipse
              cx={600}
              cy={600}
              rx={rx}
              ry={162}
              strokeWidth={strokeWidth}
              strokeDasharray="3,3"
              transform={`rotate(${initialDeg + i * step} 600 600)`}
            />
            })} */}
      </g>
      <g mask="url(#mask2)">
        {Array.from({ length: ringCount / 2 }, (_, i) => i).map((i) => {
          return <ellipse
            cx={600}
            cy={600}
            rx={rx * 1.6}
            ry={267}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            transform={`rotate(${initialDeg + i * step} 600 600)`} />;
        })}
        {Array.from({ length: ringCount / 2 }, (_, i) => i).map((i) => {
          return <ellipse
            cx={600}
            cy={600}
            rx={483}
            ry={50}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            transform={`rotate(${initialDeg + i * step} 600 600)`} />;
        })}
      </g>
    </svg>
  );
};

export default DashedWeb