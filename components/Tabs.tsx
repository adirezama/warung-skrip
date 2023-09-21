import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "Colorables",
    title: "Colorables",
    text: "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.",
  },
  {
    id: 2,
    name: "Logos",
    title: "Acme Logos",
    text: "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet.",
  },
  {
    id: 3,
    name: "Blocks",
    title: "Blocks wireframe",
    text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.",
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].text}</div>
    </div>
  );
}
