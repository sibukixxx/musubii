import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import pkg from "../../../package.json"

export default () => {
  return (
    <section className="section is-hero is-wide-lg">
      <div className="inner is-padding-right-left-md">
        <div className="grid is-middle is-center is-gap-xxl">
          <div className="column is-space-md">
            <p className="text is-primary is-font-sans-en is-weight-700">
              <span className="text is-block is-hero-1">Simple CSS</span>
              <span className="text is-block is-hero-2">Framework for JP</span>
            </p>
            <h1 className="text is-line-height-lg is-sm">
              <span className="text is-fablet-block">
                MUSUBiiは日本語サイトのインブラウザデザインを想定した
              </span>
              <span className="text is-fablet-block">
                シンプルで薄味のレスポンシブ対応CSSフレームワークです。
              </span>
            </h1>
            <Link href="/getting-started/introduction">
              <a className="button is-plain is-primary is-round is-mobile-full is-lg">
                <FontAwesomeIcon
                  icon={faBook}
                  className="icon is-margin-right-sm"
                />
                <span className="text is-font-sans-en is-weight-900">
                  Getting Started
                </span>
              </a>
            </Link>
            <p className="text is-center is-weight-700 is-dark-3 is-sm">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon is-margin-right-xxs"
              />
              <span className="text is-font-sans-en">v{pkg.version}・</span>
              <span className="text is-font-sans-en">{pkg.license}・</span>
              <a
                className="text is-link-reverse"
                href={pkg.repository}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text is-font-sans-en">Repository</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="icon is-external-link-fix is-sm"
                />
              </a>
              <span className="text is-font-sans-en">・</span>
              <a
                className="text is-link-reverse"
                href={pkg.repository + "/releases"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text is-font-sans-en">Releases</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="icon is-external-link-fix is-sm"
                />
              </a>
            </p>
          </div>
          <div className="column">
            <svg
              className="demo-image is-hero"
              viewBox="0 0 528 418"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m422 402.25c0 9.53-67.16 15.75-150 15.75s-150-6.22-150-15.75 67.16-14.25 150-14.25 150 4.72 150 14.25z"
                opacity=".1"
              />
              <rect fill="#eef0f2" height="336" rx="12" width="528" />
              <path
                d="m12 0h504a12 12 0 0 1 12 12v28a0 0 0 0 1 0 0h-528a0 0 0 0 1 0 0v-28a12 12 0 0 1 12-12z"
                fill="#d1d8dc"
              />
              <path
                d="m294 40h234a0 0 0 0 1 0 0v284a12 12 0 0 1 -12 12h-222a0 0 0 0 1 0 0v-296a0 0 0 0 1 0 0z"
                fill="#596c75"
              />
              <circle cx="20" cy="20" fill="#db5757" r="8" />
              <circle cx="44" cy="20" fill="#eebd2b" r="8" />
              <circle cx="68" cy="20" fill="#5cad5c" r="8" />
              <path d="m20 60h74v30h-74z" fill="#d1d8dc" />
              <path d="m20 100h254v108h-254z" fill="#d1d8dc" />
              <path d="m158 220h116v68h-116z" fill="#d1d8dc" />
              <path d="m20 220h116v10h-116z" fill="#d1d8dc" />
              <path d="m20 240h116v10h-116z" fill="#d1d8dc" />
              <path d="m20 260h116v10h-116z" fill="#d1d8dc" />
              <path d="m20 280h116v10h-116z" fill="#d1d8dc" />
              <path d="m20 300h100v10h-100z" fill="#d1d8dc" />
              <path d="m200 60h74v30h-74z" fill="#d1d8dc" />
              <g fill="#667a85">
                <path d="m323 66.4h16v16h-16z" />
                <path d="m342.31 66.4h16v16h-16z" />
                <path d="m361.61 66.4h16v16h-16z" />
                <path d="m380.92 66.4h16v16h-16z" />
                <path d="m343 103h16v16h-16z" />
                <path d="m362.31 103h16v16h-16z" />
                <path d="m381.61 103h16v16h-16z" />
                <path d="m400.92 103h16v16h-16z" />
                <path d="m420.22 103h16v16h-16z" />
                <path d="m439.53 103h16v16h-16z" />
                <path d="m323 139.59h16v16h-16z" />
                <path d="m342.31 139.59h16v16h-16z" />
                <path d="m361.61 139.59h16v16h-16z" />
                <path d="m380.92 139.59h16v16h-16z" />
                <path d="m400.22 139.59h16v16h-16z" />
                <path d="m419.53 139.59h16v16h-16z" />
                <path d="m438.84 139.59h16v16h-16z" />
                <path d="m458.14 139.59h16v16h-16z" />
                <path d="m477.45 139.59h16v16h-16z" />
                <path d="m323 176.19h16v16h-16z" />
                <path d="m342.31 176.19h16v16h-16z" />
                <path d="m361.61 176.19h16v16h-16z" />
                <path d="m380.92 176.19h16v16h-16z" />
                <path d="m400.22 176.19h16v16h-16z" />
                <path d="m419.53 176.19h16v16h-16z" />
                <path d="m438.84 176.19h16v16h-16z" />
                <path d="m458.14 176.19h16v16h-16z" />
                <path d="m343 212.79h16v16h-16z" />
                <path d="m362.31 212.79h16v16h-16z" />
                <path d="m381.61 212.79h16v16h-16z" />
                <path d="m400.92 212.79h16v16h-16z" />
                <path d="m420.22 212.79h16v16h-16z" />
                <path d="m439.53 212.79h16v16h-16z" />
                <path d="m363 249.39h16v16h-16z" />
                <path d="m382.31 249.39h16v16h-16z" />
                <path d="m401.61 249.39h16v16h-16z" />
                <path d="m420.92 249.39h16v16h-16z" />
                <path d="m440.22 249.39h16v16h-16z" />
                <path d="m459.53 249.39h16v16h-16z" />
                <path d="m323 286h16v16h-16z" />
                <path d="m342.31 286h16v16h-16z" />
                <path d="m361.61 286h16v16h-16z" />
                <path d="m380.92 286h16v16h-16z" />
                <path d="m400.22 286h16v16h-16z" />
                <path d="m419.53 286h16v16h-16z" />
              </g>
              <path
                d="m171.14 159.23-.47-1.38a70.34 70.34 0 0 0 -4.11-10 37.34 37.34 0 0 0 -9.6-12.17l-.18-.15-.2-.12a19.21 19.21 0 0 0 -19.16 0l-.2.12-.18.15a37.34 37.34 0 0 0 -9.6 12.17 70.34 70.34 0 0 0 -4.11 10l-.47 1.38a13.32 13.32 0 0 0 .61 10.81c1.9 3.49 5.88 5.19 9.93 5.15h1.83v-17.43c0-3.44 1.6-2.56 5.06-.48a13.36 13.36 0 0 0 13.42 0c3.46-2.08 5-3 5.06.48v17.42h1.83c4.05 0 8-1.66 9.93-5.15a13.32 13.32 0 0 0 .61-10.8z"
                fill="#eef0f2"
              />
              <path
                d="m67.62 77.3-.21-.61a30.69 30.69 0 0 0 -1.8-4.41 16.37 16.37 0 0 0 -4.23-5.36l-.08-.06-.08-.06a8.51 8.51 0 0 0 -8.44 0l-.08.06-.08.06a16.37 16.37 0 0 0 -4.23 5.36 30.69 30.69 0 0 0 -1.8 4.41l-.21.61a5.85 5.85 0 0 0 .27 4.76 4.79 4.79 0 0 0 4.35 2.26h.8v-7.67c0-1.51.7-1.12 2.23-.21a5.87 5.87 0 0 0 5.9 0c1.53-.91 2.22-1.3 2.23.21v7.67h.84a4.78 4.78 0 0 0 4.37-2.26 5.85 5.85 0 0 0 .25-4.76z"
                fill="#eef0f2"
              />
              <path
                d="m247.62 77.3-.21-.61a30.69 30.69 0 0 0 -1.8-4.41 16.37 16.37 0 0 0 -4.23-5.36l-.08-.06-.08-.06a8.51 8.51 0 0 0 -8.44 0l-.08.06-.08.06a16.37 16.37 0 0 0 -4.23 5.36 30.69 30.69 0 0 0 -1.8 4.41l-.21.61a5.85 5.85 0 0 0 .27 4.76 4.79 4.79 0 0 0 4.35 2.26h.8v-7.67c0-1.51.7-1.12 2.23-.21a5.87 5.87 0 0 0 5.9 0c1.53-.91 2.22-1.3 2.23.21v7.67h.8a4.78 4.78 0 0 0 4.37-2.26 5.85 5.85 0 0 0 .29-4.76z"
                fill="#eef0f2"
              />
              <path
                d="m504.62 77.3-.21-.61a30.69 30.69 0 0 0 -1.8-4.41 16.37 16.37 0 0 0 -4.23-5.36l-.08-.06-.08-.06a8.51 8.51 0 0 0 -8.44 0l-.08.06-.08.06a16.37 16.37 0 0 0 -4.23 5.36 30.69 30.69 0 0 0 -1.8 4.41l-.21.61a5.85 5.85 0 0 0 .27 4.76 4.79 4.79 0 0 0 4.35 2.26h.8v-7.67c0-1.51.7-1.12 2.23-.21a5.87 5.87 0 0 0 5.9 0c1.53-.91 2.22-1.3 2.23.21v7.67h.8a4.78 4.78 0 0 0 4.37-2.26 5.85 5.85 0 0 0 .29-4.76z"
                fill="#667a85"
              />
              <path
                d="m226.62 256.3-.21-.61a30.69 30.69 0 0 0 -1.8-4.41 16.37 16.37 0 0 0 -4.23-5.36l-.08-.06-.08-.06a8.51 8.51 0 0 0 -8.44 0l-.08.06-.08.06a16.37 16.37 0 0 0 -4.23 5.36 30.69 30.69 0 0 0 -1.8 4.41l-.21.61a5.85 5.85 0 0 0 .27 4.76 4.79 4.79 0 0 0 4.37 2.26h.8v-7.67c0-1.51.7-1.12 2.23-.21a5.87 5.87 0 0 0 5.9 0c1.53-.91 2.22-1.3 2.23.21v7.67h.8a4.78 4.78 0 0 0 4.37-2.26 5.85 5.85 0 0 0 .27-4.76z"
                fill="#eef0f2"
              />
              <path
                d="m304.4 371.16s-47.46 9.6-36.41 23.77 31.54 9.79 60.2-7.78-23.79-15.99-23.79-15.99z"
                fill="#fff"
              />
              <path
                d="m350.91 373.58s-23 33.76 25.25 34.41 26.84-40.53-25.25-34.41z"
                fill="#fff"
              />
              <path
                d="m281.44 302.81s-47.18 17.45-41.18 30 12.64 22.82 49.84-1.71-8.66-28.29-8.66-28.29z"
                fill="#fff"
              />
              <path
                d="m288.65 366.22s-17.31-30.75 8.7-64c14.9-19 41.4-23.36 56.18-19.26 15.23 4.22 43.51 8.49 41.63 58.7-2.37 63.34-91.42 50.34-106.51 24.56z"
                fill="#2e8ad1"
              />
              <path
                d="m406.55 322.87s29.86 40.48 18 47.65-23.09 12.14-40.71-28.79 22.71-18.86 22.71-18.86z"
                fill="#fff"
              />
              <path
                d="m319.29 306.83s.33 31 10.3 26.51 23.93-23.71 23.93-23.71z"
                fill="#fff"
              />
              <path
                d="m305.73 312.78c-1-4.06-5.5-7.19-13.26-9.31a65.85 65.85 0 0 0 -10.92-2 1.33 1.33 0 0 0 -.56.07c-.15.06-15.24 5.67-27.21 12.72a1.3 1.3 0 0 0 -.64 1.09 1.33 1.33 0 0 0 .58 1.13c8.78 5.87 14.3 14.43 15.55 24.1.07.52.11 1 .15 1.56a1.33 1.33 0 0 0 .64 1 1.3 1.3 0 0 0 .84.17 1.21 1.21 0 0 0 .36-.1 140.64 140.64 0 0 0 19.56-11.12c11.44-7.48 16.32-13.82 14.91-19.31z"
                fill="#2e8ad1"
              />
              <path
                d="m420.08 341.46a213.3 213.3 0 0 0 -12.48-19.36 1.24 1.24 0 0 0 -.42-.37c-2-1.08-19.35-10.28-26.4-3.86-4.2 3.82-3.6 11.79 1.82 24.38a165 165 0 0 0 7.82 16 1.31 1.31 0 0 0 1 .66h.29a1.3 1.3 0 0 0 .83-.45 45.61 45.61 0 0 1 26.62-15.06 1.32 1.32 0 0 0 .94-.73 1.3 1.3 0 0 0 -.02-1.21z"
                fill="#2e8ad1"
              />
              <path
                d="m267.48 293.64c-8.82-10.45-26.22-57.49 13.35-87.51 26.7-20.26 41.17-15.13 64.7-50.13 0 0 1.81-6.61 6.66 2 0 0 17.64 29 59.53 56.07 59.97 43.32 17.28 107.93-11.72 110.56-57.35 10.31-123.71-20.53-132.52-30.99z"
                fill="#2e8ad1"
              />
              <path
                d="m331.18 312.73s-40.06-6.91-50.27-23.77-7.38-43 10.41-50.83c12.92-5.67 29.93-4.6 52.78.2s54.68 21.22 44.56 57.6c-8.04 28.9-39.38 18.73-57.48 16.8z"
                fill="#fff"
              />
              <path
                d="m330.19 224.67s-11.78-.79-13.07-6.42c-1.86-8.16 9.53-7.35 12.47-6.83 5.69 1 11.85 1.33 12.52 6.5.81 6.27-7.47 6.76-11.92 6.75z"
                fill="#eed12b"
              />
              <path
                d="m300.78 262.31s-.86-16.85 5.11-16.31c7.12.63 6.65 10.88 6 16.18s-1.9 10.68-5.93 9.89c-2.61-.51-4.6-5.27-5.18-9.76z"
                fill="#2f97a2"
              />
              <path
                d="m341.37 269.51s-.94-18.35 5.56-17.77c7.76.69 7.25 11.85 6.57 17.62s-2.07 11.64-6.5 10.79c-2.83-.56-5-5.75-5.63-10.64z"
                fill="#2f97a2"
              />
              <path
                d="m342.45 300.58a19.25 19.25 0 0 1 -5.36-.06c-7.41-1.11-12.69-6.35-15.48-9.89-5.44 3.93-10.33 5.24-14.57 3.87-6.51-2.09-8.32-9.58-8.4-9.9a3.47 3.47 0 0 1 6.75-1.59c0 .1 1.1 4.08 3.82 4.94 2.46.77 6.32-1 10.87-4.92a3.48 3.48 0 0 1 5.31.92c0 .08 5 8.61 12.78 9.76 4.77.7 9.91-1.51 15.26-6.57a3.46 3.46 0 1 1 4.78 5c-5.21 4.93-10.5 7.76-15.76 8.44z"
                fill="#2e8ad1"
              />
              <circle cx="187" cy="332" fill="none" r="76" />
              <circle cx="187" cy="332" fill="#37b0be" r="72" />
              <path
                d="m187 264a68 68 0 1 1 -68 68 68.07 68.07 0 0 1 68-68m0-8a76 76 0 1 0 76 76 76 76 0 0 0 -76-76z"
                fill="#fff"
              />
              <path
                d="m231 337.63-.87-2.52a126.5 126.5 0 0 0 -7.48-18.28c-4.71-9.28-11.55-17.67-17.48-22.17l-.33-.26-.36-.23c-5-3.3-11.1-4.63-17.45-4.65s-12.47 1.35-17.45 4.65l-.36.23-.33.26c-5.93 4.5-12.77 12.89-17.48 22.17a126.5 126.5 0 0 0 -7.48 18.28c-.3.87-.59 1.71-.86 2.52a24.2 24.2 0 0 0 1.11 19.7c3.45 6.34 10.71 9.45 18.08 9.37h1 2.31v-31.7c.06-6.26 2.91-4.66 9.21-.87a24.41 24.41 0 0 0 24.46 0c6.3-3.79 9.15-5.39 9.21.87v31.72h2.31 1c7.37.08 14.63-3 18.09-9.37a24.27 24.27 0 0 0 1.15-19.72z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
