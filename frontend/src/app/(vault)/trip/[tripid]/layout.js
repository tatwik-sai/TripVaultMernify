"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useParams, usePathname } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { navItems } from './nav_items';

export default function TripLayout({ children }) {
  const { tripId } = useParams();
  const pathname = usePathname();

  return (
    <>
            <div className='flex flex-col md:flex-row bg-black/50 h-screen w-full'>
                {/* Sidebar */}
                <div className='hidden md:flex flex-col justify-between border-r border-[#2a2a2a] items-start h-screen w-60 md:w-70'>
                    {/* Logo */}
                    <Link href={"/console"} className="flex items-center gap-[2px] pr-10 pl-3 pt-5 mb-6">
                        {/* <Image src="/logo.svg" alt="TripVault" width={45} height={45} /> */}
                        <h1 className="text-2xl font-bold text-white">Trip</h1>
                        <h1 className="text-2xl font-bold text-purple-1">Vault</h1>
                    </Link>
                    {/* Navigation Items */}
                    <div className="flex flex-col justify-between w-full p-2 h-full">
                        <div className='flex flex-col h-full'>
                            <ul className="flex flex-col gap-3 mr-2 ml-1 flex-1">
                                {navItems.map((item) => {
                                    const path = `/trip/${tripId}${item.href}`;
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={path}
                                                className={`flex gap-2 items-center rounded-lg p-2 transition-colors ${pathname === path
                                                    ? "bg-purple-1"
                                                    : "hover:bg-white/10"
                                                    } `}
                                            >
                                                <item.icon size={22} className={`${pathname === path ? "invert brightness-0" : "text-purple-1"}`} />
                                                <span className="text-white text-md font-medium">{item.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='flex-1 bg-dark-1'>
                    {children}
                </div>
            </div>
        </>
  );
}
