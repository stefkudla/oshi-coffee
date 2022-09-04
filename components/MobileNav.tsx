import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

import logo from '../public/images/oshi-logo-trans-bg.png'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

const NavItem = ({ title, path }: { title: string; path: string }) => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return (
    <div ref={parent}>
      <li className="nav-item flex justify-between items-center pl-4 pr-2 border-b">
        <Link href={path} key="shop">
          <a>{title}</a>
        </Link>
        <button
          onClick={reveal}
          aria-label={!show ? 'Expand Arrow' : 'Collapse Arrow'}
          title={!show ? 'Expand Arrow' : 'Collapse Arrow'}
          className={classNames('transition-transform', show && 'rotate-180')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
      {show && (
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad harum
          maxime quasi ipsa? Laboriosam, dolorum quas, velit nemo a officiis
          voluptate voluptatibus quae architecto dolorem sunt eius, magni
          ratione.
        </p>
      )}
    </div>
  )
}

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false)
  const reveal = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div className="w-full h-12 bg-back-accent flex md:hidden items-center justify-between py-8 px-3 border-b-fore-accent border-b">
      <button onClick={reveal} aria-label="Open menu" title="Menu Icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link href="/">
        <a>
          <Image src={logo} layout={'fixed'} width={38} height={38} priority />
        </a>
      </Link>
      <button aria-label="Toggle shopping cart" title="Cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
      {navOpen && (
        <div
          className={classNames(
            'absolute flex flex-col -translate-x-0 top-0 left-0 h-full w-full border-r transition-transform backdrop-opacity-5',
            navOpen && 'backdrop-blur-lg backdrop-filter'
          )}
        >
          <div className="relative w-56 h-full bg-white z-50">
            <button
              onClick={reveal}
              aria-label="Close Menu"
              title="Menu Icon"
              className={classNames(
                'absolute -right-8 top-2 z-50',
                navOpen && 'text-blue-300'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul className="flex flex-col ">
              <NavItem title="Shop" path="/shop" />
              <NavItem title="Subscriptions" path="/subscriptions" />
              <NavItem title="Locations" path="/locations" />
              <NavItem title="Learn" path="/learn" />
              <NavItem title="Subscribe" path="/subscribe" />
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
export default MobileNav
