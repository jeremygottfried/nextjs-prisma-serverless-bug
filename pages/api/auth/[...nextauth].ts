import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from '../../../lib/prisma'

const options = {
  debug: true,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  database: process.env.DATABASE_URL,
  site: process.env.NEXTAUTH_URL,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
