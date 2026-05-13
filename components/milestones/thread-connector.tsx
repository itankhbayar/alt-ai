/**
 * YouTube-style thread elbow: circular arc (not quadratic) + horizontal arm.
 * Vertical spine is a sibling div so it stays continuous between rows; path starts at the join.
 */
const R = 8;
const SPINE_X = 24;
/** Vertical run on the spine before the bend (YouTube: thread drops to the reply row). */
const Y_MEET = 10;
const Y_H = Y_MEET + R;
/** Right edge of w-12 gutter (48px) — do not extend into the text column */
const H_END = 48;

/** Horizontal arm y (px); spine is masked below this on the last milestone row */
export const THREAD_SPINE_END_Y = Y_H;

export function ThreadBranchToContent() {
  const vbH = Y_H + 6;
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 h-[1.375rem] w-full overflow-hidden"
      viewBox={`0 0 ${H_END} ${vbH}`}
      preserveAspectRatio="xMinYMin meet"
      fill="none"
      aria-hidden
    >
      <path
        d={`M ${SPINE_X} ${Y_MEET} A ${R} ${R} 0 0 1 ${SPINE_X + R} ${Y_H} L ${H_END} ${Y_H}`}
        stroke="#d1d5db"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
