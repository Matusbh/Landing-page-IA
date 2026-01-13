import { getDictionary, Locale } from '@/lib/dictionaries'
import Header from '@/components/landing/header'
import Footer from '@/components/landing/footer'

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  return (
    <div className="flex min-h-screen flex-col">
      <Header dict={dict.header} lang={lang} />
      <div className="flex-grow">{children}</div>
      <Footer dict={dict.footer} navDict={dict.header.nav} />
    </div>
  )
}
