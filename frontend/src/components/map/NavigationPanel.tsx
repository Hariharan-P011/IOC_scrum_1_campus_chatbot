import React, { useState } from 'react';
import { RouteResult, NavigationStep } from '../../data/campusRoutes';
import { CampusLocation } from '../../data/campusLocations';

interface NavigationPanelProps {
  route: RouteResult;
  toLocation: CampusLocation;
  currentStepIndex: number;
  onStepChange: (index: number) => void;
  onExitNavigation: () => void;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  route,
  toLocation,
  currentStepIndex,
  onStepChange,
  onExitNavigation
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const steps = route.steps;
  const totalSteps = steps.length;
  const currentStep: NavigationStep | undefined = steps[currentStepIndex];

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      onStepChange(currentStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      onStepChange(currentStepIndex + 1);
    }
  };

  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === totalSteps - 1;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  // Collapsed Minimal State: ensures 100% route visibility on both mobile & desktop
  if (isCollapsed) {
    return (
      <aside className="navigation-active-panel collapsed" aria-label="Walking Navigation (Collapsed)">
        <div className="nav-collapsed-row">
          <div className="nav-collapsed-info">
            <span className="collapsed-icon">🚶</span>
            <div className="collapsed-text">
              <span className="collapsed-title">
                To: {toLocation.number} — {toLocation.name}
              </span>
              <span className="collapsed-metrics">
                Step {currentStepIndex + 1}/{totalSteps} • {route.totalDistanceMeters} m • ~{route.estimatedTimeMinutes} min
              </span>
            </div>
          </div>

          <div className="collapsed-actions">
            <button
              type="button"
              className="nav-expand-btn"
              onClick={() => setIsCollapsed(false)}
              title="Expand turn-by-turn directions"
            >
              <span>⌃</span>
              <span>Expand</span>
            </button>
            <button
              type="button"
              className="nav-exit-small-btn"
              onClick={onExitNavigation}
              title="Exit Navigation"
            >
              ✕
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // Expanded Full State
  return (
    <aside className="navigation-active-panel expanded" aria-label="Turn by Turn Walking Directions">
      <div className="nav-header">
        <div className="nav-destination-title">
          <span className="nav-walking-icon">🚶</span>
          <div className="nav-dest-text">
            <span className="nav-sub">Walking to Destination</span>
            <span className="nav-title">
              {toLocation.number} — {toLocation.name}
            </span>
          </div>
        </div>

        <div className="nav-header-buttons">
          <button
            type="button"
            className="nav-collapse-toggle-btn"
            onClick={() => setIsCollapsed(true)}
            title="Collapse panel to view entire route"
            aria-label="Collapse Navigation Panel"
          >
            <span>⌄</span>
            <span>Collapse</span>
          </button>

          <button
            type="button"
            className="nav-exit-btn"
            onClick={onExitNavigation}
            title="Exit Navigation Mode"
            aria-label="Exit Navigation Mode"
          >
            ✕ Exit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="nav-progress-track">
        <div
          className="nav-progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="nav-step-counter">
        <span className="step-badge">
          Step {currentStepIndex + 1} of {totalSteps}
        </span>
        {currentStep && (
          <span className="step-dist-badge">
            ~{currentStep.distanceMeters} m for this segment
          </span>
        )}
      </div>

      <div className="nav-instruction-box">
        <span className="turn-direction-arrow">
          {isFirst ? '🟢' : isLast ? '🎯' : '➡️'}
        </span>
        <p className="instruction-text">
          {currentStep?.instruction || 'Follow the highlighted road path.'}
        </p>
      </div>

      <div className="nav-controls-row">
        <button
          type="button"
          className="nav-step-btn prev-btn"
          onClick={handlePrev}
          disabled={isFirst}
        >
          ← Previous
        </button>

        <button
          type="button"
          className="nav-step-btn next-btn"
          onClick={handleNext}
          disabled={isLast}
        >
          {isLast ? 'Arrived at Destination 🎯' : 'Next Step →'}
        </button>
      </div>
    </aside>
  );
};

export default NavigationPanel;
