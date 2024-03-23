import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"

export default async function Admin() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  if (!session.user || !session.user?.email) {
    redirect("/login")
  }
  
  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/login")
  }

  return (
    <h1>Admin</h1>
  )
}
