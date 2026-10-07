import React from 'react';
import HeaderCard from '../components/HeaderCard';
import GitHubActivity from '../components/GitHubActivity';

function Home() {
  return (
    <div className="body">
      <HeaderCard />

      <div className="content A-SlideUpBounce mt-6">
        <h2 className="text-primary font-bold mb-4">Whats New?</h2>
        <GitHubActivity />
      </div>
    </div>
  );
}

export default Home;
