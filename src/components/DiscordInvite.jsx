import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { ArrowUpRight, UsersRound, X } from 'lucide-react';
import './DiscordInvite.css';

const DISCORD_URL = 'https://discord.gg/DARzByw6VW';
const INVITE_API_URL = 'https://discord.com/api/v10/invites/DARzByw6VW?with_counts=true';
const DISMISSED_KEY = 'revilo-discord-invite-dismissed';
const FALLBACK_MEMBER_COUNT = 610;
const REFRESH_INTERVAL = 15 * 60 * 1000;

function wasDismissed() {
  try {
    return typeof window !== 'undefined' && window.localStorage.getItem(DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function DiscordInvite() {
  const [dismissed, setDismissed] = useState(wasDismissed);
  const [memberCount, setMemberCount] = useState(FALLBACK_MEMBER_COUNT);

  useEffect(() => {
    if (dismissed) return undefined;
    const controller = new AbortController();
    const refreshCount = async () => {
      try {
        const response = await fetch(INVITE_API_URL, { signal: controller.signal });
        if (!response.ok) return;
        const invite = await response.json();
        if (Number.isInteger(invite.approximate_member_count) && !controller.signal.aborted) {
          setMemberCount(invite.approximate_member_count);
        }
      } catch {
        // Keep the supplied count when Discord is unavailable.
      }
    };
    refreshCount();
    const timer = window.setInterval(refreshCount, REFRESH_INTERVAL);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [dismissed]);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, 'true');
    } catch {
      // The card still closes for this visit if storage is unavailable.
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return <section className="discord-invite bg-base-300 A-SlideDown" aria-label="Join the Discord community">
    <span className="discord-invite-icon" aria-hidden="true"><FontAwesomeIcon icon={faDiscord} /></span>
    <div className="discord-invite-content">
      <h2>Join the Discord</h2>
      <p>Chat about modding, share feedback, and follow updates across my projects.</p>
      <span className="discord-invite-members" aria-label={`About ${memberCount.toLocaleString()} members`}><UsersRound size={15} aria-hidden="true" /> <span className="micro-count" key={memberCount}>{memberCount.toLocaleString()}</span> members</span>
    </div>
    <a className="discord-invite-link btn btn-primary" href={DISCORD_URL} target="_blank" rel="noreferrer">Join now <ArrowUpRight className="micro-arrow" size={17} aria-hidden="true" /></a>
    <button className="discord-invite-close" type="button" onClick={dismiss} aria-label="Dismiss Discord invitation" title="Dismiss Discord invitation"><X size={19} /></button>
  </section>;
}
