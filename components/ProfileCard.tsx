import React from 'react'
import Image from "next/image";

const ProfileCard = () => {
    return (<div>
        <div className="group">
            <Image src="/user-avatar.png" alt="profile-pic" className="rounded-full" width={32} height={32}/>

            <div className="absolute hidden group-hover:block">
                <p>name</p>
            </div>
        </div>
    </div>)
}
export default ProfileCard
