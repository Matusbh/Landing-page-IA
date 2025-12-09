
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
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
    { label: dict.nav.booking, href: '#book' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="#" className="flex items-center gap-2">
            <Image 
              src="/images/DVLOGO.PNG"
              alt="DioVista Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Main navigation and options</SheetDescription>
                </SheetHeader>
                <div className="p-4">
                  <Link href="#" className="flex items-center gap-2 mb-8">
                    <Image 
                      src="/images/Diovista-svg.svg"
                      alt="DioVista Logo"
                      width={140}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <nav className="grid gap-6 text-lg font-medium">
                    {navItems.map((item) => (
                      <a key={item.href} href={item.href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-8 border-t pt-8 flex flex-col gap-4">
                    <LanguageSwitcher lang={lang} dict={dict.language_switcher} />
                    <ThemeSwitcher dict={dict.theme_switcher} />
                    <Button asChild>
                      <Link href="#book">{dict.book_button}</Link>
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
              <Link href="#book">{dict.book_button}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
