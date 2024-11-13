"use client";

import { BarChart, Bar, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartWrapper, XAxis, YAxis, CustomTooltip, CustomGrid } from "./ChartWrapper";

const data = [
  { month: "Jan", employees: 200 },
  { month: "Feb", employees: 250 },
  { month: "Mar", employees: 280 },
  { month: "Apr", employees: 310 },
  { month: "May", employees: 350 },
  { month: "Jun", employees: 380 },
];

export function CompanyGrowthChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Company Growth</CardTitle>
        <CardDescription>Employee count over time</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartWrapper data={data}>
          <BarChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 20 }}>
            <CustomGrid />
            <XAxis dataKey="month" xAxisId="0" />
            <YAxis yAxisId="0" />
            <CustomTooltip />
            <Legend />
            <Bar
              dataKey="employees"
              fill="hsl(var(--chart-2))"
              radius={[4, 4, 0, 0]}
              xAxisId="0"
              yAxisId="0"
            />
          </BarChart>
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}