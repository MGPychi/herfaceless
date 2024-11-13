import {  getUserOrRedirectToLogin } from "@/lib/auth";

const DashBoardPage = async () => {
    const user = await getUserOrRedirectToLogin()

  return (
    <div>hello {user.email}</div>
  )
}

export default DashBoardPage;