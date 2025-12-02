:root {
  --bg: #050816;
  --bg-elevated: rgba(15, 23, 42, 0.96);
  --bg-soft: rgba(15, 23, 42, 0.7);
  --accent: #38bdf8;
  --accent-soft: rgba(56, 189, 248, 0.15);
  --accent-strong: #0ea5e9;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --danger: #f97373;
  --success: #4ade80;
  --border-subtle: rgba(148, 163, 184, 0.2);
  --radius-lg: 18px;
  --radius-xl: 24px;
  --shadow-soft: 0 18px 40px rgba(15, 23, 42, 0.8);
}

/* Global reset */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: radial-gradient(circle at top, #1e293b 0, #020617 55%);
  color: var(--text);
  min-height: 100%;
}

body {
  display: flex;
}

/* Layout */

.app-shell {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

/* Sidebar */

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #020617 0%, #020617 60%, #020617 100%);
  border-right: 1px solid var(--border-subtle);
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 13px;
}

.logo-orbit {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: radial-gradient(
    circle at 20% 20%,
    #38bdf8 0,
    #0f172a 55%,
    #020617 100%
  );
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.7);
  position: relative;
}

.logo-orbit::after {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: inherit;
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.nav-link {
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 10px 12px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.15s ease;
}

.nav-link span:first-child {
  font-size: 18px;
}

.nav-link:hover {
  background: rgba(15, 23, 42, 0.95);
  color: var(--text);
}

.nav-link.active {
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid rgba(56, 189, 248, 0.45);
}

.sidebar-footer {
  margin-top: auto;
  padding: 12px 10px;
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border-subtle);
}

.today-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 4px;
}

.today-date {
  font-weight: 500;
  font-size: 14px;
}

/* Main */

.main {
  flex: 1;
  padding: 24px 28px 32px;
  overflow-y: auto;
}

/* Custom scrollbar */

.main::-webkit-scrollbar {
  width: 8px;
}

.main::-webkit-scrollbar-track {
  background: transparent;
}

.main::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.4);
  border-radius: 999px;
}

/* Header */

.header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.header h1 {
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 6px;
}

.header p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.header-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
}

.tag {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  font-size: 11px;
  color: var(--muted);
}

/* Sections */

.section {
  display: none;
}

.section.visible {
  display: block;
}

/* Grid */

.grid {
  display: grid;
  gap: 18px;
}

.grid-2 {
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
  .main {
    padding: 18px 16px 24px;
  }
  .header {
    flex-direction: column;
  }
  .grid-2,
  .grid-3 {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* Cards */

.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 16px 16px 14px;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(22px);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at -5% -10%,
    rgba(56, 189, 248, 0.12),
    transparent 55%
  );
  pointer-events: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.card-header h2 {
  margin: 0;
  font-size: 15px;
}

.pill {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(56, 189, 248, 0.6);
  color: var(--accent);
  background: rgba(15, 23, 42, 0.9);
}

.pill-soft {
  border-color: rgba(148, 163, 184, 0.45);
  color: var(--muted);
}

/* Forms */

.form {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-row.inline {
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.form-row.inline > div {
  flex: 1;
}

label {
  font-size: 12px;
  color: var(--muted);
}

.label-sub {
  font-size: 11px;
  color: var(--muted);
}

input,
select {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 7px 12px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

input:focus,
select:focus {
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.4);
}

/* Buttons */

.btn-primary {
  border-radius: 999px;
  border: none;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 500;
  background: radial-gradient(circle at 20% 0, #38bdf8 0, #0ea5e9 40%, #0369a1);
  color: #0b1220;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  box-shadow: 0 10px 26px rgba(56, 189, 248, 0.45);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(56, 189, 248, 0.65);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
}

.btn-ghost {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: transparent;
  color: var(--muted);
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.btn-ghost:hover {
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
}

.full-width {
  width: 100%;
}

/* Helper text */

.helper-text {
  margin-top: 6px;
  font-size: 12px;
  color: var(--muted);
}

/* Lists */

.list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.list-item {
  border-radius: 999px;
  padding: 7px 10px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.list-item span {
  display: inline-block;
}

.list-item-meta {
  display: flex;
  gap: 6px;
  align-items: center;
}

.badge {
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: var(--muted);
}

/* Budget bars */

.budget-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.budget-row {
  display: grid;
  grid-template-columns: 90px 1fr 40px;
  gap: 8px;
  align-items: center;
  font-size: 12px;
}

.bar {
  height: 7px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  transition: width 0.25s ease;
}

/* Energy grid */

.energy-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
  position: relative;
  z-index: 1;
}

.energy-slot {
  padding: 8px 8px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  font-size: 11px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease,
    box-shadow 0.15s ease;
}

.energy-slot span {
  display: block;
}

.energy-slot-label {
  color: var(--muted);
}

.energy-tag {
  margin-top: 2px;
  font-size: 10px;
  opacity: 0.9;
}

.energy-low {
  border-color: rgba(148, 163, 184, 0.6);
}

.energy-medium {
  border-color: rgba(96, 165, 250, 0.9);
  background: radial-gradient(
    circle at 10% 0,
    rgba(59, 130, 246, 0.2),
    rgba(15, 23, 42, 0.95)
  );
}

.energy-high {
  border-color: rgba(56, 189, 248, 1);
  background: radial-gradient(
    circle at 10% 0,
    rgba(56, 189, 248, 0.35),
    rgba(15, 23, 42, 0.95)
  );
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.4);
}

/* Smart suggestion */

.smart-suggestion {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(148, 163, 184, 0.7);
  background: rgba(15, 23, 42, 0.9);
  font-size: 12px;
}

/* Task list */

.task-list .list-item {
  align-items: flex-start;
}

.task-title {
  font-size: 12px;
}

.task-sub {
  font-size: 11px;
  color: var(--muted);
}

/* Focus timer */

.focus-timer {
  position: relative;
  z-index: 1;
  margin-top: 8px;
}

.focus-display {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  padding: 14px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: radial-gradient(
    circle at 20% 0,
    rgba(56, 189, 248, 0.2),
    rgba(15, 23, 42, 0.95)
  );
  letter-spacing: 0.05em;
}

.focus-controls {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

/* Metrics */

.metrics {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.metric {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.metric-label {
  color: var(--muted);
}

.metric-value {
  font-weight: 500;
}

/* Smaller screens tweaks */

@media (max-width: 600px) {
  .focus-controls {
    flex-direction: column;
  }

  .form-row.inline {
    flex-direction: column;
  }

  .header-tags {
    justify-content: flex-start;
  }
}
