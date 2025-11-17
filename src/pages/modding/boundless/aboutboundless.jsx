import React from 'react';
import TitleCard from '../../../components/PageTitleCard.jsx';



function AboutBoundless() {
  return (
    <div className="body">
        <TitleCard
          image="/assets/Boundless.png"
          title="Boundless: Quests"
          subtitle="A fully dynamic questing system for NeoForge 1.21.1"
        ></TitleCard>

<div className="about p-6 space-y-6">

  <div className="space-y-3">
    <h2 className="text-2xl font-bold">ABOUT</h2>
    <p className="text-base opacity-90 leading-relaxed">
      Boundless is a powerful and lightweight Minecraft questing mod created for modpack creators.
      It provides a clean, vanilla-like questing system that’s easy to set up and seamlessly integrates
      into any modpack. The JSON-driven system allows full control over dependencies, rewards, and
      completion conditions, organized through flexible categories.
      Whether you want a simple tutorial path or a full RPG-style progression, Boundless gives you
      the freedom to create your own adventure.
    </p>
  </div>

  <div className="space-y-3">
    <h2 className="text-2xl font-bold">KEY FEATURES</h2>

    <ul className="list-disc list-inside space-y-2 opacity-90">
      <li><b>Creator-Focused:</b> Dependency-free, with frequent updates and improvements.</li>
      <li><b>Minimalist:</b> A vanilla-like UI that feels natural inside the Minecraft inventory.</li>
      <li><b>JSON-Driven:</b> Full control over quests, categories, rewards, and conditions.</li>
      <li><b>Multiple Quest Types:</b> Collection, Submission, Effect, Kill, and Advancement.</li>
      <li><b>Rewards:</b> Set Rewards For Quest Completion, Like an Item or command even both.</li>
      <li><b>Optimized:</b> Lightweight and highly performant, no bloat, only whats necessary</li>
    </ul>
  </div>

</div>


    </div>
  );
}

export default AboutBoundless;
