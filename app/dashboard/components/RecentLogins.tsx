import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface RecentLoginsProps {
  data: Array<{
    user: string
    department: string
    lastLogin: string
    status: string
  }>
}

export function RecentLogins({ data }: RecentLoginsProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Recent User Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800">
              <TableHead className="text-slate-300">User</TableHead>
              <TableHead className="text-slate-300">Department</TableHead>
              <TableHead className="text-slate-300">Last Login</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((login) => (
              <TableRow key={login.user} className="border-slate-800">
                <TableCell className="font-medium text-slate-100">
                  {login.user}
                </TableCell>
                <TableCell className="text-slate-100">
                  {login.department}
                </TableCell>
                <TableCell className="text-slate-100">
                  {login.lastLogin}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400">
                    {login.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
