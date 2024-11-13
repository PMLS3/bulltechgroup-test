import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const transactions = [
  {
    customer: "Okano",
    amount: "$2823.12",
    date: "Oct 19, 2023",
    method: "Credit card",
    status: "Complete",
  },
  {
    customer: "Nitro Inc.",
    amount: "$1276.11",
    date: "Oct 18, 2023",
    method: "Stripe",
    status: "Complete",
  },
  {
    customer: "Flashlite",
    amount: "$3891.45",
    date: "Oct 17, 2023",
    method: "Bank account",
    status: "Complete",
  },
]

export function RecentTransactions() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800">
              <TableHead className="text-slate-300">Customer</TableHead>
              <TableHead className="text-slate-300">Amount</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.customer} className="border-slate-800">
                <TableCell className="font-medium text-slate-100">
                  {transaction.customer}
                </TableCell>
                <TableCell className="text-slate-100">
                  {transaction.amount}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400">
                    {transaction.status}
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
