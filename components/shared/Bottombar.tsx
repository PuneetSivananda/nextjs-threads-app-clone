"use client"

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Bottombar(){
    const pathname = usePathname()
    return (<section className="bottombar">
        <div className="bottombar_container">
            {/* only visible for mobile devices */}

            {sidebarLinks.map((link)=> {
                const isActive = (pathname.includes(link.route) && link.route.length>1) || pathname == link.route
                  return (<Link 
                    href={link.route}
                    key={link.label}
                    className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                  >
                    <Image 
                        src={link.imgURL}
                        alt={link.label}
                        width={24}
                        height={24}
                    />
                    <p className="text-light-1 max-lg:hidden">{link.label}</p>
                </Link>  
                    )})
                }
        </div>
    </section>)
}