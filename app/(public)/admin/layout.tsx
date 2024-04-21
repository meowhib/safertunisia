import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"

export default async function AdminLayout({ children } : { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin")
  }

  if (!session.user || !session.user?.email) {
    redirect("/api/auth/signin")
  }
  
  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/api/auth/signin")
  }

  return (
    <div>
      {children}
    </div>
  )
}
