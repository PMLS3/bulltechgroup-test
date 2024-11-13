import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const inflationData = [
  { month: "Jan", rate: 2.3 },
  { month: "Feb", rate: 3.1 },
  { month: "Mar", rate: 4.0 },
  { month: "Apr", rate: 10.1 },
  { month: "May", rate: 4.0 },
  { month: "Jun", rate: 3.8 },
  { month: "Jul", rate: 3.2 },
  { month: "Aug", rate: 2.3 },
  { month: "Sep", rate: 1.4 },
  { month: "Oct", rate: 0.8 },
  { month: "Nov", rate: 0.5 },
  { month: "Dec", rate: 0.2 },
]

export function InflationChart() {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-3">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Market Inflation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={inflationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Bar dataKey="rate" fill="#818cf8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
