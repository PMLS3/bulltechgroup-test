import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const companies = [
  { name: "Okano", location: "Osaka, Japan", logo: "O" },
  { name: "Nitro Inc.", location: "Tokyo, Japan", logo: "N" },
  { name: "Slicer", location: "Los Angeles, CA", logo: "S" },
  { name: "Flashlite", location: "Berlin, Germany", logo: "F" },
  { name: "Spiral", location: "Melbourne, Australia", logo: "S" },
]

export function CompanyList() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-slate-200">
          Companies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="bg-slate-800">
                  <span className="text-slate-100">{company.logo}</span>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none text-slate-100">
                    {company.name}
                  </p>
                  <p className="text-sm text-slate-400">{company.location}</p>
                </div>
              </div>
              <button className="text-sm bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700 text-slate-100">
                View
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
