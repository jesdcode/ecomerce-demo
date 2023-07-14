import Image from "next/image";
import Link from "next/link"

import React from 'react'

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white
     z-50 shadow ">
        <Link href="/">
          <Image
            src="https://assets.turbologo.com/assets/features/color-variations-75f88d4e7e39545e847bf2583609577ca44b4df35cc998c54050661eb20586f5.svg"
            width={70}
            height={70}
            alt="logo"
          />
        </Link>
        <div className="flex items-center space-x-2.5 text-sm ">
            <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600
            hover:bg-transparent hover:text-black">
              log in
            </button>
            <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white
            hover:border-transparent">
              sing up
            </button>
        </div>
    </header>
  )
}

export default Header