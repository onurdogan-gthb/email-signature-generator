import React from 'react'
import { SetStateAction, useState } from 'react';

import Image from 'next/image'

import iconLinkedIn from '../assets/iconLinkedIn.png';
import iconGitHub from '../assets/iconGitHub.png';
import iconTwitter from '../assets/iconTwitter.png';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [linkLinkedIn, setLinkLinkedIn] = useState('');
  const [linkGitHub, setLinkGitHub] = useState('');
  const [linkTwitter, setLinkTwitter] = useState('');

  const [photo, setPhoto] = useState('');

  const onPhotoChange = (photo: any) => {
    if (photo.target.files && photo.target.files[0]) {
      setPhoto(URL.createObjectURL(photo.target.files[0]));
    }
  }

  const [layout, setLayout] = useState('');
  const handleLayoutChange = async (selectedTemplate: SetStateAction<string>) => {
    setLayout(selectedTemplate);
  };

  return (
    <div className='grid gap-48 md:grid-cols-3'>
      <div>
        <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
          <div className='flex flex-col justify-start items-center'>
            <h1 className='text-lg text-center cursor-pointer font-bold text-nureply-blue-full border-b border-gray-100 pb-4 w-full'>
              Change Layout
            </h1>
            <div className='my-4 border-b border-gray-100 pb-4'>
              <div className='inline-block mb-2 justify-start items-center gap-4 px-5 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto'>
                <div className='p-1 text-base text-gray-600 hover:text-nureply-blue font-semibold'>
                  <input onClick={() => handleLayoutChange('layout-default')} type='radio' id='layout-1' name='layout' value='layout' className='h-3' checked /><label htmlFor='layout-1'> Default</label>
                </div>
                <div className='p-1 text-base text-gray-600 hover:text-nureply-blue font-semibold'>
                  <input onClick={() => handleLayoutChange('layout-foursquare')} type='radio' id='layout-2' name='layout' value='layout' className='h-3' /><label htmlFor='layout-2'> Foursquare</label>
                </div>
              </div>
            </div>
            <div className='my-4 border-b border-gray-100 pb-4'>
              <label htmlFor='name' className='p-1 text-base text-gray-600 font-semibold'>Name</label><input
                className='text-black border-2'
                type='text'
                id='name'
                name='name'
                onChange={(name) => setName(name.target.value)}
                value={name}
              />
              <label htmlFor='profession' className='p-1 text-base text-gray-600 font-semibold'>Profession</label><input
                className='text-black border-2'
                type='text'
                id='profession'
                name='profession'
                onChange={(profession) => setProfession(profession.target.value)}
                value={profession}
              />
              <label htmlFor='phone' className='p-1 text-base text-gray-600 font-semibold'>Phone</label><input
                className='text-black border-2'
                type='text'
                id='phone'
                name='phone'
                onChange={(phone) => setPhone(phone.target.value)}
                value={phone}
              />
              <label htmlFor='email' className='p-1 text-base text-gray-600 font-semibold'>Email</label><input
                className='text-black border-2'
                type='text'
                id='email'
                name='email'
                onChange={(email) => setEmail(email.target.value)}
                value={email}
              />
              <label htmlFor='link' className='p-1 text-base text-gray-600 font-semibold'>Link</label><input
                className='text-black border-2'
                type='text'
                id='link'
                name='link'
                onChange={(link) => setLink(link.target.value)}
                value={link}
              />
              <label htmlFor='link-LinkedIn' className='p-1 text-base text-nureply-blue font-semibold'>LinkedIn</label><input
                className='text-black border-2'
                type='text'
                id='link-LinkedIn'
                name='link-LinkedIn'
                onChange={(linkLinkedIn) => setLinkLinkedIn(linkLinkedIn.target.value)}
                value={linkLinkedIn}
              />
              <label htmlFor='link-GitHub' className='p-1 text-base text-nureply-blue font-semibold'>GitHub</label><input
                className='text-black border-2'
                type='text'
                id='link-GitHub'
                name='link-GitHub'
                onChange={(linkGitHub) => setLinkGitHub(linkGitHub.target.value)}
                value={linkGitHub}
              />
              <label htmlFor='link-Twitter' className='p-1 text-base text-nureply-blue font-semibold'>Twitter</label><input
                className='text-black border-2'
                type='text'
                id='link-Twitter'
                name='link-Twitter'
                onChange={(linkTwitter) => setLinkTwitter(linkTwitter.target.value)}
                value={linkTwitter}
              />
            </div>
            <div>
              <label htmlFor='photo' className='p-1 text-base text-nureply-blue hover:text-nureply-blue-full font-semibold'>Upload Photo</label><input
                className='hidden'
                type='file'
                id='photo'
                name='photo'
                accept='image/png, image/jpeg'
                onChange={onPhotoChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        {layout === 'layout-default' ? (
          <LayoutDefault />
        ) : layout === 'layout-foursquare' ? (
          <LayoutFoursquare />
        ) : null}
      </div>
    </div>
  )



  function LayoutDefault() {
    return (
      <div className='flex m-9 bg-white rounded-full overflow-hidden'>
        <div className='border-2 rounded-full overflow-hidden m-3'>
          <Image
            src={photo}
            width={270}
            height={270}
            alt=''
          />
        </div>
        <div className='p-3'>
          <div className='p-3'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <h2 className='text-lg'>{profession}</h2>
            <hr></hr>
          </div>
          <div className='p-3'>
            <p>{phone}</p>
            <a className='text-nureply-blue-full hover:text-nureply-blue' href=''>{email}</a>
            <hr></hr>
            <div>
              <a className='text-nureply-blue-full hover:text-nureply-blue' href=''>{link}</a>
              <hr></hr>
            </div>
          </div>
          <div>
            <div className='flex m-0 pl-3'>
              <div className='pr-3'>
                <a href={linkLinkedIn}>
                  <Image
                    src={iconLinkedIn}
                    width={30}
                    height={30}
                    alt=''
                  />
                </a>
              </div>
              <div className='pr-3'>
                <a href={linkGitHub}>
                  <Image
                    src={iconGitHub}
                    width={30}
                    height={30}
                    alt=''
                  />
                </a>
              </div>
              <div className='pr-3'>
                <a href={linkTwitter}>
                  <Image
                    src={iconTwitter}
                    width={30}
                    height={30}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function LayoutFoursquare() {
    return (
      <div className='flex m-9 bg-white rounded-3xl overflow-hidden'>
        <div className='p-10'>
          <div className='p-3'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <h2 className='text-lg'>{profession}</h2>
            <hr></hr>
          </div>
          <div className='p-3'>
            <p>{phone}</p>
            <a className='text-nureply-blue-full hover:text-nureply-blue' href=''>{email}</a>
            <hr></hr>
          </div>
          <div className='ml-3'>
            <div>
              <a href={linkLinkedIn}>
                <Image
                  src={iconLinkedIn}
                  width={30}
                  height={30}
                  alt=''
                />
              </a>
            </div>
            <div className='pt-2'>
              <a href={linkGitHub}>
                <Image
                  src={iconGitHub}
                  width={30}
                  height={30}
                  alt=''
                />
              </a>
            </div>
            <div className='pt-2'>
              <a href={linkTwitter}>
                <Image
                  src={iconTwitter}
                  width={30}
                  height={30}
                  alt=''
                />
              </a>
            </div>
            <div>
              <hr className='mt-2'></hr>
              <a className='text-nureply-blue-full hover:text-nureply-blue' href=''>{link}</a>
            </div>
          </div>
        </div>
        <div className='border-2 rounded-3xl overflow-hidden m-12 ml-48 float-right'>
          <Image
            src={photo}
            width={300}
            height={300}
            alt=''
          />
        </div>
      </div>
    )
  }
}
