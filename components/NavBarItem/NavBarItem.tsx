import { NavBarItemProps } from ".";

export function NavBarItem({ label }: NavBarItemProps) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}
