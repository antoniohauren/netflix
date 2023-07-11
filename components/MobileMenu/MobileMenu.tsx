import { navBarItems } from "@/share/constants";
import { MobileMenuProps } from ".";

export function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-600 flex rounded-sm">
      <div className="flex flex-col gap-4">
        {navBarItems.map((item, index) => (
          <div
            key={index}
            className="px-3 text-center text-white hover:underline"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
