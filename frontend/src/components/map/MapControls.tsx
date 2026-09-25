import React from 'react';

interface MapControlsProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isDebugMode?: boolean;
  onToggleDebug?: () => void;
  minZoom?: number;
  maxZoom?: number;
}

export const MapControls: React.FC<MapControlsProps> = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onReset,
  isFullscreen,
  onToggleFullscreen,
  isDebugMode = false,
  onToggleDebug,
  minZoom = 1.0,
  maxZoom = 3.0
}) => {
  const percentage = Math.round(zoomLevel * 100);

  return (
    <div className="map-controls-dock" role="toolbar" aria-label="Map Zoom and View Controls">
      {/* Compass Indicator */}
      <div className="map-compass" title="Campus North (Standard Orientation)">
        <span className="compass-icon">🧭</span>
        <span className="compass-needle">N</span>
      </div>

      <div className="map-zoom-buttons">
        <button
          type="button"
          className="map-control-btn"
          onClick={onZoomIn}
          disabled={zoomLevel >= maxZoom}
          title="Zoom In (Centered)"
          aria-label="Zoom In"
        >
          <span className="btn-icon">➕</span>
        </button>

        <div className="zoom-indicator" title="Current Zoom Scale">
          {percentage}%
        </div>

        <button
          type="button"
          className="map-control-btn"
          onClick={onZoomOut}
          disabled={zoomLevel <= minZoom}
          title="Zoom Out (Centered)"
          aria-label="Zoom Out"
        >
          <span className="btn-icon">➖</span>
        </button>
      </div>

      <div className="map-action-buttons">
        <button
          type="button"
          className="map-control-btn reset-btn"
          onClick={onReset}
          title="Reset View to 100% Center (Maintains selected route)"
          aria-label="Reset View"
        >
          <span className="btn-icon">↻</span>
          <span className="btn-text">Reset</span>
        </button>

        {onToggleDebug && (
          <button
            type="button"
            className={`map-control-btn debug-dock-btn ${isDebugMode ? 'active' : ''}`}
            onClick={onToggleDebug}
            title={isDebugMode ? 'Hide Developer Road Network Debug' : 'Show Developer Road Network Debug'}
            aria-label="Toggle Road Network Debug"
          >
            <span className="btn-icon">🛠️</span>
          </button>
        )}

        <button
          type="button"
          className="map-control-btn fullscreen-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'View Map Fullscreen'}
          aria-label="Toggle Fullscreen"
        >
          <span className="btn-icon">{isFullscreen ? '🗗' : '⛶'}</span>
        </button>
      </div>
    </div>
  );
};

export default MapControls;
