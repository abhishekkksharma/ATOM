import { icons } from './icons';


export default function ThemeMenuItem({ icon, label, onClick }) {
  const IconComponent = icons[icon];
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
    >
      <IconComponent />
      {label}
    </button>
  );
}