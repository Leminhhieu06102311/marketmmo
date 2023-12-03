import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProviderRedux from '@/redux/Provider'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ProviderRedux>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ProviderRedux>
      </body>

    </html>

  );
}
