import Link from 'next/link'
import { Mountain, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { BOOKING_URL } from '@/lib/constants'
import { ThemeSwitcher } from './theme-switcher'
import { LanguageSwitcher } from './language-switcher'
import type { Dictionary, Locale } from '@/lib/dictionaries'

export default function Header({ dict, lang }: { dict: Dictionary['header'], lang: Locale }) {
  
  const navItems = [
    { label: dict.nav.interior, href: '#gallery' },
    { label: dict.nav.services, href: '#services' },
    { label: dict.nav.features, href: '#features' },
    { label: dict.nav.zone, href: '#explore' },
    { label: dict.nav.restaurants, href: '#restaurants' },
    { label: dict.nav.sports, href: '#sports' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="#" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">DioVista</span>
          </Link>
        </div>
        
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-primary/80 text-foreground/60">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="#" className="flex items-center gap-2 mb-8">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">DioVista</span>
                  </Link>
                  <nav className="grid gap-6 text-lg font-medium">
                    {navItems.map((item) => (
                      <a key={item.label} href={item.href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-8 border-t pt-8 flex flex-col gap-4">
                    <LanguageSwitcher lang={lang} dict={dict.language_switcher} />
                    <ThemeSwitcher dict={dict.theme_switcher} />
                    <Button asChild>
                      <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{dict.book_button}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher lang={lang} dict={dict.language_switcher} />
            <ThemeSwitcher dict={dict.theme_switcher} />
            <Button asChild>
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{dict.book_button}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
