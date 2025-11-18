import { useState } from 'react'
import { Search, Wrench, Globe, Shield, Mail, ArrowRight } from 'lucide-react'

function App() {
  const [site, setSite] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('SEO Check Request')
    const body = encodeURIComponent(`Hey team, please check this website for SEO:\n\n${site}\n\nWhat I do: (add a sentence)\nWhere I work: (add suburbs/area)\n`)
    window.location.href = `mailto:hello@your-seo-tradie.com?subject=${subject}&body=${body}`
  }

  const packages = [
    {
      title: 'SEO Audit',
      price: '$350',
      desc: 'Full health check. Clear fixes. No fluff.' ,
      icon: Search,
    },
    {
      title: 'SEO Fix-Up',
      price: '$900',
      desc: 'We fix the big problems and tune the basics.' ,
      icon: Wrench,
    },
    {
      title: 'Starter Website',
      price: '$650',
      desc: 'Fast, simple site that Google can understand.',
      icon: Globe,
    },
    {
      title: 'SEO Fix-Up Only',
      price: '$350',
      desc: 'Quick fixes based on your current audit or issues.',
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0b1f17] text-[#c2ffb2] relative overflow-hidden">
      {/* CRT scanlines & vignette */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-20 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px,transparent_4px)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]"></div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8 md:px-12">
        <div className="pip-panel max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-sm bg-[#1a3d2e] border border-[#2d6b52] shadow-[0_0_12px_rgba(72,255,169,0.25)_inset]" />
              <span className="tracking-[0.15em] text-sm md:text-base">PIP-SEO // FOR TRADIES</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs">
              <span className="px-2 py-1 border border-[#2d6b52] bg-[#0f2b20] rounded">MODE: FIELD</span>
              <span className="px-2 py-1 border border-[#2d6b52] bg-[#0f2b20] rounded">SIGNAL: STRONG</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 px-6 md:px-12">
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="pip-panel p-6 md:p-8">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight crt-glow">
              SEO that gets tradies booked out.
            </h1>
            <p className="mt-4 md:mt-6 text-[#a7f3c4]/90 text-base md:text-lg">
              No buzzwords. No waffle. We make your site easy to find and clear to read, so the phone rings.
            </p>

            <ul className="mt-6 md:mt-8 space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5 text-[#74ff9d]" /> Fix what Google can’t read</li>
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5 text-[#74ff9d]" /> Make pages load fast on bad Wi‑Fi</li>
              <li className="flex items-start gap-3"><ArrowRight className="h-5 w-5 mt-0.5 text-[#74ff9d]" /> Clear wording so real people call</li>
            </ul>

            <form onSubmit={handleSend} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                required
                value={site}
                onChange={(e)=>setSite(e.target.value)}
                placeholder="Your website (https://...)"
                className="flex-1 pip-input"
              />
              <button type="submit" className="pip-button">
                <Mail className="h-5 w-5" />
                Send my site
              </button>
            </form>

            <p className="text-xs opacity-80 mt-2">We’ll reply with a quick SEO check. Free and simple.</p>
          </div>

          <div className="pip-panel p-0 overflow-hidden relative">
            <div className="h-full w-full bg-[#0f2b20] p-6 md:p-8 grid grid-cols-2 gap-4">
              {[
                { label: 'TITLE TAGS', value: 'OPTIMISE' },
                { label: 'SPEED', value: 'FAST' },
                { label: 'MOBILE', value: 'READY' },
                { label: 'STRUCTURE', value: 'CLEAR' },
              ].map((it, i) => (
                <div key={i} className="border border-[#2d6b52] bg-[#0b251c] rounded p-4 flex flex-col gap-2 shadow-[0_0_0_1px_rgba(116,255,157,0.08)_inset]">
                  <span className="text-xs tracking-[0.2em] text-[#74ff9d]/80">{it.label}</span>
                  <span className="text-2xl font-semibold tracking-wide">{it.value}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#74ff9d] to-transparent opacity-60 animate-scan" />
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16">
          <div className="pip-panel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 w-3 bg-[#74ff9d] rounded-sm shadow-[0_0_12px_#74ff9d]" />
              <h2 className="text-xl md:text-2xl tracking-wide">Packages</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4 md:gap-6">
              {packages.map((pkg) => (
                <div key={pkg.title} className="group border border-[#2d6b52] bg-[#0b251c] rounded-md p-5 flex flex-col gap-3 hover:shadow-[0_0_0_1px_#74ff9d] transition-shadow">
                  <div className="flex items-center gap-2 text-[#74ff9d]">
                    <pkg.icon className="h-5 w-5" />
                    <span className="tracking-[0.15em] text-xs">{pkg.title.toUpperCase()}</span>
                  </div>
                  <div className="text-3xl font-semibold">{pkg.price}</div>
                  <p className="text-sm text-[#a7f3c4]/90 flex-1">{pkg.desc}</p>
                  <button className="pip-ghost mt-2">Add to quote</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16 mb-12">
          <div className="pip-panel p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold crt-glow">Send us your website for a free SEO check.</h3>
            <p className="mt-3 text-[#a7f3c4]/90">One message. No pressure. We’ll reply with quick wins you can do now.</p>
            <form onSubmit={handleSend} className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                required
                value={site}
                onChange={(e)=>setSite(e.target.value)}
                placeholder="Your website (https://...)"
                className="flex-1 pip-input"
              />
              <button type="submit" className="pip-button">
                <Mail className="h-5 w-5" />
                Send my site
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 pb-10 opacity-80 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} Pip-SEO for Tradies</span>
          <span>ABN 00 000 000 000</span>
        </div>
      </footer>
    </div>
  )
}

export default App
