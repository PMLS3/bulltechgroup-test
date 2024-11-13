"use client";

import { LineChart, Line, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartWrapper, XAxis, YAxis, CustomTooltip, CustomGrid } from "./ChartWrapper";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 150 },
  { name: "Wed", users: 180 },
  { name: "Thu", users: 190 },
  { name: "Fri", users: 160 },
  { name: "Sat", users: 90 },
  { name: "Sun", users: 85 },
];

export function UserActivityChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Weekly User Activity</CardTitle>
        <CardDescription>Number of active users per day</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartWrapper data={data}>
          <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 20 }}>
            <CustomGrid />
            <XAxis dataKey="name" xAxisId="0" />
            <YAxis yAxisId="0" />
            <CustomTooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
              xAxisId="0"
              yAxisId="0"
            />
          </LineChart>
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}