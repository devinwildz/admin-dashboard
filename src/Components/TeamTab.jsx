// TeamTab.js
import TeamCard from './TeamCard';

function TeamTab() {
    const TeamCardData = [
        {
            title: 'Vue Developers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/vue-label.png',
            tagList: ['Vue', 'MUI'],
        },
        {
            title: 'React Developers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/react-label.png',
            tagList: ['React', 'MUI'],
        },
        {
            title: 'Creative Designers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/xd-label.png',
            tagList: ['Sketch', 'XD'],
        },
        {
            title: 'React Developers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/react-label.png',
            tagList: ['React', 'MUI'],
        },
        {
            title: 'Creative Designers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/xd-label.png',
            tagList: ['Sketch', 'XD'],
        },
        {
            title: 'Creative Designers',
            description:
                'We don’t make assumptions about the rest of your technology stack, so you can develop new features...',
            avatars: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
            ],
            icon: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/xd-label.png',
            tagList: ['Sketch', 'XD'],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 gap-4">
            {TeamCardData.map((team, idx) => (
                <TeamCard key={idx} {...team} />
            ))}
        </div>
    );
}

export default TeamTab;
