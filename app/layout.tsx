import { SessionProvider } from '../components/SessionProvider'
import Sidebar from '../components/Sidebar'
import { getServerSession } from "next-auth"
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  // console.log(session);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (


            <div className='flex'>

              <div className='max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                {/* Sidebar */}
                <Sidebar />
              </div>

              {/* Client Provider -Thinking Notification */}
              <ClientProvider/>

              <div className='bg-[#181818] flex-1' >{children}</div>

            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
