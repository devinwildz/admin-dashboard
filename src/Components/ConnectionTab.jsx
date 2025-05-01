import { FaUserCheck } from 'react-icons/fa6';
import { FaEnvelope, FaUserPlus } from 'react-icons/fa';
function ConnectionTab() {
  const users = [
    {
      name: 'Mark Gilbert',
      role: 'UI Designer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      skills: ['Figma', 'Sketch'],
      projects: 18,
      tasks: 834,
      connections: 129,
      connected: true,
    },
    {
      name: 'Ava Thompson',
      role: 'UX Researcher',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      skills: ['Notion', 'Miro'],
      projects: 12,
      tasks: 692,
      connections: 104,
      connected: false,
    },
    {
      name: 'Liam Parker',
      role: 'Frontend Dev',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      skills: ['React', 'Tailwind'],
      projects: 25,
      tasks: 1043,
      connections: 201,
      connected: true,
    },
    {
      name: 'Sophia Lee',
      role: 'Graphic Designer',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      skills: ['Illustrator', 'Photoshop'],
      projects: 9,
      tasks: 500,
      connections: 78,
      connected: false,
    },
    {
      name: 'Noah Carter',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      skills: ['Jira', 'Confluence'],
      projects: 15,
      tasks: 880,
      connections: 134,
      connected: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 ">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-[#2e3655] text-white rounded-xl p-5 w-full shadow-md flex flex-col items-center gap-3 relative"
        >
          <img
            src={user.image}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-[#00e0ff30]"
          />
          <div className="text-center">
            <h3 className="text-lg text-black dark:text-gray-300 font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-400">{user.role}</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm ${
                  idx % 2 === 0
                    ? 'bg-gray-700'
                    : 'bg-yellow-800 text-yellow-300'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-between w-full mt-3 text-center text-sm">
            <div>
              <p className="font-bold  text-gray-500 ">{user.projects}</p>
              <p className="text-gray-400 ">Projects</p>
            </div>
            <div>
              <p className="font-bold text-gray-500">{user.tasks}</p>
              <p className="text-gray-400">Tasks</p>
            </div>
            <div>
              <p className="font-bold text-gray-500">{user.connections}</p>
              <p className="text-gray-400">Connections</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                user.connected
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {user.connected ? <FaUserCheck /> : <FaUserPlus />}
              {user.connected ? 'Connected' : 'Connect'}
            </button>
            <button className="bg-gray-700 p-2 rounded-lg text-gray-300 hover:bg-gray-600">
              <FaEnvelope />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConnectionTab;
