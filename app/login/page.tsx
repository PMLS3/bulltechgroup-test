"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Moon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authenticate } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must include uppercase, lowercase, number and special character"
    ),
})

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      const isValid = await authenticate(values.email, values.password)

      if (isValid) {
        toast({
          title: "Success",
          description: "Welcome back!",
          variant: "default",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Invalid credentials",
          description: "The email or password you entered is incorrect.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestClick = (action: string) => {
    toast({
      title: "Test Message",
      description: `This is only a test. ${action} feature is not implemented.`,
      variant: "default",
    })
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Message Interface */}
      <div className="hidden w-2/3  lg:flex items-center justify-center">
        <img src="/login.png" alt="Login illustration" className=" w-full" />
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full flex-col items-center justify-center bg-slate-950 px-6 lg:w-1/3">
        <div className="mb-8 flex items-center gap-2">
          <span className="text-2xl font-bold text-[#84cc16]">BullTech</span>
          {/* <Moon className="h-5 w-5 text-yellow-400" /> */}
        </div>

        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Log in to your account
            </h1>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email address
              </Label>
              <Input
                {...form.register("email")}
                placeholder="ex: johndoe@gmail.com"
                type="email"
                className="bg-[#1A1B1E] text-white"
                disabled={isLoading}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                {...form.register("password")}
                type="password"
                className="bg-[#1A1B1E] text-white"
                disabled={isLoading}
              />
              {form.formState.errors.password && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none text-white"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-sm text-[#84cc16] hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  handleTestClick("Forgot password")
                }}
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#84cc16] text-white hover:bg-[#65a30d]"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </Button>

            {/* <Button
              type="button"
              variant="outline"
              className="w-full border-gray-700 bg-[#1A1B1E] text-white hover:bg-[#2A2B2E]"
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </Button> */}
          </form>

          <div className="text-center text-sm text-white">
            Need an account?{" "}
            <Link
              href="#"
              className="text-[#84cc16] hover:underline"
              onClick={(e) => {
                e.preventDefault()
                handleTestClick("Create account")
              }}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
