import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Admin() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }


  console.log("This is the session: ", session)
  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/login")
  }

  return (
    <h1>Admin</h1>
  )
}
