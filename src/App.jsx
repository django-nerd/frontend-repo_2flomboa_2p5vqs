import { useMemo, useState } from 'react'
import { Search, Wrench, Globe, Shield, Mail, ArrowRight, Sparkles, Gauge, Signal, Rocket, Star, CheckCircle2, Cpu, Cog, Pickaxe, Satellite } from 'lucide-react'

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

  const logos = useMemo(() => [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091215367-59ab6b11410d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091015655-f58f02b8b808?q=80&w=800&auto=format&fit=crop',
  ], [])

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
            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className="pip-badge"><Signal className="h-3.5 w-3.5"/>SIGNAL: STRONG</span>
              <span className="pip-badge"><Gauge className="h-3.5 w-3.5"/>MODE: FIELD</span>
              <span className="pip-badge blink"><Sparkles className="h-3.5 w-3.5"/>CRT: STABLE</span>
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

          {/* Animated dashboard */}
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
              <div className="col-span-2 grid grid-cols-3 gap-4">
                {Array.from({length:3}).map((_,i)=> (
                  <div key={i} className="h-2 bg-[#153628] rounded overflow-hidden">
                    <div className="h-full bg-[#74ff9d] animate-marquee" style={{width:'200%'}}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#74ff9d] to-transparent opacity-60 animate-scan" />
          </div>
        </section>

        {/* Trust strip with images */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16">
          <div className="pip-panel p-4 md:p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-3 bg-[#74ff9d] rounded-sm shadow-[0_0_12px_#74ff9d]" />
              <h2 className="text-base md:text-lg tracking-wide">Recent work, the Pip‑Boy way</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {logos.map((src, i)=> (
                <figure key={i} className="pip-image">
                  <img src={src} alt="Project example" className="w-full h-28 sm:h-32 object-cover img-green"/>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16">
          <div className="pip-panel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 w-3 bg-[#74ff9d] rounded-sm shadow-[0_0_12px_#74ff9d]" />
              <h2 className="text-xl md:text-2xl tracking-wide">Why tradies pick us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {icon: Rocket, title: 'Fast setup', text: 'From hello to live in days, not months.'},
                {icon: Cpu, title: 'Tech that just works', text: 'Clean code, quick hosting, no nonsense.'},
                {icon: Cog, title: 'Plain-English reports', text: 'Know what changed and why it matters.'},
              ].map((f)=> (
                <div key={f.title} className="border border-[#2d6b52] bg-[#0b251c] rounded-md p-5">
                  <div className="flex items-center gap-2 text-[#74ff9d] mb-2">
                    <f.icon className="h-5 w-5"/>
                    <span className="tracking-[0.15em] text-xs">{f.title.toUpperCase()}</span>
                  </div>
                  <p className="text-sm text-[#a7f3c4]/90">{f.text}</p>
                </div>
              ))}
            </div>
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

        {/* Process timeline with animation */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16">
          <div className="pip-panel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 w-3 bg-[#74ff9d] rounded-sm shadow-[0_0_12px_#74ff9d]" />
              <h2 className="text-xl md:text-2xl tracking-wide">How it works</h2>
            </div>
            <ol className="relative border-l border-[#2d6b52] pl-6 space-y-6">
              {[
                {icon: Search, title: '1) Quick check', text: 'You send your site. We reply with quick wins.'},
                {icon: Pickaxe, title: '2) Fix the big stuff', text: 'We tune speed, headings, copy and structure.'},
                {icon: Satellite, title: '3) Get found', text: 'You rank better locally and more jobs come in.'},
              ].map((s,idx)=> (
                <li key={s.title} className="relative">
                  <span className="absolute -left-3 top-1.5 h-2 w-2 bg-[#74ff9d] rounded-sm" />
                  <div className="flex items-start gap-3">
                    <s.icon className="h-5 w-5 text-[#74ff9d] mt-0.5"/>
                    <div>
                      <h4 className="tracking-wide text-sm md:text-base">{s.title}</h4>
                      <p className="text-sm text-[#a7f3c4]/90">{s.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#74ff9d] to-transparent opacity-70 animate-scan" />
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto mt-10 md:mt-16 mb-12">
          <div className="pip-panel p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold crt-glow">Send us your website for a free SEO check.</h3>
            <p className="mt-3 text-[#a7f3c4]/90 max-w-2xl mx-auto">One message. No pressure. We’ll reply with quick wins you can do now. If you want help, we’ll quote it straight and simple.</p>
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
            <div className="mt-6 flex items-center justify-center gap-6 text-xs opacity-80">
              <span className="pip-badge"><CheckCircle2 className="h-3.5 w-3.5"/>No lock‑in</span>
              <span className="pip-badge"><Star className="h-3.5 w-3.5"/>Local focus</span>
              <span className="pip-badge"><Rocket className="h-3.5 w-3.5"/>Quick turnaround</span>
            </div>
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
