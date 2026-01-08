import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Container } from "./container"

const footerLinks = {
  dienstleistungen: [
    { name: "Finanzplanung", href: "/dienstleistungen/finanzplanung" },
    { name: "Vorsorge", href: "/dienstleistungen/vorsorge-pensionierung" },
    { name: "Versicherungen", href: "/dienstleistungen/versicherungen" },
    { name: "Immobilien", href: "/dienstleistungen/immobilien" },
    { name: "Nachlass", href: "/dienstleistungen/nachlass-erbschaft" },
    { name: "KMU", href: "/dienstleistungen/kmu" },
  ],
  unternehmen: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Ratgeber", href: "/ratgeber" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-bold text-primary"
            >
              SG-WM
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Swiss Group Wealth Management AG
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+41XXXXXXXX"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +41 XX XXX XX XX
              </a>
              <a
                href="mailto:info@sg-wm.ch"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@sg-wm.ch
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Musterstrasse 1<br />
                  8808 Pfäffikon SZ
                </span>
              </div>
            </div>
          </div>

          {/* Dienstleistungen */}
          <div>
            <h3 className="font-semibold text-foreground">Dienstleistungen</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.dienstleistungen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-foreground">Unternehmen</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-foreground">Rechtliches</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Swiss Group Wealth Management AG.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  )
}
