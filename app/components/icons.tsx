import type { SVGProps } from "react";
export type IconName = "arrow" | "download" | "terminal" | "cloud" | "layers" | "activity" | "branch" | "box" | "shield" | "check" | "code" | "mail" | "globe";
const paths: Record<IconName,string> = {
arrow:"M5 12h14m-6-6 6 6-6 6", download:"M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
terminal:"m5 7 4 4-4 4m7 0h6M3 3h18v18H3z",cloud:"M6 18a4 4 0 1 1 .4-8A6 6 0 0 1 18 8a5 5 0 0 1 0 10H6z",
layers:"m12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5M3 16l9 5 9-5",activity:"M2 12h4l3-8 5 16 3-8h5",
branch:"M6 7v10m12-10v2a4 4 0 0 1-4 4H6M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
box:"m12 3 9 5v9l-9 5-9-5V8l9-5zm0 10 9-5m-9 5L3 8m9 5v9M7 5.5l10 5.5",
shield:"m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3zm-4 9 3 3 5-6",
check:"m5 12 4 4L19 6", code:"m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18",
mail:"M3 5h18v14H3V5zm0 0 9 7 9-7",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18z"
};
export function Icon({name,...props}:SVGProps<SVGSVGElement>&{name:IconName}) {return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]}/></svg>}
