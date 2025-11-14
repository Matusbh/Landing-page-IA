'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import type { Dictionary, Locale } from '@/lib/dictionaries'

interface Language {
  code: Locale
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'en', name: 'English', flag: 'GB' },
  { code: 'pl', name: 'Polski', flag: 'PL' },
  { code: 'cs', name: 'Čeština', flag: 'CZ' },
]

export function LanguageSwitcher({ lang, dict }: { lang: Locale, dict: Dictionary['header']['language_switcher'] }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLocale}`)
    router.push(newPath)
  }
  
  const currentLanguage = languages.find(l => l.code === lang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
