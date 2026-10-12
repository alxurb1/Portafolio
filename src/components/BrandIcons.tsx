type BrandIconProps = {
  size?: number;
};

export function GithubMark({ size = 17 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedInMark({ size = 17 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
      <circle cx="7.4" cy="8" r="1.4" fill="var(--paper)" />
      <path
        d="M6.1 10.5h2.6v7.4H6.1zm4.3 0H13v1c.5-.7 1.3-1.2 2.5-1.2 2.4 0 3.3 1.5 3.3 3.8v3.8h-2.6v-3.6c0-1.1-.3-1.8-1.3-1.8-1.1 0-1.9.8-1.9 2v3.4h-2.6z"
        fill="var(--paper)"
      />
    </svg>
  );
}
