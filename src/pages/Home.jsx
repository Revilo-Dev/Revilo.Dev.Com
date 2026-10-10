import React from 'react';
import HeaderCard from '../components/HeaderCard';
import GitHubActivity from '../components/GitHubActivity';
import DiscordInvite from '../components/DiscordInvite';

function Home() {
  return (
    <div className="body">
      <HeaderCard />

      <div className="content mt-6">
        <DiscordInvite />
        <div className="A-SlideUpBounce">
          <h2 className="text-primary font-bold mb-4">Whats New?</h2>
          <GitHubActivity />
        </div>
      </div>
    </div>
  );
}

export default Home;
