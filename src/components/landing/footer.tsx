
import type { Dictionary } from '@/lib/dictionaries'
import Link from 'next/link'
import { Mountain } from 'lucide-react'

export default function Footer({ dict, navDict }: { dict: Dictionary['footer'], navDict: Dictionary['header']['nav'] }) {
  const year = new Date().getFullYear();
  const navLinks = [
    { name: navDict.interior, href: '#gallery' },
    { name: navDict.services, href: '#services' },
    { name: navDict.features, href: '#features' },
    { name: navDict.zone, href: '#explore' },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold font-headline">DioVista</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">{dict.description}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider uppercase">{dict.contact.title}</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{dict.contact.address}</p>
              <a href="mailto:info@diovista.com" className="block hover:text-accent transition-colors">info@diovista.com</a>
              <p>{dict.contact.phone}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider uppercase">{dict.quick_links.title}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">{link.name}</a>
                </li>
              ))}
              <li>
                <Link href="#book" className="text-muted-foreground hover:text-accent transition-colors">{dict.quick_links.booking}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{dict.copyright.replace('{year}', year.toString())}</p>
        </div>
      </div>
    </footer>
  )
}
