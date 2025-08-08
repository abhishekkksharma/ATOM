import { icons } from './icons';


export default function NavLink({ name, icon, href }) {
  const IconComponent = icons[icon];
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
    >
      <IconComponent />
      {name}
    </a>
  );
}
