export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              UTC
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              United Tech Community - Connecting developers and tech enthusiasts in Bangalore for innovation and growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-foreground/70">
              {[
                { label: "About Us", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Members", href: "/members" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary smooth-hover relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-foreground/70">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary smooth-hover relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
            <div className="space-y-3 text-foreground/70">
              <p className="hover:text-primary smooth-hover">Bangalore, India</p>
              <p>
                <a href="mailto:unitedtechcommunity@gmail.com" className="hover:text-primary smooth-hover">
                  unitedtechcommunity@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © {currentYear} United Tech Community. All rights reserved. Crafted with passion in Bangalore.
          </p>
        </div>
      </div>
    </footer>
  )
}
