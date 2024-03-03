import { Post } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
interface User {
    username : string | null
    posts?: Post[]
}
  interface Session {
    user: User & {
      username: string

    }
    token: {
        username: string | null
        posts?: Post[];
    }
  }
}