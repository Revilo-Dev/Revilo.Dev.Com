import React, { useEffect, useState } from 'react';
import { ArrowUpRight, GitCommitHorizontal, GitPullRequest, RefreshCw, Tag } from 'lucide-react';
import './GitHubActivity.css';

const USERNAME = 'Revilo-Dev';
const PROFILE_URL = `https://github.com/${USERNAME}`;
const API_URL = 'https://api.github.com';
const REFRESH_INTERVAL = 60 * 60 * 1000;
let cachedData;
let pendingRequest;

async function getJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.json();
}

function eventLink(event) {
  const repo = event.repo?.name;
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo || '')) return PROFILE_URL;
  const repoUrl = `https://github.com/${repo}`;
  if (event.type === 'PushEvent' && /^[a-f0-9]{40}$/i.test(event.payload?.head || '')) {
    return `${repoUrl}/commit/${event.payload.head}`;
  }
  if (event.type === 'ReleaseEvent' && event.payload?.release?.html_url) return event.payload.release.html_url;
  if (event.type === 'PullRequestEvent' && event.payload?.pull_request?.html_url) return event.payload.pull_request.html_url;
  return repoUrl;
}

function describeEvent(event) {
  if (event.type === 'PushEvent') return { label: 'Commit', title: event.commitTitle || `Pushed to ${event.payload?.ref?.replace('refs/heads/', '') || 'repository'}`, icon: GitCommitHorizontal };
  if (event.type === 'ReleaseEvent') return { label: 'Release', title: event.payload?.release?.name || event.payload?.release?.tag_name || 'Published a release', icon: Tag };
  if (event.type === 'PullRequestEvent') return { label: 'Pull request', title: event.payload?.pull_request?.title || 'Updated a pull request', icon: GitPullRequest };
  if (event.type === 'CreateEvent') return { label: 'Created', title: event.payload?.ref ? `Created ${event.payload.ref}` : 'Created a repository', icon: Tag };
  return { label: 'Update', title: `Updated ${event.repo?.name?.split('/')[1] || 'a repository'}`, icon: GitCommitHorizontal };
}

async function loadGitHubData() {
  if (cachedData && Date.now() - cachedData.fetchedAt < REFRESH_INTERVAL) return cachedData;
  if (pendingRequest) return pendingRequest;

  pendingRequest = fetchGitHubData().finally(() => { pendingRequest = undefined; });
  return pendingRequest;
}

async function fetchGitHubData() {
  const [profile, events] = await Promise.all([
    getJson(`${API_URL}/users/${USERNAME}`),
    getJson(`${API_URL}/users/${USERNAME}/events/public?per_page=30`),
  ]);
  const activity = events
    .filter((event) => ['PushEvent', 'ReleaseEvent', 'PullRequestEvent', 'CreateEvent'].includes(event.type))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 6);

  const enrichedActivity = await Promise.all(activity.map(async (event) => {
    const repo = event.repo?.name;
    const sha = event.payload?.head;
    if (event.type !== 'PushEvent' || !/^[\w.-]+\/[\w.-]+$/.test(repo || '') || !/^[a-f0-9]{40}$/i.test(sha || '')) return event;
    try {
      const commit = await getJson(`${API_URL}/repos/${repo}/commits/${sha}`);
      return { ...event, commitTitle: commit.commit?.message?.split('\n')[0] };
    } catch {
      return event;
    }
  }));

  cachedData = { profile, activity: enrichedActivity, fetchedAt: Date.now() };
  return cachedData;
}

const formatDate = (value) => new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));
const formatUpdateTime = (value) => new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(new Date(value));

function GitHubActivity() {
  const [data, setData] = useState(cachedData);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(!cachedData);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let active = true;
    loadGitHubData()
      .then((result) => { if (active) { setData(result); setError(''); setLoading(false); } })
      .catch(() => { if (active) { setError('GitHub activity is temporarily unavailable.'); setLoading(false); } });
    return () => { active = false; };
  }, [refreshKey]);

  useEffect(() => {
    const timer = setInterval(() => setRefreshKey((key) => key + 1), REFRESH_INTERVAL);
    const refreshIfStale = () => {
      if (document.visibilityState === 'visible' && (!cachedData || Date.now() - cachedData.fetchedAt >= REFRESH_INTERVAL)) {
        setRefreshKey((key) => key + 1);
      }
    };
    document.addEventListener('visibilitychange', refreshIfStale);
    window.addEventListener('focus', refreshIfStale);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', refreshIfStale);
      window.removeEventListener('focus', refreshIfStale);
    };
  }, []);

  const refresh = () => {
    cachedData = undefined;
    setLoading(true);
    setRefreshKey((key) => key + 1);
  };

  return <section className="github-activity" aria-label="GitHub profile and recent activity">
    <div className="github-activity-heading">
      <p>Public activity from GitHub</p>
      <button type="button" onClick={refresh} disabled={loading} aria-label="Refresh GitHub activity" title="Refresh GitHub activity"><RefreshCw size={16} className={loading ? 'github-refreshing' : ''} /> Refresh</button>
    </div>

    {data ? <>
      <a className="github-profile bg-base-300" href={data.profile.html_url || PROFILE_URL} target="_blank" rel="noreferrer">
        <img src={data.profile.avatar_url} alt="" width="72" height="72" />
        <span className="github-profile-details">
          <strong>{data.profile.name || data.profile.login}</strong>
          <small>@{data.profile.login}</small>
          <span className="github-profile-stats"><span className="micro-count" key={`repos-${data.profile.public_repos}`}>{data.profile.public_repos}</span> public repositories · <span className="micro-count" key={`followers-${data.profile.followers}`}>{data.profile.followers}</span> followers</span>
        </span>
        <ArrowUpRight className="micro-arrow" size={19} aria-hidden="true" />
      </a>

      <div className="github-activity-list">
        <h3>Recent commits and updates</h3>
        {data.activity.length ? data.activity.map((event) => {
          const { label, title, icon: Icon } = describeEvent(event);
          return <a className="github-event bg-base-300" key={event.id} href={eventLink(event)} target="_blank" rel="noreferrer">
            <span className="github-event-icon"><Icon size={19} /></span>
            <span className="github-event-content"><span className="github-event-meta">{label} · {event.repo?.name?.split('/')[1]}</span><strong>{title}</strong><time dateTime={event.created_at}>{formatDate(event.created_at)}</time></span>
            <ArrowUpRight className="micro-arrow" size={18} aria-hidden="true" />
          </a>;
        }) : <p className="github-activity-empty">No recent public activity. <a href={PROFILE_URL} target="_blank" rel="noreferrer">View the GitHub profile</a>.</p>}
      </div>
      <p className="github-activity-note">{error || `Updated ${formatUpdateTime(data.fetchedAt)} ·  Updates hourly`}</p>
    </> : loading ? <p className="github-activity-empty bg-base-300">Loading GitHub profile and activity…</p> : <p className="github-activity-empty bg-base-300">{error} <a href={PROFILE_URL} target="_blank" rel="noreferrer">View the GitHub profile</a>.</p>}
  </section>;
}

export default GitHubActivity;
