import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { INDIA_MAP_VIEWBOX, INDIA_STATES, ACTIVE_STATES_LIST } from '../../data/indiaMapData';
import { MapPin, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface IndiaNetworkMapProps {
  className?: string;
}

export function IndiaNetworkMap({ className = '' }: IndiaNetworkMapProps) {
  const { lang } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [showPillList, setShowPillList] = useState<boolean>(false);

  const activeState = ACTIVE_STATES_LIST.find(
    (s) => s.id === (hoveredStateId || selectedStateId)
  );

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl border-2 border-[#172A4A]/25 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100 shadow-md ${className}`}
    >
      {/* Frame Top Header */}
      <div className="flex items-center justify-between border-b border-[#172A4A]/15 bg-white px-3.5 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E30620] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E30620]"></span>
          </span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#172A4A]">
            {lang === 'mr' ? 'भारतभर संघटनात्मक जाळे' : 'PAN-INDIA NETWORK'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#E30620]/10 border border-[#E30620]/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#E30620]">
            {lang === 'mr' ? '१७ राज्ये सक्रिय' : '17 States Active'}
          </span>
          <button
            type="button"
            onClick={() => setShowPillList(!showPillList)}
            className="text-[10px] sm:text-[11px] font-semibold text-[#172A4A] hover:text-[#E30620] underline cursor-pointer ml-1"
          >
            {showPillList ? (lang === 'mr' ? 'नकाशा' : 'Map') : (lang === 'mr' ? 'यादी' : 'List')}
          </button>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-3 select-none">
        {/* Decorative Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #172A4A 1px, transparent 0)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Floating Active State Badge / Tooltip Card */}
        {activeState && !showPillList && (
          <div className="absolute top-3 left-3 z-20 max-w-[200px] sm:max-w-[230px] rounded-lg border border-[#E30620]/30 bg-white/95 p-2 shadow-lg backdrop-blur-xs transition-all pointer-events-auto">
            <div className="flex items-start justify-between gap-1">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E30620] text-[10px] font-black text-white shadow-xs">
                  {activeState.num}
                </span>
                <span className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                  {lang === 'mr' ? activeState.mr : activeState.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedStateId(null);
                  setHoveredStateId(null);
                }}
                className="text-neutral-400 hover:text-neutral-700 p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            <p className="mt-1 text-[10px] text-neutral-600 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-[#287A18] shrink-0" />
              <span>
                {lang === 'mr'
                  ? 'राज्य कार्यकारिणी / सदस्य उपस्थिती'
                  : 'Active State Committee & Unit'}
              </span>
            </p>
            <div className="mt-1 text-[9px] text-[#E30620] font-semibold">
              {lang === 'mr' ? activeState.name : activeState.mr}
            </div>
          </div>
        )}


        {/* Interactive SVG Map */}
        <div className={`w-full h-full flex items-center justify-center ${showPillList ? 'hidden' : 'block'}`}>
          <svg
            viewBox={INDIA_MAP_VIEWBOX}
            className="w-full h-auto max-h-[390px] sm:max-h-[460px] object-contain drop-shadow-xs"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Defs for gradients and shadow */}
            <defs>
              <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000" floodOpacity="0.35" />
              </filter>
              <linearGradient id="pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>

            {/* State Boundaries */}
            <g className="states-group">
              {INDIA_STATES.map((state) => {
                const isSelected = selectedStateId === state.id;
                const isHovered = hoveredStateId === state.id;
                const isActive = state.isActive;

                // Color styling
                let fill = '#F1F5F9';
                let stroke = '#CBD5E1';
                let strokeWidth = '0.75';

                if (isActive) {
                  fill = isSelected || isHovered ? '#FECACA' : '#FEE2E2';
                  stroke = isSelected || isHovered ? '#DC2626' : '#F87171';
                  strokeWidth = isSelected || isHovered ? '1.5' : '1';
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    className={`transition-colors duration-200 ${
                      isActive ? 'cursor-pointer hover:opacity-90' : 'cursor-default'
                    }`}
                    onMouseEnter={() => {
                      if (isActive) setHoveredStateId(state.id);
                    }}
                    onMouseLeave={() => {
                      if (isActive) setHoveredStateId(null);
                    }}
                    onClick={() => {
                      if (isActive) setSelectedStateId(state.id);
                    }}
                  >
                    <title>{`${state.pinNumber ? `${state.pinNumber}. ` : ''}${state.name}${state.mrName ? ` (${state.mrName})` : ''}`}</title>
                  </path>
                );
              })}
            </g>

            {/* 17 Red Pin Points */}
            <g className="pins-group">
              {ACTIVE_STATES_LIST.map((item) => {
                const isSelected = selectedStateId === item.id;
                const isHovered = hoveredStateId === item.id;
                const isHighlighted = isSelected || isHovered;
                const { x, y } = item.pin;

                return (
                  <g
                    key={`pin-${item.id}`}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredStateId(item.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStateId(item.id);
                    }}
                  >
                    {/* Pulsing ring on highlight or key states */}
                    <circle
                      r={isHighlighted ? 14 : 7}
                      fill="#EF4444"
                      opacity={isHighlighted ? 0.35 : 0.2}
                      className={isHighlighted ? 'animate-pulse' : ''}
                    />

                    {/* Red Pin Anchor Circle */}
                    <circle
                      r={isHighlighted ? 4 : 2.5}
                      fill="#991B1B"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />

                    {/* Pin Marker Shape */}
                    <g
                      transform={`translate(0, -${isHighlighted ? 22 : 18}) scale(${
                        isHighlighted ? 1.2 : 0.95
                      })`}
                      filter="url(#pin-shadow)"
                      style={{ transformOrigin: '0px 18px', transition: 'transform 0.15s ease' }}
                    >
                      {/* Pin teardrop body */}
                      <path
                        d="M 0 0 C -7 -10, -7 -16, 0 -22 C 7 -16, 7 -10, 0 0 Z"
                        fill="url(#pin-grad)"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                      {/* Inner White Badge with State Number */}
                      <circle cx="0" cy="-14" r="5" fill="#FFFFFF" />
                      <text
                        x="0"
                        y="-12"
                        textAnchor="middle"
                        fill="#B91C1C"
                        fontSize="6.5"
                        fontWeight="900"
                        fontFamily="sans-serif"
                      >
                        {item.num}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* State Pill List Overlay (When user taps "List" or wants to see all 17 directly) */}
        {showPillList && (
          <div className="w-full h-full max-h-[380px] overflow-y-auto p-2">
            <div className="mb-2 text-xs font-bold text-neutral-800 flex items-center justify-between">
              <span>{lang === 'mr' ? 'महासंघाचे १७ राज्ये कार्यक्षेत्र' : 'Federation Reach Across 17 States'}:</span>
              <span className="text-[10px] text-neutral-500">
                {lang === 'mr' ? '(क्लिक करून नकाशावर पहा)' : '(Click to highlight on map)'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {ACTIVE_STATES_LIST.map((state) => {
                const isSelected = selectedStateId === state.id;
                return (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => {
                      setSelectedStateId(state.id);
                      setShowPillList(false);
                    }}
                    className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-left text-xs transition-all ${
                      isSelected
                        ? 'border-[#E30620] bg-[#E30620]/10 font-bold text-[#E30620]'
                        : 'border-neutral-200 bg-white hover:border-[#E30620]/40 hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E30620] text-[10px] font-black text-white">
                        {state.num}
                      </span>
                      <span>{lang === 'mr' ? state.mr : state.name}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-medium">
                      {lang === 'mr' ? state.name : state.mr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
