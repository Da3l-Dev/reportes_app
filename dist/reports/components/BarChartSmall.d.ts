type Segment = {
    label: string;
    color: string;
    values: number[];
};
type BarChartSmallProps = {
    labels: string[];
    segments: Segment[];
    width?: number;
    height?: number;
};
export default function BarChartSmall({ labels, segments, width, height, }: BarChartSmallProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BarChartSmall.d.ts.map