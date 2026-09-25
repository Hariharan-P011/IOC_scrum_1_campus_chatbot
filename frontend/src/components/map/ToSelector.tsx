import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CAMPUS_LOCATIONS, CampusLocation } from '../../data/campusLocations';

interface ToSelectorProps {
  selectedToLocation: CampusLocation | null;
  onSelectTo: (location: CampusLocation | null) => void;
  excludeLocationId?: string | null; // prevent FROM = TO
}

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

export const ToSelector: React.FC<ToSelectorProps> = ({
  selectedToLocation,
  onSelectTo,
  excludeLocationId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or touch
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const filteredLocations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return CAMPUS_LOCATIONS.filter((loc) => {
      // Exclude same-as-FROM building
      if (excludeLocationId && loc.id === excludeLocationId) return false;

      // Category filter
      if (activeCategory !== 'All' && loc.category !== activeCategory) {
        return false;
      }

      if (!q) return true;

      // Match number, name, category, or tags
      const matchesNumber = loc.number.toLowerCase().includes(q);
      const matchesName = loc.name.toLowerCase().includes(q);
      const matchesCategory = loc.category.toLowerCase().includes(q);
      const matchesTags = loc.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesNumber || matchesName || matchesCategory || matchesTags;
    });
  }, [searchQuery, activeCategory, excludeLocationId]);


  // Reset keyboard highlight whenever filtered list changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [filteredLocations]);

  // Scroll highlighted item into view if navigating with keyboard
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeEl = listRef.current.querySelector('.keyboard-highlighted') as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (loc: CampusLocation) => {
    onSelectTo(loc);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectTo(null);
    setSearchQuery('');
    setIsOpen(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % Math.max(1, filteredLocations.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filteredLocations.length) % Math.max(1, filteredLocations.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredLocations.length > 0 && filteredLocations[highlightedIndex]) {
        handleSelect(filteredLocations[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="to-selector-container" ref={wrapperRef}>
      <div className="selector-field-wrapper">
        <label className="selector-label" htmlFor="destination-search-input">
          <span className="label-dot to-dot">🔴</span>
          <span className="label-text">TO</span>
        </label>

        {/* If destination is selected and dropdown is closed, show prominent pill */}
        {selectedToLocation && !isOpen && !searchQuery ? (
          <div
            className="selected-destination-pill"
            onClick={() => {
              setIsOpen(true);
              setTimeout(() => inputRef.current?.focus(), 50);
            }}
            title="Click to change destination"
            role="button"
            tabIndex={0}
          >
            <span className="selected-destination-badge">{selectedToLocation.number}</span>
            <span className="selected-destination-name">{selectedToLocation.name}</span>
            <span className="change-dest-hint">Change</span>
            <button
              type="button"
              className="clear-destination-btn"
              onClick={handleClear}
              title="Clear Destination"
              aria-label="Clear destination"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="search-input-box" onClick={() => setIsOpen(true)}>
            <span className="search-icon">🔍</span>
            <input
              id="destination-search-input"
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder={
                selectedToLocation
                  ? `${selectedToLocation.number} — ${selectedToLocation.name}`
                  : 'Search building, dept, canteen, lab...'
              }
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
            />
            {(searchQuery || selectedToLocation) && (
              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
                title="Clear Destination"
                aria-label="Clear destination"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="destination-dropdown-panel" role="listbox">
          {/* Category Filter Chips */}
          <div className="category-chips-bar" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCategory(cat);
                }}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat === 'All' ? '🌟 All' : cat}
              </button>
            ))}
          </div>

          {/* Quick Popular Picks (shown when no query) */}
          {!searchQuery && activeCategory === 'All' && (
            <div className="popular-section">
              <div className="section-title">Popular Destinations</div>
              <div className="popular-tags">
                {[
                  { label: '💻 Dept of IT (13)', id: 'bld-13' },
                  { label: '🏛️ Admin Block (04)', id: 'bld-04' },
                  { label: '📚 MIT Library (26)', id: 'bld-26' },
                  { label: '🍴 Canteen (19)', id: 'bld-19' },
                  { label: '🚗 Automobile Eng (12)', id: 'bld-12' },
                  { label: '✈️ Aerospace Eng (21)', id: 'bld-21' },
                  { label: '🏠 Cauvery Hostel (42)', id: 'bld-42' }
                ].map((item) => {
                  const loc = CAMPUS_LOCATIONS.find((l) => l.id === item.id);
                  if (!loc) return null;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="popular-badge-btn"
                      onClick={() => handleSelect(loc)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results List */}
          <div className="destinations-scroll-list" ref={listRef}>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, idx) => {
                const isSelected = selectedToLocation?.id === loc.id;
                const isHighlighted = idx === highlightedIndex;

                return (
                  <button
                    key={loc.id}
                    type="button"
                    className={`destination-item ${isSelected ? 'selected' : ''} ${
                      isHighlighted ? 'keyboard-highlighted' : ''
                    }`}
                    onClick={() => handleSelect(loc)}
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
                <span>🔍 No destinations found matching "{searchQuery}"</span>
                <p>Try searching by building number (e.g. 13, 04), name, or category.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToSelector;

