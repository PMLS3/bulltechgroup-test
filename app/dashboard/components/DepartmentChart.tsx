"use client";

import { PieChart, Pie, Cell, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "./ChartWrapper";

const data = [
  { name: "Engineering", value: 45 },
  { name: "Marketing", value: 25 },
  { name: "Sales", value: 20 },
  { name: "Support", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function DepartmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Distribution</CardTitle>
        <CardDescription>Employee distribution by department</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartWrapper data={data}>
          <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={1000}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <CustomTooltip />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
            />
          </PieChart>
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}