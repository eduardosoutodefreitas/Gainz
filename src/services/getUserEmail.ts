import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getUserEmail = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  return {
    userEmail,
    session,
  };
};

export default getUserEmail;
