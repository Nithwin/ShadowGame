import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's unique ID */
            id: string
            /** The user's role (ADMIN/USER) */
            role: string
            /** The user's current level */
            level: number
            /** The user's total xp */
            xp: number
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        role: string
        level: number
        xp: number
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: string
        level: number
        xp: number
    }
}
