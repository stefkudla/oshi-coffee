import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/oshi-logo-trans-bg.png'
import MobileNav from './MobileNav'
const Header: React.FC = () => {
  return (
    <nav className="">
      <div className="hidden w-full md:flex justify-between items-center px-16 py-3 bg-back-accent">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Image
                src={logo}
                layout={'fixed'}
                width={40}
                height={40}
                priority
              />
            </a>
          </Link>
          <ul className="flex gap-x-4 ml-6">
            <li className="nav-item font-semibold">
              <Link href="/" key="shop">
                <a>Shop</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" key="Subscriptions">
                <a>Subscriptions</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" key="Locations">
                <a>Locations</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" key="Learn">
                <a>Learn</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4">
          <Link href="/">
            <a className="nav-item">Subscribe</a>
          </Link>
          <Link href="/">
            <a className="nav-item">Sign in</a>
          </Link>
        </div>
      </div>
      <MobileNav />
    </nav>
  )
}
export default Header
