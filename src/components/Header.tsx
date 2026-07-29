import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) {
      window.location.href = href;
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    const headerOffset = 80;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', href);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    closeMenu();

    window.requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'h-[80px] bg-brand-ivory/95 shadow-sm backdrop-blur-md'
          : 'h-[100px] bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className={`text-2xl font-serif tracking-wide transition-colors duration-300 md:text-[28px] ${
            isScrolled ? 'text-brand-black' : 'text-white'
          }`}
        >
          LuxeGlow Studio
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center space-x-10 lg:flex"
          aria-label="Desktop navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`text-[15px] font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-brand-text hover:text-brand-accent'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          onClick={(event) => handleNavClick(event, '#booking')}
          className="hidden items-center justify-center rounded-[12px] bg-brand-accent px-7 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 md:inline-flex"
        >
          Book Appointment
        </a>

        {/* Mobile Menu Toggle */}
        {!isMobileMenuOpen && (
          <button
            type="button"
            className={`relative z-[70] lg:hidden ${
              isScrolled ? 'text-brand-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={false}
            aria-controls="mobile-navigation"
          >
            <Menu size={32} />
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full border-0 bg-brand-black/40 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <aside
            id="mobile-navigation"
            className="absolute right-0 top-0 flex h-[100dvh] w-full flex-col bg-brand-ivory shadow-2xl sm:w-96"
            aria-label="Mobile navigation"
          >
            <div className="flex h-[80px] items-center justify-between border-b border-brand-black/10 px-6">
              <span className="text-2xl font-serif tracking-wide text-brand-black">
                LuxeGlow Studio
              </span>

              <button
                type="button"
                className="text-brand-black transition-colors hover:text-brand-accent"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-8 py-8">
              <nav
                className="flex flex-col space-y-2"
                aria-label="Mobile navigation links"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) =>
                      handleNavClick(event, link.href)
                    }
                    className="flex min-h-12 items-center border-b border-brand-black/10 py-3 text-2xl font-serif text-brand-text transition-colors hover:text-brand-accent"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <a
                  href="#booking"
                  onClick={(event) =>
                    handleNavClick(event, '#booking')
                  }
                  className="flex w-full items-center justify-center rounded-[12px] bg-brand-accent px-8 py-4 text-lg font-medium text-white transition-all hover:brightness-95"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}