import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: LucideIcon
  iconColor: string
}

export function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconColor,
}: StatCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-200">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-100">{value}</div>
        <p
          className={`text-xs ${
            isPositive ? "text-emerald-500" : "text-rose-500"
          }`}
        >
          {change}
        </p>
      </CardContent>
    </Card>
  )
}
