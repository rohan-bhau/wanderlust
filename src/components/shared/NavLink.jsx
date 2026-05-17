'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = pathName===href
  return (
    <Link
      href={href}
      className={`${isActive ? "text-cyan-500 border-b border-cyan-500 font-semibold text-md" : "font-semibold text-md text-black"}`}
    >
      {children}
    </Link>
  );
}

export default NavLink
