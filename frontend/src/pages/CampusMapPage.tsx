import React, { useState, useMemo, useEffect, useRef } from 'react';
import CampusMap from '../components/map/CampusMap';
import FromSelector, {
  AnyFromLocation,
  GATE_LOCATIONS,
  getFromAccessNode,
  getFromMapPosition,
  getFromDisplayName,
} from '../components/map/FromSelector';
import ToSelector from '../components/map/ToSelector';
import RoutePanel from '../components/map/RoutePanel';
import NavigationPanel from '../components/map/NavigationPanel';
import BuildingInfoCard from '../components/map/BuildingInfoCard';
import MapControls from '../components/map/MapControls';
import Campus3DView from '../components/map/Campus3DView';

import { CAMPUS_LOCATIONS, CampusLocation } from '../data/campusLocations';
import { findWalkingRoute, RouteResult } from '../data/campusRoutes';
import '../styles/map.css';

interface CampusMapPageProps {
  onNavigateHome?: () => void;
}

export const CampusMapPage: React.FC<CampusMapPageProps> = ({ onNavigateHome }) => {
  // Navigation & View States
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isDebugMode, setIsDebugMode] = useState<boolean>(false);

  // FROM: default to Front Gate
  const [fromLocation, setFromLocation] = useState<AnyFromLocation>(GATE_LOCATIONS[0]);

  // TO: destination building
  const [toLocation, setToLocation] = useState<CampusLocation | null>(null);

  // Clicked building for Details Card
  const [selectedBuilding, setSelectedBuilding] = useState<CampusLocation | null>(null);

  // Turn by turn navigation state
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const stageWrapperRef = useRef<HTMLDivElement>(null);

  // Derive the start node from fromLocation
  const startNodeId = getFromAccessNode(fromLocation);
  const startMapPos = getFromMapPosition(fromLocation);

  // The FROM location building ID (to exclude from TO dropdown)
  const fromBuildingId =
    fromLocation.kind === 'building' ? fromLocation.location.id : null;

  // Compute walking route strictly along the campus road network
  const calculatedRoute: RouteResult | null = useMemo(() => {
    if (!toLocation) return null;
    const destNodeId = toLocation.entranceNode || toLocation.accessNode || toLocation.gateNodeId;
    return findWalkingRoute(startNodeId, destNodeId);
  }, [startNodeId, toLocation]);

  // Handlers for Zoom
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(3.0, Math.round((prev + 0.25) * 100) / 100));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(1.0, Math.round((prev - 0.25) * 100) / 100));
  };

  const handleResetView = () => {
    setZoomLevel(1.0);
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (stageWrapperRef.current?.requestFullscreen) {
        stageWrapperRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Building Click Interaction
  const handleBuildingClick = (bld: CampusLocation) => {
    setSelectedBuilding(bld);
    setIsSidebarCollapsed(false);
  };

  // Set clicked building as destination (only if not same as FROM)
  const handleSetAsDestination = (bld: CampusLocation) => {
    if (fromBuildingId === bld.id) return; // FROM ≠ TO
    setToLocation(bld);
    setIsNavigating(false);
    setCurrentStepIndex(0);
  };

  // Handle TO selection from autocomplete
  const handleSelectTo = (loc: CampusLocation | null) => {
    if (loc && fromBuildingId === loc.id) return; // FROM ≠ TO
    setToLocation(loc);
    setSelectedBuilding(loc);
    setIsNavigating(false);
    setCurrentStepIndex(0);
  };

  // Handle FROM selection — clear TO if FROM becomes same building
  const handleSelectFrom = (loc: AnyFromLocation) => {
    setFromLocation(loc);
    // If the newly selected FROM is the same building as TO, clear TO
    if (loc.kind === 'building' && toLocation && loc.location.id === toLocation.id) {
      setToLocation(null);
      setSelectedBuilding(null);
    }
    setIsNavigating(false);
    setCurrentStepIndex(0);
  };

  // Start Navigation
  const handleStartNavigation = () => {
    if (calculatedRoute && calculatedRoute.steps.length > 0) {
      setIsNavigating(true);
      setCurrentStepIndex(0);
    }
  };

  // Clear Route
  const handleClearRoute = () => {
    setToLocation(null);
    setSelectedBuilding(null);
    setIsNavigating(false);
    setCurrentStepIndex(0);
  };

  const handleBackToHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  // Build a synthetic "StartingLocation-like" object for MapOverlay compatibility
  const fromLocationForOverlay = {
    id: fromLocation.kind === 'gate' ? fromLocation.id : fromLocation.location.id,
    name: getFromDisplayName(fromLocation),
    icon: fromLocation.kind === 'gate' ? fromLocation.icon : fromLocation.location.icon,
    mapPosition: startMapPos,
    x: startMapPos.x,
    y: startMapPos.y,
    accessNode: startNodeId,
    nodeId: startNodeId,
  };

  return (
    <div className="campus-map-page">
      {/* ── Top Header Navigation Bar ── */}
      <header className="map-page-header">
        <div className="header-left">
          <button
            type="button"
            className="back-home-btn"
            onClick={handleBackToHome}
            title="Return to MIT Campus Chatbot Homepage"
          >
            <span>←</span>
            <span>MIT Campus Home</span>
          </button>

          <div className="brand-header-box">
            <span className="brand-crest-icon" aria-hidden="true">🎓</span>
            <div className="header-title-block">
              <span className="header-main-title">
                Madras Institute of Technology
              </span>
              <span className="header-sub-title">
                Official Campus Map &amp; Road Navigation
              </span>
            </div>
          </div>
        </div>

        <div className="header-right">
          {/* Developer Debug Road Network Mode Toggle */}
          <button
            type="button"
            className={`debug-header-btn ${isDebugMode ? 'active' : ''}`}
            onClick={() => setIsDebugMode(!isDebugMode)}
            title={isDebugMode ? 'Disable Developer Road Debug Overlay' : 'Enable Developer Road Debug Overlay'}
          >
            <span className="debug-btn-icon">🛠️</span>
            <span className="debug-btn-text">{isDebugMode ? 'DEBUG: ON' : 'DEBUG ROADS'}</span>
          </button>

          {/* 2D / 3D Mode Toggle Switch */}
          <div className="view-mode-toggle" role="group" aria-label="Map Display Modes">
            <button
              type="button"
              className={`mode-toggle-btn ${viewMode === '2d' ? 'active' : ''}`}
              onClick={() => setViewMode('2d')}
              title="Official 2D Static Campus Map"
            >
              🗺 2D MAP
            </button>
            <button
              type="button"
              className={`mode-toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
              onClick={() => setViewMode('3d')}
              title="Interactive 3D Conceptual Campus View"
            >
              🏙 3D VIEW
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Map Canvas Stage ── */}
      <main className="map-stage-wrapper" ref={stageWrapperRef}>
        {viewMode === '2d' ? (
          <div className="map-layout-container">
            {/* ── Desktop Dedicated Side Navigation Panel ── */}
            <aside className={`map-sidebar-panel ${isSidebarCollapsed ? 'collapsed' : ''}`} aria-label="Navigation Controls">
              {/* Collapse/Expand Sidebar Tab Button */}
              <button
                type="button"
                className="sidebar-collapse-tab"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                title={isSidebarCollapsed ? 'Expand Navigation Sidebar' : 'Collapse Sidebar for Full Map'}
                aria-label="Toggle Navigation Sidebar"
              >
                {isSidebarCollapsed ? '⮞' : '⮜'}
              </button>

              {!isSidebarCollapsed && (
                <div className="sidebar-inner-content">
                  {/* Search and Endpoint Direction Card */}
                  <div className="search-directions-card">
                    {/* FROM Selector — Gates + All Buildings */}
                    <FromSelector
                      selectedFrom={fromLocation}
                      toLocationId={toLocation?.id ?? null}
                      onSelectFrom={handleSelectFrom}
                    />

                    {/* FROM = TO warning */}
                    {fromLocation.kind === 'building' && toLocation &&
                      fromLocation.location.id === toLocation.id && (
                      <div style={{ color: '#ef4444', fontSize: '11px', padding: '4px 8px', background: '#fef2f2', borderRadius: '6px', marginTop: '4px' }}>
                        ⚠️ FROM and TO cannot be the same building.
                      </div>
                    )}

                    {/* TO Selector — All buildings, excludes current FROM building */}
                    <ToSelector
                      selectedToLocation={toLocation}
                      excludeLocationId={fromBuildingId}
                      onSelectTo={handleSelectTo}
                    />
                  </div>

                  {/* Route Summary Card */}
                  <RoutePanel
                    route={calculatedRoute}
                    fromLocationName={getFromDisplayName(fromLocation)}
                    toLocation={toLocation}
                    onStartNavigation={handleStartNavigation}
                    onClearRoute={handleClearRoute}
                    isNavigating={isNavigating}
                  />

                  {/* Turn-by-Turn Navigation Step-by-Step */}
                  {isNavigating && calculatedRoute && toLocation && (
                    <NavigationPanel
                      route={calculatedRoute}
                      toLocation={toLocation}
                      currentStepIndex={currentStepIndex}
                      onStepChange={(idx) => setCurrentStepIndex(idx)}
                      onExitNavigation={() => setIsNavigating(false)}
                    />
                  )}

                  {/* Building Details Card */}
                  {selectedBuilding && !isNavigating && (
                    <BuildingInfoCard
                      location={selectedBuilding}
                      onClose={() => setSelectedBuilding(null)}
                      onSetAsDestination={handleSetAsDestination}
                      isDestination={toLocation?.id === selectedBuilding.id}
                    />
                  )}
                </div>
              )}
            </aside>

            {/* ── Map Viewport Stage ── */}
            <div className="map-viewport-wrapper">
              <CampusMap
                zoomLevel={zoomLevel}
                fromLocation={fromLocationForOverlay as any}
                liveCoords={null}
                toLocation={toLocation}
                selectedBuilding={selectedBuilding}
                onBuildingClick={handleBuildingClick}
                route={calculatedRoute}
                isNavigating={isNavigating}
                currentStepIndex={currentStepIndex}
                isDebugMode={isDebugMode}
              />

              {/* Floating Map Zoom, Reset & Fullscreen Controls Dock */}
              <MapControls
                zoomLevel={zoomLevel}
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onReset={handleResetView}
                isFullscreen={isFullscreen}
                onToggleFullscreen={handleToggleFullscreen}
                isDebugMode={isDebugMode}
                onToggleDebug={() => setIsDebugMode(!isDebugMode)}
              />

              {/* Small UI Legend in corner */}
              <div className="map-ui-legend" aria-hidden="true">
                <div className="legend-title">Campus Legend</div>
                <div className="legend-row">
                  <span className="legend-symbol">🟢</span>
                  <span>Starting Point</span>
                </div>
                <div className="legend-row">
                  <span className="legend-symbol">🔴</span>
                  <span>Destination (Entrance)</span>
                </div>
                <div className="legend-row">
                  <span className="legend-route-line"></span>
                  <span>Walking Route (Roads Only)</span>
                </div>

                {isDebugMode && (
                  <>
                    <div className="legend-divider"></div>
                    <div className="legend-title debug-legend-title">🛠️ Debug Road Graph</div>
                    <div className="legend-row">
                      <span className="legend-symbol">🟢</span>
                      <span>Public road node</span>
                    </div>
                    <div className="legend-row">
                      <span className="legend-symbol">🟡</span>
                      <span>Junction</span>
                    </div>
                    <div className="legend-row">
                      <span className="legend-symbol">🔵</span>
                      <span>Building entrance</span>
                    </div>
                    <div className="legend-row">
                      <span className="legend-symbol">⚫</span>
                      <span>Restricted road</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Optional 3D View Mode */
          <Campus3DView
            selectedToLocation={toLocation}
            onSelectBuilding={(bld) => {
              setToLocation(bld);
              setSelectedBuilding(bld);
            }}
          />
        )}
      </main>
    </div>
  );
};

export default CampusMapPage;
