import { cn } from "@/lib/utils";

// Optional className goes on the <svg>: size classes (e.g. "size-5") override width/height,
// and text colour classes (e.g. "text-primary-brand") recolour it, since the stroke uses
// currentColor. Without a colour class it stays white, as before.
export function ArrowUpEnd({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-white", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.21003 5.78H14.21C16.11 5.78 17.05 5.78 17.63 6.36C18.21 6.94 18.22 7.89 18.22 9.77V16.79M5.78003 18.22L17.28 6.72"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
}

export function NorthStar() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.625 11.625H2.625"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#D7B98E"
      />
      <path
        d="M11.625 2.625V20.625"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#D7B98E"
      />
      <path
        d="M6.375 16.875L16.875 6.375"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#D7B98E"
      />
      <path
        d="M16.875 16.875L6.375 6.375"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#D7B98E"
      />
    </svg>
  );
}

export function WeDoArrowUp() {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60.44" height="60.44" rx="20" fill="#C6D9D2" />
      <path
        d="M25.43 24H32.43C34.33 24 35.27 24 35.85 24.58C36.43 25.16 36.44 26.11 36.44 27.99V35.01M24 36.44L35.5 24.94"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#123F3A"
      />
    </svg>
  );
}

export function WeDoStar() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="20" fill="#C6D9D2" />
      <g clipPath="url(#clip0_2072_394)">
        <path
          d="M34.3125 29.8125H25.3125"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#123F3A"
        />
        <path
          d="M29.8125 25.3125V34.3125"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#123F3A"
        />
        <path
          d="M27.1875 32.4375L32.4375 27.1875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#123F3A"
        />
        <path
          d="M32.4375 32.4375L27.1875 27.1875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#123F3A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2072_394">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(24 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function WeDoSeaWave() {
  return (
    <svg
      width="62"
      height="61"
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="62" height="61" rx="20" fill="#C6D9D2" />
      <path
        d="M24 28L29.3333 33L34 28L38 33"
        strokeWidth="2"
        stroke="#123F3A"
      />
    </svg>
  );
}

export function WeDoCircleRing() {
  return (
    <svg
      width="72"
      height="71"
      viewBox="0 0 72 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="71" rx="20" fill="#C6D9D2" />
      <mask id="stroke0_2072_377" fill="white">
        <path d="M42 35.4999C42 39.7341 39.3137 43.1666 36 43.1666C32.6863 43.1666 30 39.7341 30 35.4999C30 31.2657 32.6863 27.8333 36 27.8333C39.3137 27.8333 42 31.2657 42 35.4999Z" />
      </mask>
      <path
        d="M42 35.4999C42 39.7341 39.3137 43.1666 36 43.1666C32.6863 43.1666 30 39.7341 30 35.4999C30 31.2657 32.6863 27.8333 36 27.8333C39.3137 27.8333 42 31.2657 42 35.4999Z"
        strokeWidth="1.41176"
        stroke="#123F3A"
        mask="url(#stroke0_2072_377)"
      />
      <mask id="stroke1_2072_377" fill="white">
        <path d="M48 35.5C48 41.8513 42.6274 47 36 47C29.3726 47 24 41.8513 24 35.5C24 29.1487 29.3726 24 36 24C42.6274 24 48 29.1487 48 35.5Z" />
      </mask>
      <path
        d="M48 35.5C48 41.8513 42.6274 47 36 47C29.3726 47 24 41.8513 24 35.5C24 29.1487 29.3726 24 36 24C42.6274 24 48 29.1487 48 35.5Z"
        strokeWidth="1.41176"
        stroke="#123F3A"
        mask="url(#stroke1_2072_377)"
      />
    </svg>
  );
}

export function DarkArrowRightUp() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.21003 5.78003H14.21C16.11 5.78003 17.05 5.78003 17.63 6.36003C18.21 6.94003 18.22 7.89003 18.22 9.77003V16.79M5.78003 18.22L17.28 6.72003"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#123F3A"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      width="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="80" rx="20" fill="#C6D9D2" />
      <path
        d="M37.5 44C34.4624 44 32 41.5376 32 38.5C32 35.4624 34.4624 33 37.5 33C40.5376 33 43 35.4624 43 38.5C43 41.5376 40.5376 44 37.5 44Z"
        strokeWidth="2"
        stroke="#123F3A"
      />
      <path
        d="M33 43.4141L29.414 47.0001"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#123F3A"
      />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg
      width="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="72" height="80" rx="20" fill="#C6D9D2" />
      <path
        d="M36 52V40M36 40V28M36 40H48M36 40H24"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="#123F3A"
      />
    </svg>
  );
}
