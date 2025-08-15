import {isAuthenticated, signOut} from "@/lib/actions/auth.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import React, {ReactNode} from "react";
import ProfileCard from "@/components/ProfileCard";

const Rootlayout = async ({children}: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    const user = await getCurrentUser();

    if (!isUserAuthenticated) redirect("/sign-in");

    // Wrap signOut to match the expected signature
    const handleSignOut = async (formData: FormData) => {
        'use server';
        await signOut();
    };

    return (
        <div className="root-layout">
            <nav className="flex justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
                    <h2 className="text-primary-100">PrepWise</h2>
                </Link>

                <div className="flex items-center gap-3">
                    <form action={handleSignOut} className="cursor-pointer">
                        <button
                            type="submit"
                            className="hover:bg-white/25 px-4 py-2 rounded-3xl transition-all cursor-pointer"
                        >
                            <span className="hidden md:block">Log Out</span>
                            <Image src="/logout.png" alt="logout icon" width={24} height={24} className="md:hidden"/>
                        </button>
                    </form>
                    <div className="cursor-pointer">
                        <ProfileCard userName={user?.name || ""} />
                    </div>
                </div>

            </nav>

            {children}
        </div>
    );
};

export default Rootlayout;
