"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut, DollarSign, Receipt, CreditCard, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { checkAuth, logout } from "@/lib/auth"
import { StatCard } from "./components/StatCard"
import { PerformanceChart } from "./components/PerformanceChart"
import { CompanyList } from "./components/CompanyList"
import { InflationChart } from "./components/InflationChart"
import { DailyStatsCard } from "./components/DailyStatsCard"
import { RecentTransactions } from "./components/RecentTransactions"

const dailySalesData = Array.from({ length: 20 }, (_, i) => ({
  day: i + 1,
  amount: Math.floor(Math.random() * 5000) + 1000,
}))

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    if (!checkAuth()) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-10 bg-slate-950 min-h-screen text-slate-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
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
          title="Income"
          value="$8,367"
          change="+6% last 30 days"
          isPositive={true}
          icon={DollarSign}
          iconColor="text-emerald-500"
        />
        <StatCard
          title="Expenses"
          value="$2,974"
          change="+17% last 30 days"
          isPositive={false}
          icon={Receipt}
          iconColor="text-rose-500"
        />
        <StatCard
          title="Transactions"
          value="621"
          change="-4% last 30 days"
          isPositive={false}
          icon={CreditCard}
          iconColor="text-blue-500"
        />
        <StatCard
          title="Savings"
          value="$5,792"
          change="+11% last 30 days"
          isPositive={true}
          icon={Wallet}
          iconColor="text-purple-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PerformanceChart />
        <InflationChart />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DailyStatsCard
          title="Daily Sales"
          value="$2,843.12"
          data={dailySalesData}
          lineColor="#818cf8"
        />
        <DailyStatsCard
          title="Monthly Orders"
          value="279"
          data={dailySalesData}
          lineColor="#06b6d4"
        />
        <DailyStatsCard
          title="Average Sale"
          value="$879.92"
          data={dailySalesData}
          lineColor="#22c55e"
        />
        <DailyStatsCard
          title="Abandoned Sales"
          value="$3,821.78"
          data={dailySalesData}
          lineColor="#eab308"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <CompanyList />
        <RecentTransactions />
      </div>
    </div>
  )
}
