import React, { useState } from 'react';
import { CAMPUS_LOCATIONS, CampusLocation } from '../../data/campusLocations';
import { StartingLocation } from '../../data/startingLocations';
import { RouteResult } from '../../data/campusRoutes';
import { CAMPUS_ROAD_NODES, CAMPUS_ROAD_EDGES } from '../../data/campusRoadGraph';
import { isRestrictedRoad } from '../../data/restrictedRoads';

interface MapOverlayProps {
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

export const MapOverlay: React.FC<MapOverlayProps> = ({
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
  const [hoveredBuilding, setHoveredBuilding] = useState<CampusLocation | null>(null);

  // Active navigation step segment coordinates
  const activeStep = isNavigating && route?.steps ? route.steps[currentStepIndex] : null;

  // Determine starting point coordinates
  const startX = fromLocation.id === 'live-location' && liveCoords 
    ? liveCoords.x 
    : (fromLocation.mapPosition?.x ?? fromLocation.x);
  const startY = fromLocation.id === 'live-location' && liveCoords 
    ? liveCoords.y 
    : (fromLocation.mapPosition?.y ?? fromLocation.y);

  // Destination marker: strictly at building entrancePosition (Section 16)
  const destX = toLocation 
    ? (toLocation.entrancePosition?.x ?? toLocation.buildingEntrance?.x ?? toLocation.x + toLocation.width / 2)
    : 0;
  const destY = toLocation 
    ? (toLocation.entrancePosition?.y ?? toLocation.buildingEntrance?.y ?? toLocation.y + toLocation.height / 2)
    : 0;

  return (
    <svg
      className="campus-map-svg-overlay"
      viewBox="0 0 1024 512"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Campus Interactive Map Overlay"
    >
      <defs>
        {/* Shadow and glow filters */}
        <filter id="route-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
        </filter>

        <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
        </filter>

        {/* Selected building glow */}
        <filter id="selected-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* ── 1. Building Clickable Hotspots Layer ── */}
      <g className="building-hotspots-layer">
        {CAMPUS_LOCATIONS.map((bld) => {
          const isSelected = selectedBuilding?.id === bld.id || toLocation?.id === bld.id;
          const isHovered = hoveredBuilding?.id === bld.id;

          const posX = bld.buildingPosition?.x ?? bld.x;
          const posY = bld.buildingPosition?.y ?? bld.y;
          const posW = bld.buildingPosition?.width ?? bld.width;
          const posH = bld.buildingPosition?.height ?? bld.height;

          const cx = posX + posW / 2;
          const cy = posY + posH / 2;

          return (
            <g
              key={bld.id}
              className={`building-hotspot-group ${isSelected ? 'is-selected' : ''} ${
                isHovered ? 'is-hovered' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onBuildingClick(bld);
              }}
              onMouseEnter={() => setHoveredBuilding(bld)}
              onMouseLeave={() => setHoveredBuilding(null)}
              cursor="pointer"
              tabIndex={0}
              role="button"
              aria-label={`Building ${bld.number}: ${bld.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  onBuildingClick(bld);
                }
              }}
            >
              {/* Hitbox shape */}
              {bld.shape === 'circle' ? (
                <circle
                  cx={cx}
                  cy={cy}
                  r={posW / 2}
                  className="building-shape"
                  pointerEvents="all"
                />
              ) : (
                <rect
                  x={posX}
                  y={posY}
                  width={posW}
                  height={posH}
                  rx="3"
                  className="building-shape"
                  pointerEvents="all"
                />
              )}

              {/* Selection Glowing Outline */}
              {isSelected && (
                <rect
                  x={posX - 2}
                  y={posY - 2}
                  width={posW + 4}
                  height={posH + 4}
                  rx="4"
                  className="building-selection-outline"
                  filter="url(#selected-glow)"
                />
              )}
            </g>
          );
        })}
      </g>

      {/* ── 2. Walking Route Path Layer (High Contrast, Road-Aligned) ── */}
      {route && (
        <g className="walking-route-layer">
          {/* Subtle White Outer Border for Strong Contrast on Map */}
          <path
            d={route.pathD}
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
            filter="url(#route-shadow)"
          />

          {/* Thick Solid Blue Route Core */}
          <path
            d={route.pathD}
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Animated Dashed Walking Trail */}
          <path
            d={route.pathD}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3.5"
            strokeDasharray="6 5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="route-animated-dash"
          />

          {/* ── 3. Active Navigation Segment Highlight ── */}
          {activeStep && (
            <g className="active-segment-group">
              {/* White backing for active segment */}
              <line
                x1={activeStep.fromNode.x}
                y1={activeStep.fromNode.y}
                x2={activeStep.toNode.x}
                y2={activeStep.toNode.y}
                stroke="#ffffff"
                strokeWidth="11"
                strokeLinecap="round"
              />
              {/* Vibrant Emerald Highlight */}
              <line
                x1={activeStep.fromNode.x}
                y1={activeStep.fromNode.y}
                x2={activeStep.toNode.x}
                y2={activeStep.toNode.y}
                stroke="#10b981"
                strokeWidth="6"
                strokeLinecap="round"
                className="active-segment-highlight"
              />
            </g>
          )}
        </g>
      )}

      {/* ── 4. Start Location Marker (🟢 Green = Starting Point) ── */}
      <g
        className="marker-group start-marker"
        transform={`translate(${startX}, ${startY})`}
        filter="url(#pin-shadow)"
      >
        <circle r="14" fill="#10b981" fillOpacity="0.35" className="marker-pulse-ring" />
        <circle r="7.5" fill="#059669" stroke="#ffffff" strokeWidth="2.5" />
        <circle r="3" fill="#ffffff" />
        <text
          y="-14"
          textAnchor="middle"
          className="svg-marker-label start-label"
        >
          {fromLocation.name}
        </text>
      </g>

      {/* ── 5. Destination Marker (🔴 Red = Destination, Placed at Entrance Position) ── */}
      {toLocation && (
        <g
          className="marker-group destination-marker"
          transform={`translate(${destX}, ${destY})`}
          filter="url(#pin-shadow)"
        >
          <circle r="16" fill="#ef4444" fillOpacity="0.35" className="marker-pulse-ring-dest" />
          <path
            d="M 0 0 C -6 -10, -8 -15, -8 -18 C -8 -23, -4 -27, 0 -27 C 4 -27, 8 -23, 8 -18 C 8 -15, 6 -10, 0 0 Z"
            fill="#dc2626"
            stroke="#ffffff"
            strokeWidth="1.8"
          />
          <circle cx="0" cy="-18" r="3.5" fill="#ffffff" />
          <text
            y="-32"
            textAnchor="middle"
            className="svg-marker-label dest-label"
          >
            {toLocation.number} — {toLocation.name}
          </text>
        </g>
      )}

      {/* ── 6. Live Location Marker (🔵 Blue = Live Location) ── */}
      {liveCoords && (
        <g
          className="marker-group live-location-marker"
          transform={`translate(${liveCoords.x}, ${liveCoords.y})`}
        >
          <circle r="18" fill="#3b82f6" fillOpacity="0.35" className="live-radar-pulse" />
          <circle r="8" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
          <circle r="3.5" fill="#ffffff" />
          <text
            y="-14"
            textAnchor="middle"
            className="svg-marker-label live-label"
          >
            🔵 You are here
          </text>
        </g>
      )}

      {/* ── 7. Hover Tooltip ── */}
      {hoveredBuilding && hoveredBuilding.id !== toLocation?.id && (
        <g
          className="hover-tooltip-group"
          transform={`translate(${(hoveredBuilding.buildingPosition?.x ?? hoveredBuilding.x) + (hoveredBuilding.buildingPosition?.width ?? hoveredBuilding.width) / 2}, ${(hoveredBuilding.buildingPosition?.y ?? hoveredBuilding.y) - 10})`}
          pointerEvents="none"
        >
          <rect
            x={-Math.max(60, hoveredBuilding.name.length * 4)}
            y="-22"
            width={Math.max(120, hoveredBuilding.name.length * 8)}
            height="22"
            rx="4"
            fill="#0f172a"
            fillOpacity="0.94"
            stroke="#38bdf8"
            strokeWidth="1.2"
          />
          <text
            y="-7"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="bold"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {hoveredBuilding.number} — {hoveredBuilding.name}
          </text>
        </g>
      )}

      {/* ── 8. Developer / Debug Mode Visualization Layer (Section 17) ── */}
      {isDebugMode && (
        <g className="debug-road-network-layer" pointerEvents="none">
          {/* A. Classified Road Edges: Public (Green) vs Restricted (⚫ Dark / Blocked) */}
          {CAMPUS_ROAD_EDGES.map((edge) => {
            const u = CAMPUS_ROAD_NODES[edge.from];
            const v = CAMPUS_ROAD_NODES[edge.to];
            if (!u || !v) return null;

            const isBlocked = !edge.walkable || 
                              edge.accessType === 'RESTRICTED' || 
                              edge.accessType === 'RESTRICTED_ROAD' || 
                              edge.accessType === 'BLOCKED_ROAD' || 
                              edge.accessType === 'HOSTEL_ACCESS' || 
                              isRestrictedRoad(edge.id);

            if (isBlocked) {
              return (
                <g key={`dbg-e-${edge.id}`}>
                  {/* Outer border for visibility */}
                  <line
                    x1={u.x}
                    y1={u.y}
                    x2={v.x}
                    y2={v.y}
                    stroke="#ef4444"
                    strokeWidth="5"
                    strokeOpacity="0.4"
                  />
                  {/* ⚫ Restricted road line */}
                  <line
                    x1={u.x}
                    y1={u.y}
                    x2={v.x}
                    y2={v.y}
                    stroke="#18181b"
                    strokeWidth="3.5"
                    strokeDasharray="5 3"
                    strokeLinecap="round"
                    strokeOpacity="0.95"
                  />
                </g>
              );
            }

            return (
              <line
                key={`dbg-e-${edge.id}`}
                x1={u.x}
                y1={u.y}
                x2={v.x}
                y2={v.y}
                stroke="#10b981"
                strokeWidth="2.2"
                strokeOpacity="0.75"
              />
            );
          })}

          {/* B. Classified Road Nodes (🟢 Public node, 🟡 Junction, 🔵 Entrance, 🔴 Destination) */}
          {Object.values(CAMPUS_ROAD_NODES).map((node) => {
            const isFourWayJunction =
              node.id === 'hostelFourWayJunction' ||
              node.id === 'eastCampusFourWayJunction' ||
              node.id === 'node-east-campus-four-way-junction';
            const isJunction = node.type === 'junction';
            const isEntrance = node.type === 'access';

            if (isFourWayJunction) {
              return (
                <g key={`dbg-n-${node.id}`} transform={`translate(${node.x}, ${node.y})`}>
                  <circle r="14" fill="#facc15" fillOpacity="0.35" className="marker-pulse-ring" />
                  <circle r="6.5" fill="#eab308" stroke="#ffffff" strokeWidth="2.5" />
                  <text
                    y="-12"
                    textAnchor="middle"
                    fill="#facc15"
                    fontSize="8.5"
                    fontWeight="800"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                    paintOrder="stroke fill"
                  >
                    🟡 2ND LEFT (FOUR-WAY JUNCTION)
                  </text>
                </g>
              );
            }

            if (node.id === 'node-hostel-first-left-junction') {
              return (
                <g key={`dbg-n-${node.id}`} transform={`translate(${node.x}, ${node.y})`}>
                  <circle r="10" fill="#ef4444" fillOpacity="0.3" className="marker-pulse-ring-dest" />
                  <circle r="5" fill="#18181b" stroke="#ef4444" strokeWidth="2" />
                  <text
                    y="-10"
                    textAnchor="middle"
                    fill="#fca5a5"
                    fontSize="7.5"
                    fontWeight="800"
                    stroke="#0f172a"
                    strokeWidth="2"
                    paintOrder="stroke fill"
                  >
                    ⚫ 1ST LEFT (RESTRICTED)
                  </text>
                </g>
              );
            }

            if (isJunction) {
              // 🟡 Junction
              return (
                <circle
                  key={`dbg-n-${node.id}`}
                  cx={node.x}
                  cy={node.y}
                  r="4.5"
                  fill="#eab308"
                  stroke="#0f172a"
                  strokeWidth="1.2"
                />
              );
            }

            if (isEntrance) {
              // 🔵 Building entrance
              return (
                <circle
                  key={`dbg-n-${node.id}`}
                  cx={node.x}
                  cy={node.y}
                  r="3.5"
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
              );
            }

            // 🟢 Public road node
            return (
              <circle
                key={`dbg-n-${node.id}`}
                cx={node.x}
                cy={node.y}
                r="3"
                fill="#10b981"
                stroke="#0f172a"
                strokeWidth="1"
              />
            );
          })}

          {/* C. Restricted Hostel Road Area Notice Banner */}
          <g className="debug-restricted-banner" transform="translate(835, 125)">
            <rect
              x="-115"
              y="-13"
              width="230"
              height="26"
              rx="5"
              fill="#18181b"
              fillOpacity="0.95"
              stroke="#ef4444"
              strokeWidth="2"
              filter="url(#pin-shadow)"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#fee2e2"
              fontSize="8.5"
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              ⚫ RESTRICTED ROAD — HOSTEL ACCESS CLOSED
            </text>
          </g>
        </g>
      )}
    </svg>
  );
};

export default MapOverlay;
