"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut, Users, UserCheck, Building2, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { checkAuth, logout } from "@/lib/auth"
import { StatCard } from "./components/StatCard"
import { UserActivityChart } from "./components/UserActivityChart"
import { DepartmentChart } from "./components/DepartmentChart"
import { RecentLogins } from "./components/RecentLogins"
import type { DashboardData } from "../types/dashboard"

export default function Dashboard() {
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!checkAuth()) {
      router.push("/login")
    }
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setDashboardData(data)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setError("Failed to load dashboard data")
      }
    }

    fetchData()
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-white text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-10 bg-slate-950 min-h-screen text-slate-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          User Analytics Dashboard
        </h1>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="bg-white hover:bg-gray-100"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={dashboardData.stats.totalUsers.toString()}
          change="+12% last 30 days"
          isPositive={true}
          icon={Users}
          iconColor="text-blue-500"
        />
        <StatCard
          title="Active Users"
          value={dashboardData.stats.activeUsers.toString()}
          change="+8% last 30 days"
          isPositive={true}
          icon={UserCheck}
          iconColor="text-emerald-500"
        />
        <StatCard
          title="Departments"
          value={dashboardData.stats.departmentCount.toString()}
          change="No change"
          isPositive={true}
          icon={Building2}
          iconColor="text-purple-500"
        />
        <StatCard
          title="Avg. Logins/User"
          value={dashboardData.stats.averageLoginPerUser.toString()}
          change="+2% last 30 days"
          isPositive={true}
          icon={Timer}
          iconColor="text-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <UserActivityChart data={dashboardData.userActivity} />
        <DepartmentChart data={dashboardData.departmentStats} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RecentLogins data={dashboardData.recentLogins} />
      </div>
    </div>
  )
}
