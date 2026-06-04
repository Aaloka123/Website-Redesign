import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "TEAM", to: "/team" },
  { label: "EVENTS", to: "/events" },
  { label: "FAQS", to: "/faqs" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
] as const;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-orange ${
    isActive ? "text-brand-orange" : "text-white"
  }`;

const Header = () => {
  return (
    <header className="bg-[#4a4540]/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="font-serif text-2xl font-bold tracking-tight text-brand-orange sm:text-3xl"
        >
          Logo
        </Link>

        <div className="flex flex-wrap items-center gap-6 lg:gap-8">
          <nav>
            <ul className="flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-6">
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to} end={to === "/"} className={navLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="btn-cta-orange px-5 py-2.5">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
