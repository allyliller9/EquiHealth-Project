import { Link } from "wouter";

interface NavMenuProps {
  isOpen: boolean;
  location: string;
  onNavClick: () => void;
}

const NavMenu = ({ isOpen, location, onNavClick }: NavMenuProps) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/statistics", label: "Statistics" },
    { path: "/resources", label: "Resources" },
    { path: "/advocacy", label: "Advocacy" },
    { path: "/research", label: "Research" },
  ];

  return (
    <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
      <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              href={item.path}
              onClick={onNavClick}
              className={`${
                location === item.path
                  ? "text-[#d66ba0] border-b-2 border-[#d66ba0]"
                  : "text-[#4b4b4b] hover:text-[#d66ba0]"
              } pb-1`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
