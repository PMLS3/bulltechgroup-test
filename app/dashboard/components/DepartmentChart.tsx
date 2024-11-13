"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

interface DepartmentChartProps {
  data: Array<{
    name: string
    userCount: number
    activePercentage: number
  }>
}

export function DepartmentChart({ data }: DepartmentChartProps) {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-3">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Department Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#f8fafc",
              }}
            />
            <Legend />
            <Bar dataKey="userCount" fill="#818cf8" name="Total Users" />
            <Bar dataKey="activePercentage" fill="#22c55e" name="Active %" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
