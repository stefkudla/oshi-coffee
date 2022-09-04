import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/oshi-logo-trans-bg.png'
import MobileNav from './MobileNav'

const MenuSubLink = ({ title }: { title: string }) => {
  return (
    <li>
      <Link href="/" key={title}>
        <a className="whitespace-nowrap hover:border-b hover:border-b-zinc-300">
          {title}
        </a>
      </Link>
    </li>
  )
}

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
          <ul className="flex gap-x-6 ml-6">
            <li className="relative group">
              <Link href="/" key="shop">
                <a>Shop</a>
              </Link>
              <ul className="absolute hidden group-hover:flex flex-col gap-y-3 bg-back-accent w-fit px-6 pt-8 pb-4 rounded text-sm">
                <MenuSubLink title="Coffee Subscriptions" />
                <MenuSubLink title="Ceramic Mugs" />
                <MenuSubLink title="Roasted Beans" />
                <MenuSubLink title="Unroasted Beans" />
              </ul>
            </li>
            <li className="relative group">
              <Link href="/" key="Subscriptions">
                <a>Subscriptions</a>
              </Link>
              <ul className="absolute hidden group-hover:flex flex-col gap-y-3 bg-back-accent w-fit px-6 pt-8 pb-4 rounded text-sm">
                <MenuSubLink title="Monthly" />
                <MenuSubLink title="Tasting Plan" />
                <MenuSubLink title="Roasters Choice" />
                <MenuSubLink title="Specialty Club" />
                <MenuSubLink title="Gift a Subscription" />
              </ul>
            </li>
            <li className="relative group">
              <Link href="/" key="Locations">
                <a>Locations</a>
              </Link>
              <ul className="absolute hidden group-hover:flex flex-col gap-y-3 bg-back-accent w-fit px-6 pt-8 pb-4 rounded text-sm">
                <MenuSubLink title="North America" />
                <MenuSubLink title="United Kingdom" />
                <MenuSubLink title="Eastern Asia" />
                <MenuSubLink title="South America" />
                <MenuSubLink title="Europe" />
              </ul>
            </li>
            <li className="relative group">
              <Link href="/" key="Learn">
                <a>Learn</a>
              </Link>
              <ul className="absolute hidden group-hover:flex flex-col gap-y-3 bg-back-accent w-fit px-6 pt-8 pb-4 rounded text-sm">
                <MenuSubLink title="Blog" />
                <MenuSubLink title="Brewing Tutorials" />
                <MenuSubLink title="Roasting Tutorials" />
                <MenuSubLink title="Choosing a Coffee" />
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4">
          <Link href="/">
            <a className="">Subscribe</a>
          </Link>
          <Link href="/">
            <a className="">Sign in</a>
          </Link>
        </div>
      </div>
      <MobileNav />
    </nav>
  )
}
export default Header
