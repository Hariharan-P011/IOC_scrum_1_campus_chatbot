import React from 'react';
import MapOverlay from './MapOverlay';
import { CampusLocation } from '../../data/campusLocations';
import { StartingLocation } from '../../data/startingLocations';
import { RouteResult } from '../../data/campusRoutes';

interface CampusMapProps {
  zoomLevel: number;
  fromLocation: StartingLocation;
  liveCoords: { x: number; y: number } | null;
  toLocation: CampusLocation | null;
  selectedBuilding: CampusLocation | null;
  onBuildingClick: (location: CampusLocation) => void;
  route: RouteResult | null;
  isNavigating: boolean;
  currentStepIndex: number;
  isDebugMode?: boolean;
}

export const CampusMap: React.FC<CampusMapProps> = ({
  zoomLevel,
  fromLocation,
  liveCoords,
  toLocation,
  selectedBuilding,
  onBuildingClick,
  route,
  isNavigating,
  currentStepIndex,
  isDebugMode = false
}) => {
  return (
    <div
      className="campus-map-viewport"
      id="campus-map-viewport"
      // Explicitly preventing drag or scroll default behaviors on the static viewport
      onDragStart={(e) => e.preventDefault()}
      onTouchMove={(e) => {
        // Prevent default touch swipe movement that could scroll or pan
        if (e.cancelable) e.preventDefault();
      }}
    >
      {/* Centered scaling layer: Strictly scales around center center with NO pan offsets */}
      <div
        className="campus-map-content-container"
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Authoritative Base Map Image: Anna University MIT Campus Layout */}
        <img
          src="/mit_campus_layout.jpg"
          alt="Official Anna University - Madras Institute of Technology (MIT) Campus Layout"
          className="campus-base-image"
          draggable={false}
        />

        {/* Interactive SVG Overlay (Synchronized on 1024x512 coordinate plane) */}
        <MapOverlay
          fromLocation={fromLocation}
          liveCoords={liveCoords}
          toLocation={toLocation}
          selectedBuilding={selectedBuilding}
          onBuildingClick={onBuildingClick}
          route={route}
          isNavigating={isNavigating}
          currentStepIndex={currentStepIndex}
          isDebugMode={isDebugMode}
        />
      </div>
    </div>
  );
};

export default CampusMap;
