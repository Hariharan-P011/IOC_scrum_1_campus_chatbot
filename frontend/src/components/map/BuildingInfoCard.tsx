import React from 'react';
import { CampusLocation } from '../../data/campusLocations';

interface BuildingInfoCardProps {
  location: CampusLocation | null;
  onClose: () => void;
  onSetAsDestination: (location: CampusLocation) => void;
  isDestination: boolean;
}

export const BuildingInfoCard: React.FC<BuildingInfoCardProps> = ({
  location,
  onClose,
  onSetAsDestination,
  isDestination
}) => {
  if (!location) return null;

  return (
    <aside className="building-info-card" aria-label="Building Details">
      <div className="card-header">
        <div className="card-badge-row">
          <span className="building-number-pill">
            Building {location.number}
          </span>
          <span className="building-cat-pill">
            {location.category}
          </span>
        </div>
        <button
          type="button"
          className="card-close-btn"
          onClick={onClose}
          aria-label="Close building card"
        >
          ✕
        </button>
      </div>

      <div className="card-body">
        <div className="card-title-row">
          <span className="card-icon">{location.icon}</span>
          <h2 className="card-title">{location.name}</h2>
        </div>

        <p className="card-description">{location.description}</p>

        {location.category === 'Hostel' && (
          <div className="hostel-access-warning-card">
            <span className="warning-icon">⚠️</span>
            <div className="warning-text-block">
              <span className="warning-heading">Hostel Zone Restriction</span>
              <span className="warning-body">
                Hostel access may be restricted. Please use an authorized hostel entrance.
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="card-actions">
        {!isDestination ? (
          <button
            type="button"
            className="action-btn primary-action-btn"
            onClick={() => onSetAsDestination(location)}
          >
            <span>🚩</span>
            <span>Set as Destination</span>
          </button>
        ) : (
          <div className="destination-selected-status">
            <span>🔴 Current Destination</span>
          </div>
        )}

        <button
          type="button"
          className="action-btn secondary-action-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </aside>
  );
};

export default BuildingInfoCard;
