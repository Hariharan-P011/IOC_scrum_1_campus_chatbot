import React from 'react';
import { RouteResult } from '../../data/campusRoutes';
import { CampusLocation } from '../../data/campusLocations';

interface RoutePanelProps {
  route: RouteResult | null;
  fromLocationName: string;
  toLocation: CampusLocation | null;
  onStartNavigation: () => void;
  onClearRoute: () => void;
  isNavigating: boolean;
}

export const RoutePanel: React.FC<RoutePanelProps> = ({
  route,
  fromLocationName,
  toLocation,
  onStartNavigation,
  onClearRoute,
  isNavigating
}) => {
  if (!toLocation || isNavigating) return null;

  return (
    <aside className="route-summary-panel" aria-label="Walking Route Summary">
      <div className="panel-mode-header">
        <span className="mode-icon">🚶</span>
        <span className="mode-label">Campus Walking Route</span>
      </div>

      <div className="route-endpoints">
        <div className="endpoint-item">
          <span className="endpoint-dot from-marker-dot">🟢</span>
          <div className="endpoint-text">
            <span className="endpoint-type">FROM</span>
            <span className="endpoint-name">{fromLocationName}</span>
          </div>
        </div>

        <div className="route-line-connector">
          <span className="connector-line"></span>
        </div>

        <div className="endpoint-item">
          <span className="endpoint-dot to-marker-dot">🔴</span>
          <div className="endpoint-text">
            <span className="endpoint-type">TO</span>
            <span className="endpoint-name">
              {toLocation.number} — {toLocation.name}
            </span>
          </div>
        </div>
      </div>

      {route ? (
        <div className="route-metrics">
          <div className="metric-box">
            <span className="metric-icon">📏</span>
            <div className="metric-details">
              <span className="metric-label">Approx. distance</span>
              <span className="metric-value">{route.totalDistanceMeters} m</span>
            </div>
          </div>

          <div className="metric-divider"></div>

          <div className="metric-box">
            <span className="metric-icon">⏱️</span>
            <div className="metric-details">
              <span className="metric-label">Est. walking time</span>
              <span className="metric-value">{route.estimatedTimeMinutes} min</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="route-unavailable-notice">
          ⚠️ Calculating walking pathway across campus roads...
        </div>
      )}

      {/* Caution notice if destination is in restricted hostel area */}
      {toLocation.category === 'Hostel' && (
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

      <div className="route-panel-actions">
        <button
          type="button"
          className="start-navigation-btn"
          onClick={onStartNavigation}
          disabled={!route}
        >
          <span>🚀</span>
          <span>Start Navigation</span>
        </button>

        <button
          type="button"
          className="clear-route-btn"
          onClick={onClearRoute}
          title="Clear Route"
        >
          Clear Route
        </button>
      </div>
    </aside>
  );
};

export default RoutePanel;
