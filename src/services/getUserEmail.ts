import { authOptions } from "@/auth/authOptions";
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
