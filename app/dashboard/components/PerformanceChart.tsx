import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const performanceData = [
  { date: "19 Sep", income: 3000, expenses: 2400 },
  { date: "20 Sep", income: 4000, expenses: 3000 },
  { date: "21 Sep", income: 5000, expenses: 3500 },
  { date: "22 Sep", income: 4500, expenses: 3800 },
  { date: "23 Sep", income: 8000, expenses: 4000 },
  { date: "24 Sep", income: 9000, expenses: 4500 },
  { date: "25 Sep", income: 8500, expenses: 4200 },
]

export function PerformanceChart() {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-4">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Income & Expenses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#818cf8"
              fill="#818cf8"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#f87171"
              fill="#f87171"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
