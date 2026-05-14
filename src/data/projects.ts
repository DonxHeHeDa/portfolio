export interface Project {
  name: string
  description: string
  techStack: string[]
  link?: string
  icon: string
}

export const projects: Project[] = [
  {
    name: '项目一',
    description: '一个使用 Vue 3 + TypeScript 构建的现代化 Web 应用，具有优秀的用户体验和性能表现。',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com',
    icon: '🚀',
  },
  {
    name: '项目二',
    description: '基于 Node.js 的后端服务，提供 RESTful API 接口，支持高并发访问。',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com',
    icon: '⚡',
  },
  {
    name: '项目三',
    description: '一款开源工具，帮助开发者提高日常工作效率，目前已获得大量社区关注。',
    techStack: ['React', 'TypeScript', 'Vite'],
    link: 'https://github.com',
    icon: '🛠️',
  },
]
