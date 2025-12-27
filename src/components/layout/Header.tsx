import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        className={`container-custom mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg border border-border/50"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-primary rounded-sm" />
            <div className="w-2 h-2 bg-primary rounded-sm" />
            <div className="w-2 h-2 bg-primary rounded-sm" />
            <div className="w-2 h-2 bg-primary rounded-sm" />
          </div>
          <span className={`font-semibold text-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            BusinessFinanceFlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors link-underline ${
                isActive(link.path)
                  ? "text-primary"
                  : isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 glass-nav rounded-2xl p-6 shadow-lg border border-border/50 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full mt-2">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
