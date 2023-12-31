export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";

export const currentUser = async () => {
	const session = await getServerSession(authOptions);
	return session.user;
};
