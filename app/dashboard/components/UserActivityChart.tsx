"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

interface UserActivityChartProps {
  data: Array<{
    date: string
    activeUsers: number
    newUsers: number
  }>
}

export function UserActivityChart({ data }: UserActivityChartProps) {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-4">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          User Activity Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
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
            <Area
              type="monotone"
              dataKey="activeUsers"
              stroke="#818cf8"
              fill="#818cf8"
              fillOpacity={0.3}
              name="Active Users"
            />
            <Area
              type="monotone"
              dataKey="newUsers"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.3}
              name="New Users"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
