'use client'
import { useState, useEffect } from 'react'
import { services, projects, certificates, skills, tools, stats, ui } from '../data/content'

export default function Home() {
  const [lang, setLang] = useState('es')
  const [activeFilter, setActiveFilter] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = ui[lang]

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filteredProjects = activeFilter && activeFilter !== t.filterAll
    ? projects[lang].filter(p => p.cat === activeFilter)
    : projects[lang]

  const px = isMobile ? '20px' : '48px'

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(10,10,11,0.93)', backdropFilter: 'blur(16px)',
        borderBottom: '0.5px solid var(--border)',
        padding: `0 ${px}`, height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '20px', color: 'var(--text)', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
          Héctor Cuevas
        </div>

        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '22px', cursor: 'pointer', padding: '8px' }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
              {['services','portfolio','skills','certs','contact'].map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`} style={{ textDecoration: 'none', fontSize: '12px', color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
                    {t.nav[i]}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', border: '0.5px solid var(--border2)', borderRadius: '20px', overflow: 'hidden' }}>
              {['es','en'].map(l => (
                <button key={l} onClick={() => { setLang(l); setActiveFilter(null) }}
                  style={{
                    padding: '5px 13px', fontSize: '11px', fontWeight: 500,
                    cursor: 'pointer', border: 'none', letterSpacing: '0.08em',
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: lang === l ? 'var(--accent)' : 'transparent',
                    color: lang === l ? '#0A0A0B' : 'var(--text2)',
                    transition: 'all 0.2s'
                  }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="https://www.upwork.com/freelancers/~01eea82ac6fd6d5cf6?mp_source=share" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '8px 18px', background: 'var(--accent)', color: '#0A0A0B',
                border: 'none', borderRadius: '2px', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif"
              }}>
              Upwork ↗
            </a>
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,11,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '0.5px solid var(--border)', padding: '20px'
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['services','portfolio','skills','certs','contact'].map((id, i) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', fontSize: '14px', color: 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.nav[i]}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', alignItems: 'center' }}>
            <div style={{ display: 'flex', border: '0.5px solid var(--border2)', borderRadius: '20px', overflow: 'hidden' }}>
              {['es','en'].map(l => (
                <button key={l} onClick={() => { setLang(l); setActiveFilter(null) }}
                  style={{
                    padding: '5px 13px', fontSize: '11px', fontWeight: 500,
                    cursor: 'pointer', border: 'none', letterSpacing: '0.08em',
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: lang === l ? 'var(--accent)' : 'transparent',
                    color: lang === l ? '#0A0A0B' : 'var(--text2)',
                    transition: 'all 0.2s'
                  }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section style={{
        minHeight: isMobile ? 'auto' : '92vh',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        alignItems: 'center',
        padding: isMobile ? '40px 20px' : '80px 48px 60px',
        gap: '40px',
        position: 'relative', overflow: 'hidden'
      }}>
        <svg style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        <div style={{ position: 'relative', zIndex: 1, order: isMobile ? 2 : 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }}/>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
            {t.available}
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 0.95, color: 'var(--text)', marginBottom: '20px', letterSpacing: '-0.01em' }}>
            <span style={{ display: 'block', fontSize: isMobile ? '56px' : '80px' }}>Héctor</span>
            <span style={{ display: 'block', fontSize: isMobile ? '56px' : '80px', fontStyle: 'italic', color: 'var(--accent)' }}>Cuevas</span>
          </h1>

          <p style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '28px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {t.role}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '460px' }}>
            {t.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#portfolio" style={{ background: 'var(--accent)', color: '#0A0A0B', padding: '13px 28px', border: 'none', borderRadius: '2px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "Space Grotesk, sans-serif" }}>
              {t.ctaPrimary}
            </a>
            <a href="#contact" style={{ border: '0.5px solid var(--border2)', color: 'var(--text)', padding: '13px 28px', borderRadius: '2px', fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* HERO IMAGE + STATS */}
        <div style={{ position: 'relative', zIndex: 1, height: isMobile ? '360px' : '500px', order: isMobile ? 1 : 2 }}
          onMouseMove={e => {
            if (isMobile) return
            const rect = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - rect.left - rect.width / 2) / 20
            const y = (e.clientY - rect.top - rect.height / 2) / 20
            e.currentTarget.querySelector('img').style.transform = `translate(${x}px, ${y}px) scale(1.03)`
          }}
          onMouseLeave={e => {
            if (isMobile) return
            e.currentTarget.querySelector('img').style.transform = 'translate(0,0) scale(1)'
          }}>

          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,255,65,0.10) 0%, rgba(10,10,11,0.98) 70%)', borderRadius: '2px' }}/>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', zIndex: 2 }}/>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', zIndex: 2 }}/>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', zIndex: 2 }}/>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', zIndex: 2 }}/>

          <img
            src="/foto-hero.png"
            alt="Héctor Cuevas"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 0.15s ease-out' }}
          />

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, background: 'linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.6) 60%, transparent 100%)', padding: '24px 16px 16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
              {stats[lang].map((s, i) => (
                <div key={i} style={{ padding: isMobile ? '10px 6px' : '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '20px' : '26px', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: isMobile ? '8px' : '9px', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: `0 ${px}` }}/>

      {/* SERVICES */}
      <section id="services" style={{ padding: `72px ${px}` }}>
        <SectionHeader num="01" title={t.servicesTitle}/>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {services[lang].map((s, i) => (
            <ServiceCard key={i} {...s}/>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: `0 ${px}` }}/>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: `72px ${px}` }}>
        <SectionHeader num="02" title={t.portfolioTitle}/>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {t.filters.map((f, i) => (
            <button key={i} onClick={() => setActiveFilter(f === t.filterAll ? null : f)}
              style={{
                padding: '6px 16px', border: '0.5px solid var(--border2)', background: (!activeFilter && f === t.filterAll) || activeFilter === f ? 'var(--accent)' : 'transparent',
                color: (!activeFilter && f === t.filterAll) || activeFilter === f ? '#0A0A0B' : 'var(--text2)',
                borderColor: (!activeFilter && f === t.filterAll) || activeFilter === f ? 'var(--accent)' : 'var(--border2)',
                fontSize: '11px', cursor: 'pointer', letterSpacing: '0.08em',
                textTransform: 'uppercase', borderRadius: '2px', fontFamily: "'Space Grotesk', sans-serif",
                transition: 'all 0.2s'
              }}>
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '16px' }}>
          {filteredProjects.map((p, i) => (
            <ProjectCard key={i} {...p} inProgressLabel={t.inProgress}/>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: `0 ${px}` }}/>

      {/* SKILLS */}
      <section id="skills" style={{ padding: `72px ${px}` }}>
        <SectionHeader num="03" title={t.skillsTitle}/>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '60px' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
              {t.skillsLabel}
            </div>
            {skills[lang].map((s, i) => (
              <div key={i} style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px', color: 'var(--text2)' }}>
                  <span>{s.name}</span><span>{s.level}%</span>
                </div>
                <div style={{ height: '1px', background: 'var(--border2)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${s.level}%`, background: 'var(--accent)' }}/>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '24px' }}>
              {t.toolsLabel}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tools.map((tool, i) => (
                <span key={i} style={{ padding: '5px 12px', border: '0.5px solid var(--border2)', fontSize: '11px', color: 'var(--text2)', borderRadius: '2px', letterSpacing: '0.04em' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: `0 ${px}` }}/>

      {/* CERTIFICATES */}
      <section id="certs" style={{ padding: `72px ${px}` }}>
        <SectionHeader num="04" title={t.certsTitle}/>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: '12px' }}>
          {certificates.map((c, i) => (
            <div key={i} style={{ background: 'var(--bg2)', border: '0.5px solid var(--border)', padding: '20px', transition: 'border-color 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>{c.platform}</div>
              <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '4px', lineHeight: 1.4 }}>{c.name[lang]}</div>
              <div style={{ fontSize: '11px', color: 'var(--text3)' }}>
                {c.year}{c.status ? ` · ${t.inProgress}` : ''}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: `0 ${px}` }}/>

      {/* CONTACT */}
      <section id="contact" style={{ padding: `72px ${px}` }}>
        <SectionHeader num="05" title={t.contactTitle}/>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '72px', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '26px' : '34px', fontWeight: 300, color: 'var(--text)', lineHeight: 1.25, marginBottom: '24px' }}>
              "{t.contactQuote}"
            </p>
            <p style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '6px' }}>hccuevas90@gmail.com</p>
            <p style={{ fontSize: '12px', color: 'var(--text3)', marginTop: '4px' }}>{t.contactLocation}</p>
            <div style={{ marginTop: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a href="https://www.upwork.com/freelancers/~01eea82ac6fd6d5cf6?mp_source=share" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/Upwork.png" alt="Upwork" style={{ width: '80px', height: '80px', objectFit: 'contain' }}/>
              </a>
              <a href="https://www.linkedin.com/in/h%C3%A9ctor-cuevas/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/Linkedin.png" alt="LinkedIn" style={{ width: '80px', height: '80px', objectFit: 'contain' }}/>
              </a>
            </div>
          </div>
          <ContactForm t={t} lang={lang}/>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: `28px ${px}`, borderTop: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: 'var(--text)', fontWeight: 300 }}>
          Héctor Cuevas
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text3)' }}>© 2026 {t.footerRights}</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://www.upwork.com/freelancers/~01eea82ac6fd6d5cf6?mp_source=share" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Upwork</a>
          <a href="https://www.linkedin.com/in/h%C3%A9ctor-cuevas/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '44px' }}>
      <span style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.14em', fontWeight: 500 }}>{num}</span>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 300, color: 'var(--text)' }}>{title}</h2>
      <div style={{ flex: 1, borderTop: '0.5px solid var(--border)', marginLeft: '16px', alignSelf: 'center' }}/>
    </div>
  )
}

function ServiceCard({ num, name, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--bg3)' : 'var(--bg2)', padding: '32px 28px', cursor: 'pointer', transition: 'background 0.2s', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'var(--accent)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }}/>
      <div style={{ fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.12em', marginBottom: '20px' }}>{num}</div>
      <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '10px' }}>{name}</div>
      <div style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.65 }}>{desc}</div>
    </div>
  )
}

function ProjectCard({ cat, title, desc, client, tags, image }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: 'var(--bg2)', border: `0.5px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`, cursor: 'pointer', transition: 'border-color 0.2s', overflow: 'hidden' }}>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'var(--accent)', zIndex: 1 }}/>
        {image
          ? <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
          : <div style={{ width: '100%', height: '100%', background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: 'var(--border2)', fontStyle: 'italic' }}>{title.charAt(0)}</div>
        }
      </div>
      <div style={{ padding: '18px' }}>
        <div style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '5px' }}>{cat}</div>
        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.5, marginBottom: '10px' }}>{desc}</div>
        <div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: '10px' }}>{client}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ padding: '2px 8px', background: 'var(--bg)', border: '0.5px solid var(--border2)', fontSize: '10px', color: 'var(--text3)', borderRadius: '2px' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactForm({ t, lang }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setSent(true)
    } catch (e) {
      setSent(true)
    }
  }

  if (sent) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', border: '0.5px solid var(--accent)', borderRadius: '2px' }}>
      <p style={{ color: 'var(--accent)', fontSize: '14px', textAlign: 'center' }}>
        {lang === 'es' ? 'Mensaje enviado. Te respondo pronto.' : "Message sent. I'll get back to you soon."}
      </p>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[
        { key: 'name', placeholder: t.formName },
        { key: 'email', placeholder: t.formEmail, type: 'email' },
        { key: 'subject', placeholder: t.formSubject },
      ].map(({ key, placeholder, type }) => (
        <input key={key} type={type || 'text'} placeholder={placeholder}
          value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
          style={{ width: '100%', padding: '12px 16px', background: 'var(--bg2)', border: '0.5px solid var(--border2)', borderRadius: '2px', fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: 'var(--text)', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border2)'}
        />
      ))}
      <textarea placeholder={t.formMessage} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        style={{ width: '100%', padding: '12px 16px', background: 'var(--bg2)', border: '0.5px solid var(--border2)', borderRadius: '2px', fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: 'var(--text)', outline: 'none', height: '110px', resize: 'none', boxSizing: 'border-box' }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border2)'}
      />
      <button onClick={handleSubmit}
        style={{ alignSelf: 'flex-start', background: 'var(--accent)', color: '#0A0A0B', padding: '13px 28px', border: 'none', borderRadius: '2px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}>
        {t.formSend}
      </button>
    </div>
  )
}
