import React from 'react'
import DetailsCard from './DetailsCard'
import Timeline from './Timeline'
import InfoCard from './InfoCard'
const ProfileTab = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between'>
                <DetailsCard />
                <Timeline />
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <InfoCard
                    title="Connections"
                    type="connections"
                    items={[
                        { name: "Cecilia Payne", subtitle: "45 Connections", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
                        { name: "Curtis Fletcher", subtitle: "1.32k Connections", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
                        { name: "Alice Stone", subtitle: "1.32k Connections", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
                        { name: "Darrell Barnes", subtitle: "1.32k Connections", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
                        { name: "Curtis Fletcher", subtitle: "1.32k Connections", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
                        // ...
                    ]}
                />

                <InfoCard
                    title="Teams"
                    type="teams"
                    items={[
                        {
                            name: 'React Developers',
                            subtitle: '72 Members',
                            badge: 'Developer',
                            badgeColor: 'bg-red-600',
                            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        },
                        {
                            name: 'Support Team',
                            subtitle: '122 Members',
                            badge: 'Support',
                            badgeColor: 'bg-purple-600',
                            icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
                        },
                        {
                            name: 'UI Designers',
                            subtitle: '7 Members',
                            badge: 'Designer',
                            badgeColor: 'bg-cyan-600',
                            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                        },
                        {
                            name: 'Vue.js Developers',
                            subtitle: '289 Members',
                            badge: 'Developer',
                            badgeColor: 'bg-red-600',
                            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                        },
                        {
                            name: 'Digital Marketing',
                            subtitle: '24 Members',
                            badge: 'Marketing',
                            badgeColor: 'bg-gray-600',
                            icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
                        },
                       
                    ]}
                />
            </div>
        </>
    )
}

export default ProfileTab