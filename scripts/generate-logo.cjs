const fs = require('fs');

const b64 = fs.readFileSync('public/symbol-transparent.png').toString('base64');
const dataUri = 'data:image/png;base64,' + b64;

const svgContent = `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Top Arc for Devanagari text: लोकशाही पत्रकार महासंघ -->
    <path id="text-arc-top" d="M 64 218 A 188 188 0 0 1 436 218" fill="none" />
    <!-- Bottom Arc for: महाराष्ट्र राज्य (Upright) -->
    <path id="text-arc-bottom" d="M 72 292 A 186 186 0 0 0 428 292" fill="none" />
    <filter id="emblem-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15" />
    </filter>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@700;800;900&amp;family=Noto+Sans+Devanagari:wght@700;800;900&amp;display=swap');
      .emblem-title {
        font-family: 'Mukta', 'Noto Sans Devanagari', -apple-system, sans-serif;
        font-weight: 900;
        fill: #C4121A;
        font-size: 26.5px;
        letter-spacing: 1.5px;
        text-anchor: middle;
      }
      .emblem-sub {
        font-family: 'Mukta', 'Noto Sans Devanagari', -apple-system, sans-serif;
        font-weight: 800;
        fill: #C4121A;
        font-size: 23.5px;
        letter-spacing: 3px;
        text-anchor: middle;
      }
    </style>
  </defs>

  <!-- Base White Disc -->
  <circle cx="250" cy="250" r="244" fill="#FFFFFF" />

  <!-- Outer Concentric Red Borders -->
  <circle cx="250" cy="250" r="238" stroke="#C4121A" stroke-width="10" fill="none" />
  <circle cx="250" cy="250" r="231" stroke="#FFFFFF" stroke-width="2" fill="none" />
  <circle cx="250" cy="250" r="229" stroke="#C4121A" stroke-width="1.5" fill="none" />

  <!-- Decorative Separator Stars (Left & Right) -->
  <g fill="#C4121A">
    <!-- Left Star (centered around x=62, y=250) -->
    <polygon points="62,238 65,247 74,247 67,253 70,262 62,256 54,262 57,253 50,247 59,247" />
    <!-- Right Star (centered around x=438, y=250) -->
    <polygon points="438,238 441,247 450,247 443,253 446,262 438,256 430,262 433,253 426,247 435,247" />
  </g>

  <!-- Top Curved Text: लोकशाही पत्रकार महासंघ -->
  <text class="emblem-title">
    <textPath href="#text-arc-top" startOffset="50%" text-anchor="middle">लोकशाही पत्रकार महासंघ</textPath>
  </text>

  <!-- Bottom Curved Text: महाराष्ट्र राज्य (Upright) -->
  <text class="emblem-sub">
    <textPath href="#text-arc-bottom" startOffset="50%" text-anchor="middle">महाराष्ट्र राज्य</textPath>
  </text>

  <!-- Inner Circle Border -->
  <circle cx="250" cy="250" r="144" stroke="#C4121A" stroke-width="4.5" fill="#FFFFFF" />
  <circle cx="250" cy="250" r="139" stroke="#C4121A" stroke-width="1.5" fill="none" />

  <!-- Center Emblem Graphic: Authentic Clenched Fist holding Microphone -->
  <!-- Crisp high-resolution symbol centered in the inner ring -->
  <image
    href="${dataUri}"
    x="142"
    y="140"
    width="216"
    height="220"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>`;

fs.writeFileSync('public/svg artboard.svg', svgContent);
fs.writeFileSync('public/svg-artboard.svg', svgContent);
fs.writeFileSync('public/logo-mr.svg', svgContent);
fs.writeFileSync('public/logo.svg', svgContent);
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/svg artboard.svg', svgContent);
  fs.writeFileSync('dist/svg-artboard.svg', svgContent);
  fs.writeFileSync('dist/logo-mr.svg', svgContent);
  fs.writeFileSync('dist/logo.svg', svgContent);
}
console.log('Successfully generated official SVG logo assets!');
