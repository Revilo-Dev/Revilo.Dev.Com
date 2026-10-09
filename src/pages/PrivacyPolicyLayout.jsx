import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import './modding/wiki/ModWiki.css';
import './PrivacyPolicyLayout.css';

export default function PrivacyPolicyLayout({ app, icon, date, summary, sections, children }) {
  return <main className="mod-wiki privacy-wiki">
    <div className="wiki-topline"><Link to="/Projects"><ArrowLeft size={16} /> Projects</Link><ChevronRight size={16} aria-hidden="true" /><span>{app} privacy policy</span></div>
    <header className="wiki-hero bg-base-300">
      <span className="privacy-hero-icon">{icon ? <img src={icon} alt="" /> : <ShieldCheck size={48} />}</span>
      <div><p className="wiki-eyebrow">PROJECTS / PRIVACY</p><h1>{app} Privacy Policy</h1><p>{summary}</p></div>
    </header>
    <div className="wiki-layout">
      <aside className="wiki-sidebar bg-base-300" aria-label="Policy sections">
        <p className="privacy-sidebar-title">On this page</p>
        <div className="wiki-sidebar-group">{sections.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}</div>
      </aside>
      <article className="wiki-panel bg-base-300">
        <div className="wiki-article-heading"><span>PRIVACY POLICY</span><h2>{app}</h2><p>{date}</p></div>
        <div className="wiki-article privacy-article">{children}</div>
      </article>
    </div>
  </main>;
}
