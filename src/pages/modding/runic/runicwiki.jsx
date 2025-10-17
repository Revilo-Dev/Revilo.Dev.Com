import React, { useMemo, useState } from "react";
import HeaderCard from "../../../components/HeaderCard.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

function RunicWiki() {
  const topics = useMemo(
    () => [
      {
        id: "air-jump",
        title: "Air Jump",
        html: `
          <h1>Air Jump</h1>
          <p>Grants the ability to perform a mid-air hop. Useful for platforming and avoiding hazards.</p>
          <img src="/images/runic.png" alt="Air Jump Rune" style="width:100%;max-width:520px;border-radius:12px;border:2px solid var(--fallback-p, #f59e0b);margin:12px 0;" />
          <p>Stacks with speed effects. Consumes durability each use.</p>
        `,
      },
      {
        id: "flame",
        title: "Flame",
        html: `
          <h1>Flame</h1>
          <p>Applies burning to targets on hit and ignites arrows fired from the bow.</p>
          <img src="/images/boundless.png" alt="Flame Rune" style="width:100%;max-width:520px;border-radius:12px;border:2px solid var(--fallback-p, #f59e0b);margin:12px 0;" />
          <p>Higher tiers extend burn duration and add small AoE ignition.</p>
        `,
      },
      {
        id: "frost",
        title: "Frost",
        html: `
          <h1>Frost</h1>
          <p>Slows enemies and places temporary frost on water for quick traversal.</p>
          <p>Synergizes with knockback for strong crowd control.</p>
        `,
      },
      {
        id: "magnet",
        title: "Magnet",
        html: `
          <h1>Magnet</h1>
          <p>Pulls nearby drops toward the player within a short radius.</p>
          <p>Consumes durability passively while active.</p>
        `,
      },
      {
        id: "ward",
        title: "Ward",
        html: `
          <h1>Ward</h1>
          <p>Reduces incoming damage for a brief window after blocking.</p>
          <p>Higher tiers increase damage reduction and window length.</p>
        `,
      },
      {
        id: "blink",
        title: "Blink",
        html: `
          <h1>Blink</h1>
          <p>Short-range teleport toward the crosshair. Cannot pass through solid blocks.</p>
          <p>Has a short cooldown and durability cost.</p>
        `,
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(topics[0].id);
  const active = topics.find((t) => t.id === activeId);

  return (
    <div className="body">
      <HeaderCard />

      <div className="content w-full max-w-7xl mx-auto mt-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => history.back()}
            className="btn btn-soft rounded-full px-4"
          >
            <ChevronLeft className="mr-1" size={18} />
            Back
          </button>
          <div className="bg-base-300 rounded-full px-4 py-2 text-primary font-bold">
            Runic: Enchantments Wiki
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Topic list */}
          <div className="flex flex-col gap-3">
            {topics.map((t) => {
              const selected = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 bg-base-300 hover:bg-base-200 transition ${
                    selected ? "ring-2 ring-primary/60" : ""
                  }`}
                >
                  <span className="text-left font-extrabold tracking-wide text-primary">
                    {t.title.toUpperCase()}
                  </span>
                  <ChevronRight className="text-primary" size={18} />
                </button>
              );
            })}
          </div>

          {/* Right: Content box */}
          <div className="md:col-span-2">
            <div className="bg-base-300 rounded-2xl p-5 shadow-lg">
              <div
                className="prose max-w-none text-left"
                style={{
                  /* light typography without @tailwind/typography */
                  color: "inherit",
                }}
                dangerouslySetInnerHTML={{ __html: active?.html || "" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RunicWiki;
