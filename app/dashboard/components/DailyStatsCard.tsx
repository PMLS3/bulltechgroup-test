import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer } from "recharts"

interface DailyStatsCardProps {
  title: string
  value: string
  data: Array<{ day: number; amount: number }>
  lineColor: string
}

export function DailyStatsCard({
  title,
  value,
  data,
  lineColor,
}: DailyStatsCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-100">{value}</div>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="amount"
              stroke={lineColor}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
