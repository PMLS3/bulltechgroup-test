"use client"

import { DailyStatsCard } from "./DailyStatsCard"
import type { DashboardData } from "@/app/types/dashboard"

interface DailyStatsGridProps {
  data: DashboardData["dailyStats"]
}

export function DailyStatsGrid({ data }: DailyStatsGridProps) {
  const latestStats = data[data.length - 1]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DailyStatsCard
        title="Daily Active Users"
        value={latestStats.activeUsers.toLocaleString()}
        data={data.map((stat) => ({
          day: new Date(stat.date).getDate(),
          amount: stat.activeUsers,
        }))}
        lineColor="#818cf8"
      />
      <DailyStatsCard
        title="Session Duration"
        value={`${latestStats.sessionDuration}m avg`}
        data={data.map((stat) => ({
          day: new Date(stat.date).getDate(),
          amount: stat.sessionDuration,
        }))}
        lineColor="#06b6d4"
      />
      <DailyStatsCard
        title="New Signups"
        value={latestStats.newSignups.toLocaleString()}
        data={data.map((stat) => ({
          day: new Date(stat.date).getDate(),
          amount: stat.newSignups,
        }))}
        lineColor="#22c55e"
      />
      <DailyStatsCard
        title="Retention Rate"
        value={`${latestStats.retentionRate}%`}
        data={data.map((stat) => ({
          day: new Date(stat.date).getDate(),
          amount: stat.retentionRate,
        }))}
        lineColor="#eab308"
      />
    </div>
  )
}
