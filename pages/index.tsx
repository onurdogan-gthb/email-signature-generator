
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components';
import { LayoutDefault } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid gap-48 md:grid-cols-3'>
      <div>
        <Sidebar />
      </div>
      <div className='col-span-2 bg-white'>
        <LayoutDefault />
      </div>
    </div>
  )
}
