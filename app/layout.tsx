import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google'; // importing inter google font 
import ActiveSectionContextProvider from '@/context/active-section-context';
// ---------------------------- imports ------------------------------------

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-ROOT OF THIS WEBPAGE-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

const inter = Inter({ subsets: ['latin'] }) // implementing latin font for our project

// title is shown next to favicon on the tab, description in shown in google
export const metadata = {
  title: 'Rene | Personal Portfolio',
  description: 'Rene is an aspiring full stack developer and programmer',
}

// divs are for background color ( currently set to white )
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth"> {/*!scroll-smooth ensures smooth scroll when clicking on navbar links*/}
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#ffffff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#ffffff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
