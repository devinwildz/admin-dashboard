import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegMessage } from 'react-icons/fa6';

function ProjectTab() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const toggleDropdown = (index) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    const projectTabs = [
        {
            image:
                'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/social-label.png',
            title: 'Social Banners',
            client: 'Christian Jimenez',
            budgetUsed: '$24.8k',
            budgetTotal: '$18.2k',
            startDate: '14/2/21',
            deadline: '28/2/22',
            description:
                'We are Consulting, Software Development and Web Development Services.',
            hoursUsed: 380,
            hoursTotal: 244,
            daysLeft: 28,
            taskDone: 290,
            taskTotal: 344,
            percentComplete: 95,
            members: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
            ],
            memberCount: 280,
            comments: 15,
        },
        {
            image:
                'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/vue-label.png',
            title: 'Social Banners',
            client: 'Christian Jimenez',
            budgetUsed: '$24.8k',
            budgetTotal: '$18.2k',
            startDate: '14/2/21',
            deadline: '28/2/22',
            description:
                'We are Consulting, Software Development and Web Development Services.',
            hoursUsed: 380,
            hoursTotal: 244,
            daysLeft: 28,
            taskDone: 290,
            taskTotal: 344,
            percentComplete: 95,
            members: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
            ],
            memberCount: 280,
            comments: 15,
        },
        {
            image:
                'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/brands/react-label.png',
            title: 'Social Banners',
            client: 'Christian Jimenez',
            budgetUsed: '$24.8k',
            budgetTotal: '$18.2k',
            startDate: '14/2/21',
            deadline: '28/2/22',
            description:
                'We are Consulting, Software Development and Web Development Services.',
            hoursUsed: 380,
            hoursTotal: 244,
            daysLeft: 28,
            taskDone: 290,
            taskTotal: 344,
            percentComplete: 95,
            members: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
            ],
            memberCount: 280,
            comments: 15,
        },
    ];

    return (
        <div className="grid mt-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTabs.map((project, index) => (
                <div
                    key={index}
                    className="bg-gray-100 dark:bg-[#2e3655] group relative cursor-pointer dark:text-white p-5 rounded-lg shadow-lg w-[100%]"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                            <img
                                className="w-10 h-10  rounded-full"
                                src={project.image}
                                alt=""
                            />
                            <div>
                                <h2 className="text-lg group-hover:text-purple-500 dark:text-gray-300 font-semibold">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Client: {project.client}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => toggleDropdown(index)}
                            className=" hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full"
                        >
                            <BsThreeDotsVertical />
                        </button>
                        {activeDropdown === index && (
                            <div className="absolute right-5 top-16 w-48 bg-gray-200 dark:bg-[#2c3550] rounded-md shadow-lg z-10">
                                <ul className="text-sm">
                                    <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        Rename Project
                                    </li>
                                    <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        View Details
                                    </li>
                                    <li className="px-4 py-2 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e223a] cursor-pointer">
                                        Add to favorites
                                    </li>
                                    <li className="px-4 py-2 text-red-500 dark:hover:bg-[#1e223a] hover:bg-gray-300 cursor-pointer">
                                        Leave Project
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center bg-[#1e2640] p-3 rounded-lg mt-4">
                        <div className=" flex-col">
                            <div className="flex items-center gap-1">
                                <div className="text-gray-300 font-semibold">
                                    {project.budgetUsed}
                                </div>
                                <div className=" text-gray-400"> / {project.budgetTotal}</div>
                            </div>
                            <div className="text-sm mt-1 text-gray-400">Total Budget</div>
                        </div>

                        <div className="text-sm text-right">
                            <p className="text-gray-400">
                                <span className="text-gray-300">Start Date:</span>{' '}
                                {project.startDate}
                            </p>
                            <p className="text-gray-400 mt-1">
                                <span className="text-gray-300">Deadline:</span>{' '}
                                {project.deadline}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">{project.description}</p>

                    <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm">
                                <span className="font-semibold">All Hours:</span>{' '}
                                {project.hoursUsed}/{project.hoursTotal}
                            </p>
                            <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">
                                {project.daysLeft} Days left
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <p>
                                Task: {project.taskDone}/{project.taskTotal}
                            </p>
                            <p>{project.percentComplete}% Completed</p>
                        </div>

                        <div className="w-full h-2 bg-gray-700 rounded-full mb-4">
                            <div
                                className="h-2 bg-violet-500 rounded-full"
                                style={{ width: `${project.percentComplete}%` }}
                            ></div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                {project.members.map((avatar, i) => (
                                    <img
                                        key={i}
                                        src={avatar}
                                        className={`w-8 h-8 rounded-full border-2 border-[#1e1e2f] ${i !== 0 ? '-ml-2' : ''
                                            }`}
                                        alt="avatar"
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-400">
                                    {project.memberCount} Members
                                </span>
                            </div>
                            <div className="text-gray-400 flex items-center gap-2 text-md">
                                <FaRegMessage className="text-lg" />
                                {project.comments}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectTab;
