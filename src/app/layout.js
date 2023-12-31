"use client";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import CartProvider from "@/contexts/Cart";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="preload"
				href="bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
				as="style"
			/>

			<SessionProvider>
				<CartProvider>
					<body>
						<Nav />
						<Toaster />
						{children}
					</body>
				</CartProvider>
			</SessionProvider>
		</html>
	);
}
