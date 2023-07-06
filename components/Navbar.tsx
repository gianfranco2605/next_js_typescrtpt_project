import { NavLinks } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";


const Navbar = () => {
  const session = null;
  return (
    <nav className='flexBetween navbar'>
      <div className='flex flexStart gap-10'>
        <Link href="/">
          <Image 
            src="/logo.svg"
            width={115}
            height={43}
            alt="Flessibile"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex-center gap-4">
        {session ? (
          <>
            UserPhoto

            <Link href={"/create-project"}>
              Condividi Progetti
            </Link>
          </>
        ) : (
          <AuthProviders />
          
        )} 
      </div>
    </nav>
  )
}

export default Navbar