import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Admin dashboard",
};

const Layout = async ({children}:{children:ReactNode}) => {
    
  return (
    <sideb
    <main className='px-4 py-4'>
        {children}
    </main>
  )
}

export default Layout