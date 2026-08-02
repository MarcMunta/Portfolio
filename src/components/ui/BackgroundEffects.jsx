import React from 'react';

const STAR_POINTS = [
  ['7%', '12%', 1.2, '-1.4s', '5.8s'],
  ['15%', '28%', 1.8, '-3.8s', '7.2s'],
  ['24%', '8%', 1.1, '-2.2s', '6.4s'],
  ['31%', '41%', 1.5, '-5.1s', '8.1s'],
  ['39%', '17%', 1.2, '-4.3s', '6.8s'],
  ['47%', '34%', 2, '-1.1s', '7.6s'],
  ['54%', '9%', 1.1, '-6.2s', '8.6s'],
  ['62%', '26%', 1.6, '-2.8s', '6.2s'],
  ['71%', '14%', 1.2, '-3.6s', '7.8s'],
  ['82%', '37%', 1.8, '-5.4s', '8.4s'],
  ['91%', '19%', 1.1, '-1.9s', '6.6s'],
  ['11%', '63%', 1.5, '-4.7s', '7.4s'],
  ['21%', '78%', 1.1, '-2.5s', '8.2s'],
  ['29%', '56%', 1.9, '-6.1s', '7.1s'],
  ['37%', '88%', 1.2, '-3.3s', '6.9s'],
  ['45%', '69%', 1.5, '-1.6s', '7.7s'],
  ['56%', '91%', 1.1, '-5.6s', '8.7s'],
  ['64%', '58%', 1.8, '-2.1s', '6.3s'],
  ['73%', '81%', 1.2, '-4.1s', '7.3s'],
  ['84%', '66%', 1.5, '-6.5s', '8.3s'],
  ['94%', '87%', 1.1, '-3s', '6.7s'],
  ['4%', '92%', 1.7, '-5s', '7.9s'],
];

const ORBIT_NODES = ['0deg', '74deg', '151deg', '231deg', '306deg'];

export function BackgroundEffects() {
  return (
    <div className="portfolio-atmosphere" aria-hidden="true">
      <div className="atmosphere-spotlight" />
      <div className="atmosphere-wash atmosphere-wash-one" data-orbit-layer="-0.08" />
      <div className="atmosphere-wash atmosphere-wash-two" data-orbit-layer="0.05" />

      <div className="atmosphere-stars" data-orbit-layer="0.03">
        {STAR_POINTS.map(([left, top, size, delay, duration]) => (
          <span
            key={`${left}-${top}`}
            className="atmosphere-star"
            style={{
              '--star-left': left,
              '--star-top': top,
              '--star-size': `${size}px`,
              '--star-delay': delay,
              '--star-duration': duration,
            }}
          />
        ))}
      </div>

      <div className="atmosphere-orbit atmosphere-orbit-primary" data-orbit-layer="-0.12">
        {ORBIT_NODES.map((rotation) => (
          <span key={rotation} style={{ '--node-rotation': rotation }} />
        ))}
      </div>
      <div className="atmosphere-orbit atmosphere-orbit-secondary" data-orbit-layer="0.1" />

      <span className="atmosphere-comet atmosphere-comet-one" />
      <span className="atmosphere-comet atmosphere-comet-two" />
    </div>
  );
}
