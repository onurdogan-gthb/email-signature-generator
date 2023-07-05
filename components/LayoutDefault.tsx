import React from 'react'
import Image from 'next/image'

function LayoutDefault() {
    return (
        <div className='flex m-9'>
            <div className='border-2'>
                <Image
                    src=''
                    width={270}
                    height={270}
                    alt=''
                />
            </div>
            <div className='p-3'>
                <div className='p-3'>
                    <h1 className='text-3xl font-bold'>Name Surname</h1>
                    <h2 className='text-lg'>Profession</h2>
                </div>
                <hr></hr>
                <div className='p-3'>
                    <p>+00 123 456 7890</p>
                    <p>email@email.com</p>
                    <a className='text-nureply-blue-full hover:text-nureply-blue' href=''>www.company.com</a>
                </div>
                <hr></hr>
                <div className='flex p-3'>
                    <div className='pt-3 pr-3'>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt=''
                        />
                    </div>
                    <div className='pt-3 pr-3'>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt=''
                        />
                    </div>
                    <div className='pt-3 pr-3'>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt=''
                        />
                    </div>
                    <div className='pt-3 pr-3'>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault