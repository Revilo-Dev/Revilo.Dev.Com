import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, Search } from 'lucide-react';
import './ModWiki.css';

const slugify = (text) => text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function headingText(children) {
  return React.Children.toArray(children).map((child) => typeof child === 'string' ? child : headingText(child.props?.children)).join('');
}

function WikiArticle({ page, resolveLink }) {
  return <div className="wiki-article">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children, ...props }) => {
          const destination = resolveLink(href);
          return destination?.startsWith('/') ? <Link to={destination} {...props}>{children}</Link> : <a href={destination} {...props}>{children}</a>;
        },
        h2: ({ children }) => <h2 id={slugify(headingText(children))}>{children}</h2>,
        h3: ({ children }) => <h3 id={slugify(headingText(children))}>{children}</h3>,
        table: ({ children }) => <div className="wiki-table-scroll"><table>{children}</table></div>,
      }}
    >{page.content}</ReactMarkdown>
  </div>;
}

function ModWiki({ name, image, base, groups, pages, pageBySlug, resolveLink, heroDescription, introTitle, introDescription, sourceNote }) {
  const { slug } = useParams();
  const location = useLocation();
  const page = slug ? pageBySlug[slug] : null;
  const [query, setQuery] = useState('');
  const filtered = pages.filter((item) => `${item.title} ${item.summary} ${item.content}`.toLowerCase().includes(query.toLowerCase().trim()));
  const index = page ? pages.indexOf(page) : -1;

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  if (slug && !page) return <main className="mod-wiki mod-wiki-missing">
    <h1>Page not found</h1>
    <p>That {name} topic is not in this wiki.</p>
    <Link className="btn btn-primary" to={base}>Back to the {name} wiki</Link>
  </main>;

  return <main className="mod-wiki">
    <div className="wiki-topline">
      <Link to="/Modding"><ArrowLeft size={16} /> Modding</Link>
      <ChevronRight size={16} aria-hidden="true" />
      <Link to={base}>{name} wiki</Link>
      {page && <><ChevronRight size={16} aria-hidden="true" /><span>{page.title}</span></>}
    </div>

    <header className="wiki-hero bg-base-300">
      <img src={image} alt={`${name} mod icon`} />
      <div>
        <p className="wiki-eyebrow">PROJECTS / MODDING / WIKI</p>
        <h1>{page?.title || `${name} Wiki`}</h1>
        <p>{page?.summary || heroDescription}</p>
      </div>
    </header>

    <div className="wiki-layout">
      <aside className="wiki-sidebar bg-base-300" aria-label="Wiki pages">
        <Link to={base} className={`wiki-sidebar-home ${!page ? 'active' : ''}`}><BookOpen size={18} /> Wiki home</Link>
        <label className="wiki-search"><Search size={17} /><input aria-label="Search wiki topics" placeholder="Find a topic..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        {groups.map((group) => {
          const groupPages = filtered.filter((item) => item.group === group);
          return groupPages.length > 0 && <div className="wiki-sidebar-group" key={group}>
            <p>{group}</p>
            {groupPages.map((item) => <Link key={item.slug} to={`${base}/${item.slug}`} className={page?.slug === item.slug ? 'active' : ''}>{item.title}</Link>)}
          </div>;
        })}
        {filtered.length === 0 && <p className="wiki-search-empty">No topics found.</p>}
      </aside>

      <div className="wiki-main">
        {page ? <>
          <article className="wiki-panel bg-base-300">
            <div className="wiki-article-heading"><span>{page.group}</span><h2>{page.title}</h2><p>{page.summary}</p></div>
            <WikiArticle page={page} resolveLink={resolveLink} />
          </article>
          <section className="wiki-related bg-base-300" aria-label="Related pages"><h2>Related pages</h2><div>{page.related.map((relatedSlug) => { const related = pageBySlug[relatedSlug]; return <Link key={relatedSlug} to={`${base}/${relatedSlug}`}><span><strong>{related.title}</strong><small>{related.summary}</small></span><ArrowRight size={18} /></Link>; })}</div></section>
          <nav className="wiki-pagination" aria-label="Adjacent wiki pages">
            {index > 0 ? <Link to={`${base}/${pages[index - 1].slug}`}><ArrowLeft size={17} /><span><small>Previous</small>{pages[index - 1].title}</span></Link> : <span />}
            {index < pages.length - 1 && <Link to={`${base}/${pages[index + 1].slug}`}><span><small>Next</small>{pages[index + 1].title}</span><ArrowRight size={17} /></Link>}
          </nav>
        </> : <>
          <section className="wiki-intro bg-base-300"><p className="wiki-eyebrow">START HERE</p><h2>{introTitle}</h2><p>{introDescription}</p>{sourceNote && <p className="wiki-source-note">{sourceNote}</p>}<Link className="btn btn-primary" to={`${base}/getting-started`}>Read Getting Started <ArrowRight size={17} /></Link></section>
          {groups.map((group) => <section className="wiki-section" key={group}><h2>{group}</h2><div className="wiki-card-grid">{pages.filter((item) => item.group === group).map((item) => <Link className="wiki-topic-card bg-base-300" key={item.slug} to={`${base}/${item.slug}`}><span className="wiki-topic-icon"><BookOpen size={19} /></span><strong>{item.title}</strong><p>{item.summary}</p><span className="wiki-card-action">Read page <ArrowRight size={16} /></span></Link>)}</div></section>)}
        </>}
      </div>
    </div>
  </main>;
}

export default ModWiki;
