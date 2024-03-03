import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";
import dotenv from "dotenv";


dotenv.config(); 

export const authOptions: NextAuthOptions = {
  pages: {
   signIn : '/'
  },
providers: [
  CredentialsProvider({
   
    name: "Credentials",
    credentials: {
      username: { label: "username", type: "username"},
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      if (!credentials?.username || !credentials?.password) {
        throw new Error('Please enter an email and password')
      }
    
      const existingUser = await db.user.findFirst ({
        where: {username: credentials?.username},
        include: {
          posts: true, // Inclure directement les posts dans la requête
        },
      });
      if (!existingUser) {
        throw new Error('No user found')
      }

      const passwordMatch = await compare (credentials.password, existingUser.password);

      if (!passwordMatch) {
        throw new Error('Incorrect password')
      }

      return {
        id:  `${existingUser.id}`,
        username: existingUser.username,
        email: existingUser.email,
        posts: existingUser.posts || [],
      }
    }
  })
],
secret: process.env.NEXTAUTH_SECRET,
session: {
  strategy : 'jwt',
  maxAge: 24 * 60 * 60
},
debug: process.env.NODE_ENV === "development",

callbacks: {
  async jwt ({token, user}) {
    if (user) {
      return {
        ...token,
        username: user.username,
        posts: user.posts || [],
      };
    }
    return token
  },
  async session ({ session, token}) {
    return {
      ...session,
      user: {
        ...session.user,
        username: token.username,
        posts: token.posts || [],
      }
    };
  },
}
}