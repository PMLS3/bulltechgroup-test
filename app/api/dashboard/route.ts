import { NextResponse } from "next/server"

// Dummy data - in real app this would come from your database
const analyticsData = {
  stats: {
    totalUsers: 1842,
    activeUsers: 621,
    departmentCount: 12,
    averageLoginPerUser: 5.2,
  },
  userActivity: [
    { date: "19 Sep", activeUsers: 300, newUsers: 24 },
    { date: "20 Sep", activeUsers: 420, newUsers: 30 },
    { date: "21 Sep", activeUsers: 380, newUsers: 28 },
    { date: "22 Sep", activeUsers: 450, newUsers: 35 },
    { date: "23 Sep", activeUsers: 520, newUsers: 40 },
    { date: "24 Sep", activeUsers: 480, newUsers: 32 },
    { date: "25 Sep", activeUsers: 550, newUsers: 45 },
  ],
  departmentStats: [
    { name: "Engineering", userCount: 245, activePercentage: 82 },
    { name: "Marketing", userCount: 124, activePercentage: 74 },
    { name: "Sales", userCount: 156, activePercentage: 88 },
    { name: "Support", userCount: 98, activePercentage: 91 },
    { name: "HR", userCount: 42, activePercentage: 67 },
    { name: "Finance", userCount: 65, activePercentage: 72 },
  ],
  loginFrequency: [
    { frequency: "Daily", users: 420 },
    { frequency: "2-3 times/week", users: 285 },
    { frequency: "Weekly", users: 180 },
    { frequency: "Monthly", users: 95 },
    { frequency: "Inactive", users: 42 },
  ],
  recentLogins: [
    {
      user: "Sarah Chen",
      department: "Engineering",
      lastLogin: "2 minutes ago",
      status: "Active",
    },
    {
      user: "John Smith",
      department: "Marketing",
      lastLogin: "15 minutes ago",
      status: "Active",
    },
    {
      user: "Maria Garcia",
      department: "Sales",
      lastLogin: "1 hour ago",
      status: "Active",
    },
  ],
}

export async function GET() {
  try {
    return NextResponse.json(analyticsData)
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
