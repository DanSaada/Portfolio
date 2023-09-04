// next image
import Image from "next/image";

// next link
import Link from "next/link"

// components
import Socials from "../components/Socials"

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] lg:px-2 lg:h-[90px] md:px-2 md:h-[90px] sm:px-2 sm:h-[90px] xs:px-2 xs:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center gap-y-6 py-8">
        {/* logo */}
        <Link href={'/'}>
          <Image src={'/dan-saada-logo10.png'}
                 width={220} 
                 height={48} 
                 alt="" 
                 priority={true} />
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
