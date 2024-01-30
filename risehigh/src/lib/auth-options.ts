// import  bcrypt from 'bcryptjs';

// import { queryInstance } from '@/lib/query'
// import type { NextAuthOptions} from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import prisma from './prisma'


// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//     maxAge: 1 * 24 * 60 * 60, // 1 day
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         phonenumber: {
//           label: 'Phone Number',
//           type: 'text',
//           placeholder: 'Phone Number',
//         },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         const {phonenumber, password}  = credentials as {phonenumber: string, password: string}
//           const user = await prisma.user.findUnique({ where:{phonenumber: phonenumber}})
//         // const { data } = await queryInstance.post('/api/auth/login', {phonenumber, password})
//         // const user = data.data
//         if (user) {
//           const validPassword: boolean= await bcrypt.compare(password, user.password)
//           return  validPassword ? user : null
//         } else return null
//       },
//     }),
//     // ...add more providers here
//   ],

//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async jwt({ token, user, trigger, session }) {
//       // user is forwared from what is returned from the authorize function in the cred provider
//       // if (trigger === 'update') {
//       //   return { ...token, ...session.user }
//       // }
//       // user is forwared from what is returned from the authorize function in the cred provider
//       if (user) {
//         // token.accessToken = user.accessToken
//         token.id = user.id
//       }
//       return { ...token, ...user }
//     },

//     async session({ session, token, user }) {
//       // token is forwared from what is returned from the jwt callback

//       session.user = { ...token, name: token.name, ...session.user }
//       // session.accessToken = token.accessToken
//       // session.user.id  = token.id
//       return session
//     }
//     // async signIn({ user, account, profile, email, credentials }) {
//     //   return true
//     // },
//     // async redirect({ url, baseUrl }) {
//     //   // Allows relative callback URLs
//     //   if (url.startsWith('/dashboard')) return `${baseUrl}${url}`
//     //   // Allows callback URLs on the same origin
//     //   else if (new URL(url).origin === baseUrl) return url
//     //   return baseUrl
//     // },
// },
// }