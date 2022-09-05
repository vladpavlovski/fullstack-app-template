import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'

const Header = () => {
  const { user } = useUser()
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link href="/">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              className="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {user && (
            <div className="itemx-center mr-5 flex justify-center rounded-md bg-blue-500 py-1 px-3 capitalize text-white">
              <Link href="/admin">
                <a>+ Create</a>
              </Link>
            </div>
          )}
          {user ? (
            <div className="flex items-center space-x-5">
              <Link href="/api/auth/logout">
                <a className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                  Logout
                </a>
              </Link>
              <div className="relative block h-12 w-12">
                <Image
                  alt="profile"
                  className="rounded-full"
                  src={user.picture}
                  layout="fill"
                />
              </div>
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                Login
              </a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
