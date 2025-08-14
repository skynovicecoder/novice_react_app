import React, { useState, useRef } from "react";

const tabs = [
  { id: "tab-1", label: "Home", panelId: "panel-1", content: "Welcome to Home" },
  { id: "tab-2", label: "Profile", panelId: "panel-2", content: "Your Profile Info" },
  { id: "tab-3", label: "Settings", panelId: "panel-3", content: "Adjust Settings here" },
];

export default function AccessibleTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const focusTab = (index) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab((activeIndex + 1) % tabs.length);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab((activeIndex - 1 + tabs.length) % tabs.length);
    }
    if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div>
      {/* Tab List */}
      <div role="tablist" aria-label="Sample Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={tab.id}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={tab.panelId}
            tabIndex={activeIndex === index ? 0 : -1}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            onKeyDown={handleKeyDown}
            style={{
              padding: "8px 16px",
              marginRight: "4px",
              borderBottom: activeIndex === index ? "3px solid blue" : "1px solid gray",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab, index) => (
        <div
          key={tab.panelId}
          id={tab.panelId}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={activeIndex !== index}
          style={{ padding: "10px", border: "1px solid #ccc", marginTop: "8px" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}