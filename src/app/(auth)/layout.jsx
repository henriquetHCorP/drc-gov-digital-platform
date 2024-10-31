import '.././globals.css'; 
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs"
import Loader from "../../components/Loader"

export const metadata = {
    title: "DRC Gov Digital Platform",
    description: "A reliable source of information pertaining to Government members",
}

export default function RootLayout ({children}) {
    return ( 
        <ClerkProvider>
        <html lang="en">
            <body>
            <ClerkLoading>
            <Loader />
            </ClerkLoading>
              <ClerkLoaded>{children}</ClerkLoaded>
                </body>
        </html>
        </ClerkProvider>
    )
}