import React from 'react'

function Sidebar() {
  return (
    <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
        <div className='flex flex-col justify-start items-center'>
            <h1 className='text-lg text-center cursor-pointer font-bold text-nureply-blue-full border-b border-gray-100 pb-4 w-full'>
                Change Layout
            </h1>
            <div className='my-4 border-b border-gray-100 pb-4'>
                <div className='inline-block mb-2 justify-start items-center gap-4 px-5 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto'>
                    <div className='p-1 text-base text-gray-600 hover:text-nureply-blue font-semibold'>
                        <input type='radio' id='layout-1' name='layout' value='layout' className='h-3' checked /><label htmlFor='layout-1'> Layout 1</label>
                    </div>
                    <div className='p-1 text-base text-gray-600 hover:text-nureply-blue font-semibold'>
                        <input type='radio' id='layout-2' name='layout' value='layout' className='h-3' /><label htmlFor='layout-2'> Layout 2</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar