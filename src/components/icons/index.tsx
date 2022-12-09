interface Props {
  classes?: string;
}

export function GithubIcon({ classes }: Props) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export function LinkIcon({ classes }: Props) {
  return (
    <svg
      className={classes}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9639 8.92676L10.957 3.59473C10.957 3.42155 10.9023 3.28027 10.793 3.1709C10.6882 3.05697 10.5446 3 10.3623 3H5.03027C4.8571 3 4.7181 3.05697 4.61328 3.1709C4.50846 3.28027 4.45605 3.41016 4.45605 3.56055C4.45605 3.70638 4.51074 3.83398 4.62012 3.94336C4.73405 4.05273 4.86393 4.10742 5.00977 4.10742H6.58887L9.2959 4.01172L8.26367 4.89355L3.1709 10C3.05697 10.1094 3 10.237 3 10.3828C3 10.5332 3.05697 10.6676 3.1709 10.7861C3.28939 10.9046 3.42383 10.9639 3.57422 10.9639C3.72461 10.9639 3.85449 10.9092 3.96387 10.7998L9.06348 5.69336L9.95898 4.66113L9.84277 7.34766V8.9541C9.84277 9.09994 9.89746 9.22982 10.0068 9.34375C10.1208 9.45768 10.2529 9.51465 10.4033 9.51465C10.5492 9.51465 10.679 9.45996 10.793 9.35059C10.9069 9.23665 10.9639 9.09538 10.9639 8.92676Z"
        fill="white"
      />
    </svg>
  );
}

export function TwitterIcon({ classes }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>Twitter</title>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
}

export function LinkedInIcon({ classes }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
