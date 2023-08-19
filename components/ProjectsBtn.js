// next img
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'} className="relative w-[135px] h-[135px] flex justify-center items-center 
                                      bg-circleStar bg-cover bg-center bg-no-repeat group lg:bottom-[20%]">
        <Image src={'/rounded-text.png'} 
               width={101} 
               height={100} 
               alt="" 
               className="animate-spin-slow w-full h-full max-w-[100px] max-h-[110px]" />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
