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
      <body className='scrollbar-thin scrollbar-track-primary scrollbar-thumb-brand scrollbar-thumb-rounded-full'>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (


            <div className='flex'>

              <div className='max-w-xs h-screen overflow-y-auto md:min-w-[20rem] bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-secondary_brand scrollbar-thumb-rounded-full'>
                {/* Sidebar */}
                <Sidebar />
              </div>

              {/* Client Provider -Thinking Notification */}
              <ClientProvider/>

              <div className='bg-primary flex-1' >{children}</div>

            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
