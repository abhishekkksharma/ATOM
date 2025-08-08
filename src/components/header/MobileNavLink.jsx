import { icons } from './icons';


export default function MobileNavLink({ name, icon, href }) {
  const IconComponent = icons[icon];
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
    >
      <IconComponent />
      {name}
    </a>
  );
}