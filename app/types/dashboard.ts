export interface DashboardData {
  stats: {
    totalUsers: number
    activeUsers: number
    departmentCount: number
    averageLoginPerUser: number
  }
  userActivity: Array<{
    date: string
    activeUsers: number
    newUsers: number
  }>
  departmentStats: Array<{
    name: string
    userCount: number
    activePercentage: number
  }>
  loginFrequency: Array<{
    frequency: string
    users: number
  }>
  recentLogins: Array<{
    user: string
    department: string
    lastLogin: string
    status: string
  }>
}
