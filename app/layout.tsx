import { SessionProvider } from '../components/SessionProvider'
import Sidebar from '../components/Sidebar'
import { getServerSession } from "next-auth/next"
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className='flex'>

            <div className='max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
              {/* Sidebar */}
              <Sidebar />
            </div>
            {/* Client Provider -Thinking Notification */}

            <div className='bg-[#181818] flex-1' >{children}</div>

          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
