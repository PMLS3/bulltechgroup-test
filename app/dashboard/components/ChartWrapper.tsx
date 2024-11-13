"use client";

import { ReactNode } from "react";
import {
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartWrapperProps {
  children: ReactNode;
  data: any[];
  height?: number | string;
}

export const ChartWrapper = ({
  children,
  data,
  height = "100%",
}: ChartWrapperProps) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      {children}
    </ResponsiveContainer>
  );
};

export const XAxis = ({ ...props }) => (
  <RechartsXAxis
    scale="auto"
    allowDecimals={false}
    axisLine={true}
    tickLine={true}
    stroke="#888888"
    xAxisId="0"
    {...props}
  />
);

export const YAxis = ({ ...props }) => (
  <RechartsYAxis
    scale="auto"
    allowDecimals={false}
    axisLine={true}
    tickLine={true}
    stroke="#888888"
    yAxisId="0"
    {...props}
  />
);

export const CustomTooltip = () => (
  <Tooltip
    contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "none" }}
    labelStyle={{ color: "white" }}
  />
);

export const CustomGrid = () => (
  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
);