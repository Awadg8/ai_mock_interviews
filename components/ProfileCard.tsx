"use client"
import React, { useState } from 'react';
import Image from "next/image";

interface ProfileCardProps {
    userName: string;
}

const ProfileCard = ({ userName }: ProfileCardProps) => {
    const [showDetails, setShowDetails] = useState(false);

    // Toggle details on click/tap for all devices
    const handleToggle = () => setShowDetails((prev) => !prev);
    const handleClose = () => setShowDetails(false);

    return (
        <div className="relative">
            {/* Avatar */}
            <div
                className="cursor-pointer flex items-center justify-center"
                onClick={handleToggle}
                tabIndex={0}
                aria-label="Show profile details"
            >
                <Image
                    src="/user-avatar.png"
                    alt="profile-pic"
                    className="rounded-full border-2 border-primary-200 shadow-lg transition-transform duration-200"
                    width={40}
                    height={40}
                />
            </div>

            {/* Details Card */}
            {showDetails && (
                <div
                    className="absolute right-0 z-20 mt-2 min-w-[200px] max-w-xs p-4 rounded-xl shadow-xl bg-card border border-primary-200 animate-fadeIn"
                    onClick={handleClose}
                >
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/user-avatar.png"
                            alt="profile-pic"
                            className="rounded-full border-2 border-primary-200"
                            width={64}
                            height={64}
                        />
                        <p className="text-lg font-semibold text-primary-100 mt-2">{userName}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
