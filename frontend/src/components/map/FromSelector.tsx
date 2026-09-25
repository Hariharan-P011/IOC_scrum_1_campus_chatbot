import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CAMPUS_LOCATIONS, CampusLocation } from '../../data/campusLocations';

// Unified FROM location — either a named gate or any campus building
export interface GateLocation {
  kind: 'gate';
  id: string;
  name: string;
  icon: string;
  shortLabel: string;
  description: string;
  mapPosition: { x: number; y: number };
  accessNode: string;
}

export interface BuildingFromLocation {
  kind: 'building';
  location: CampusLocation;
}

export type AnyFromLocation = GateLocation | BuildingFromLocation;

// Helper to get display info from AnyFromLocation
export function getFromDisplayName(loc: AnyFromLocation): string {
  return loc.kind === 'gate' ? loc.name : `${loc.location.number} — ${loc.location.name}`;
}

export function getFromIcon(loc: AnyFromLocation): string {
  return loc.kind === 'gate' ? loc.icon : loc.location.icon;
}

export function getFromAccessNode(loc: AnyFromLocation): string {
  return loc.kind === 'gate' ? loc.accessNode : loc.location.entranceNode;
}

export function getFromMapPosition(loc: AnyFromLocation): { x: number; y: number } {
  if (loc.kind === 'gate') return loc.mapPosition;
  return loc.location.entrancePosition ?? { x: loc.location.x + loc.location.width / 2, y: loc.location.y + loc.location.height / 2 };
}

// Gate definitions (no Live Location)
export const GATE_LOCATIONS: GateLocation[] = [
  {
    kind: 'gate',
    id: 'front-gate',
    name: 'Front Gate',
    icon: '🟢',
    shortLabel: 'Front Gate (Main Entrance)',
    description: 'Official Main Entrance on Madambakkam Main Road.',
    mapPosition: { x: 55, y: 238 },
    accessNode: 'node-front-gate-road',
  },
  {
    kind: 'gate',
    id: 'back-gate',
    name: 'Back Gate',
    icon: '🟢',
    shortLabel: 'Back Gate (Chromepet Railway Station Side)',
    description: 'Rear campus entry near Chromepet Railway Station.',
    mapPosition: { x: 962, y: 55 },
    accessNode: 'node-back-gate-access',
  },
];

const CATEGORIES = [
  'All',
  'Academic / Department',
  'Hostel',
  'Food / Canteen',
  'Library',
  'Administration',
  'Research Centre',
  'Sports / Recreation',
];

interface FromSelectorProps {
  selectedFrom: AnyFromLocation;
  toLocationId?: string | null; // to prevent FROM = TO
  onSelectFrom: (location: AnyFromLocation) => void;
}

export const FromSelector: React.FC<FromSelectorProps> = ({
  selectedFrom,
  toLocationId,
  onSelectFrom,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const filteredBuildings = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CAMPUS_LOCATIONS.filter((loc) => {
      // Skip if same as destination (FROM ≠ TO)
      if (toLocationId && loc.id === toLocationId) return false;

      if (activeCategory !== 'All' && loc.category !== activeCategory) return false;
      if (!q) return true;

      return (
        loc.number.toLowerCase().includes(q) ||
        loc.name.toLowerCase().includes(q) ||
        loc.category.toLowerCase().includes(q) ||
        loc.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, activeCategory, toLocationId]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [filteredBuildings]);

  useEffect(() => {
    if (isOpen && listRef.current) {
      const el = listRef.current.querySelector('.keyboard-highlighted') as HTMLElement;
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex, isOpen]);

  const handleSelectGate = (gate: GateLocation) => {
    onSelectFrom(gate);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleSelectBuilding = (loc: CampusLocation) => {
    onSelectFrom({ kind: 'building', location: loc });
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') setIsOpen(true);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((p) => (p + 1) % Math.max(1, filteredBuildings.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((p) => (p - 1 + filteredBuildings.length) % Math.max(1, filteredBuildings.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredBuildings[highlightedIndex]) handleSelectBuilding(filteredBuildings[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const displayName = getFromDisplayName(selectedFrom);
  const displayIcon = getFromIcon(selectedFrom);

  return (
    <div className="from-selector-container" ref={wrapperRef}>
      <div className="selector-field-wrapper">
        <label className="selector-label" id="from-label">
          <span className="label-dot from-dot">🟢</span>
          <span className="label-text">FROM</span>
        </label>

        {/* Pill when closed */}
        {!isOpen ? (
          <div
            className="selected-destination-pill"
            onClick={() => {
              setIsOpen(true);
              setTimeout(() => inputRef.current?.focus(), 50);
            }}
            title="Click to change starting location"
            role="button"
            tabIndex={0}
          >
            <span className="selected-destination-badge" style={{ background: 'var(--color-success, #059669)', color: '#fff' }}>
              {selectedFrom.kind === 'gate'
                ? (selectedFrom.id === 'front-gate' ? 'FG' : 'BG')
                : selectedFrom.location.number}
            </span>
            <span className="selected-destination-name">{displayName}</span>
            <span className="change-dest-hint">Change</span>
          </div>
        ) : (
          <div className="search-input-box" onClick={() => setIsOpen(true)}>
            <span className="search-icon">🔍</span>
            <input
              id="from-search-input"
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder={`${displayIcon} ${displayName}`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              aria-autocomplete="list"
              aria-expanded={isOpen}
              autoComplete="off"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >✕</button>
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="destination-dropdown-panel" role="listbox">
          {/* Gate quick-picks at top */}
          <div className="popular-section">
            <div className="section-title">🚪 Campus Gates</div>
            <div className="popular-tags">
              {GATE_LOCATIONS.map((gate) => {
                const isSelected = selectedFrom.kind === 'gate' && selectedFrom.id === gate.id;
                return (
                  <button
                    key={gate.id}
                    type="button"
                    className={`popular-badge-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectGate(gate)}
                  >
                    {gate.icon} {gate.name}
                    {isSelected && ' ✓'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category chips */}
          <div className="category-chips-bar" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveCategory(cat); }}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat === 'All' ? '🌟 All' : cat}
              </button>
            ))}
          </div>

          {/* Building list */}
          <div className="destinations-scroll-list" ref={listRef}>
            {filteredBuildings.length > 0 ? (
              filteredBuildings.map((loc, idx) => {
                const isSelected =
                  selectedFrom.kind === 'building' && selectedFrom.location.id === loc.id;
                const isHighlighted = idx === highlightedIndex;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    className={`destination-item ${isSelected ? 'selected' : ''} ${isHighlighted ? 'keyboard-highlighted' : ''}`}
                    onClick={() => handleSelectBuilding(loc)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="item-icon-box">{loc.icon}</div>
                    <div className="item-text-box">
                      <div className="item-primary-line">
                        <span className="building-num-badge">{loc.number}</span>
                        <span className="building-title">{loc.name}</span>
                      </div>
                      <div className="item-secondary-line">
                        <span className="category-tag">{loc.category}</span>
                        <span className="desc-snippet">{loc.description}</span>
                      </div>
                    </div>
                    {isSelected && <span className="item-check">✓</span>}
                  </button>
                );
              })
            ) : (
              <div className="no-destinations-found">
                <span>🔍 No buildings found matching "{searchQuery}"</span>
                <p>Try searching by building number, name, or category.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FromSelector;
