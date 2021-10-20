import { FilterCategories } from "../types";
import { Pie } from "@nivo/pie";

export interface ChartProps {
  type?: [];
  // data?: {}[];
}

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// type ChartData = [{

// }]

const data = [
  {
    id: "ESPN",
    label: "ESPN",
    value: 457,
    color: "#FF9800",
  },
  {
    id: "NBC",
    label: "NBC",
    value: 519,
    color: "#343A6E",
  },
  {
    id: "Vulture",
    label: "Vulture",
    value: 252,
    color: "#DDF3FE",
  },
  {
    id: "CNN",
    label: "python",
    value: 129,
    color: "#E8E8E8",
  },
];

const legends = [
  {
    anchor: "bottom",
    direction: "column",
    justify: true,
    translateX: 0,
    translateY: 125,
    itemsSpacing: 20,
    itemWidth: 300,
    itemHeight: 18,
    itemTextColor: "#999",
    itemDirection: "left-to-right",
    itemOpacity: 1,
    symbolSize: 12,
    symbolShape: "circle",
  },
];

const Chart = ({ type }: ChartProps) => {
  return (
    <div>
      <Pie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        height={300}
        width={300}
        innerRadius={0.85}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        legends={[
          {
            anchor: "bottom",
            direction: "column",
            justify: true,
            translateX: 0,
            translateY: 75,
            itemsSpacing: 5,
            itemWidth: 150,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
};

export default Chart;
