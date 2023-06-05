import NextAuth from 'next-auth';
import AzureADProvider from "next-auth/providers/azure-ad";
import axios from 'axios';
import { setCookie } from 'nookies';


const api = axios.create({
  baseURL: "http://localhost:3333"
})


export default NextAuth({
  providers: [
    AzureADProvider({
      //@ts-ignore
      clientId: process.env.AZURE_AD_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      const allowToSignIn = await api.get(`/users/${profile?.preferred_username}`)

      if (allowToSignIn?.data.email === profile?.preferred_username) {
        return true
      } else {
        return false
      }



    },
    async session({ session, user, token }) {
      return session
    }
  },
  secret: process.env.JWT_SECRET
});