import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div>

          {/* Sidebar */}
          {/* Client Provider -Thinking Notification */}

          <div className='bg-[#181818] flex-1' >{children}</div>

        </div>
      </body>
    </html>
  )
}
