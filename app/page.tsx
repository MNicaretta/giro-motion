import Image from "next/image";
import Link from "next/link";
import Frame, { FrameSource } from "./ui/frame";

const frames: FrameSource[] = [
  {
    id: 'stardust',
    desc: "Stardust personal project"
  },
  {
    id: 'keep-moving',
    desc: "Keep moving personal project"
  },
  {
    id: 'lofi-train',
    desc: "Lo-fi train spotify study project"
  },
  {
    id: 'fantastico-jaspeao',
    desc: "Fantástico jaspeão personal project"
  },
]

export default function Home() {
  return (
    <>
      <header className="container page-header">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.gif"
              alt="Giro Motion Logo"
              width={240}
              height={135}
              unoptimized />
          </Link>
        </div>
        <div className="button-container">
          <a href="index.html" className="header-link">home</a>
          <a href="work.html" className="header-link">work</a>
          <a href="about.html" className="header-link">about</a>
          <a href="contact.html" className="header-link">contact</a>
        </div>
      </header>

      <div className="container intro">
        <div className="row">
          <div className="col">
            <h1>
              <div>
                <span className="black-italic">hey!</span>
                <span className="regular"> I&apos;m Giro.</span>
              </div>
              <div className="regular left-gap">a creative motion</div>
              <div className="regular left-gap">design freelancer.</div>
            </h1>
          </div>
        </div>
      </div>

      <div className="container intro">
        <div className="row">
          <div className="col">
            <div className="video-wrapper">
              <iframe
                src="https://player.vimeo.com/video/902122717?title=0&byline=0&portrait=0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Showreel LVL.1 - Giro Motion"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container intro">
        <div className="row">
          <div className="col">
            <h1>
              <span className="regular">design, movement</span><br />
              <span className="black-italic">and meaning.</span><br />
            </h1>
            <p>
              <span className="left-gap">
                Motion is a language that speaks through rhythm, energy, and
                emotion. </span
              ><br />
              <span className="left-gap">
                It&apos;s more than moving things, it&apos;s about making them mean
                something. </span
              ><br /><br />
              <a href="about.html">
                <span className="left-gap link">➜ More about me</span></a
              >
            </p>
          </div>
        </div>
      </div>

      <div className="container intro">
        <div className="frames-grid-2">
          {frames.map((frame => (
            <Frame key={frame.id} frame={frame} />
          )))}
        </div>
      </div>

      <div className="container intro-2">
        <p>
          <a href="work.html">
            <span className="link">➜ Dive deeper into my work</span></a
          >
        </p>
      </div>

      <br /><br /><br /><br />

      <div className="full-container contact-section">
        <div className="container">
          <h1>
            <span className="regular">questions or ideas?</span><br />
            <span className="black-italic">let&apos;s get in touch!</span>
          </h1>

          <div className="contact-button-wrapper">
            <a href="contact.html" className="contact-button">contact</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <div className="icon">
              <a href="https://www.behance.net/giromotion" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 24"
                  className="icon-svg"
                >
                  <path
                    d="M18.83,14.38a2.78,2.78,0,0,0,.65,1.9,2.31,2.31,0,0,0,1.7.59,2.31,2.31,0,0,0,1.38-.41,1.79,1.79,0,0,0,.71-0.87h2.31a4.48,4.48,0,0,1-1.71,2.53,5,5,0,0,1-2.78.76,5.53,5.53,0,0,1-2-.37,4.34,4.34,0,0,1-1.55-1,4.77,4.77,0,0,1-1-1.63,6.29,6.29,0,0,1,0-4.13,4.83,4.83,0,0,1,1-1.64A4.64,4.64,0,0,1,19.09,9a4.86,4.86,0,0,1,2-.4A4.5,4.5,0,0,1,23.21,9a4.36,4.36,0,0,1,1.5,1.3,5.39,5.39,0,0,1,.84,1.86,7,7,0,0,1,.18,2.18h-6.9Zm3.67-3.24A1.94,1.94,0,0,0,21,10.6a2.26,2.26,0,0,0-1,.22,2,2,0,0,0-.66.54,1.94,1.94,0,0,0-.35.69,3.47,3.47,0,0,0-.12.65h4.29A2.75,2.75,0,0,0,22.5,11.14ZM18.29,6h5.36V7.35H18.29V6ZM13.89,17.7a4.4,4.4,0,0,1-1.51.7,6.44,6.44,0,0,1-1.73.22H4.24V5.12h6.24a7.7,7.7,0,0,1,1.73.17,3.67,3.67,0,0,1,1.33.56,2.6,2.6,0,0,1,.86,1,3.74,3.74,0,0,1,.3,1.58,3,3,0,0,1-.46,1.7,3.33,3.33,0,0,1-1.35,1.12,3.19,3.19,0,0,1,1.82,1.26,3.79,3.79,0,0,1,.59,2.17,3.79,3.79,0,0,1-.39,1.77A3.24,3.24,0,0,1,13.89,17.7ZM11.72,8.19a1.25,1.25,0,0,0-.45-0.47,1.88,1.88,0,0,0-.64-0.24,5.5,5.5,0,0,0-.76-0.05H7.16v3.16h3a2,2,0,0,0,1.28-.38A1.43,1.43,0,0,0,11.89,9,1.73,1.73,0,0,0,11.72,8.19ZM11.84,13a2.39,2.39,0,0,0-1.52-.45H7.16v3.73h3.11a3.61,3.61,0,0,0,.82-0.09A2,2,0,0,0,11.77,16a1.39,1.39,0,0,0,.47-0.54,1.85,1.85,0,0,0,.17-0.88A1.77,1.77,0,0,0,11.84,13Z"
                  />
                </svg>
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/igor-brod-2b0884250/"
                target="_blank"
                className="link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 24"
                className="icon-svg"
              >
                  <path
                    d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                        c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                        C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/giro.motion" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 24"
                  className="icon-svg"
                >
                  <g>
                    <path
                      d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                          c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                          c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                          c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                          c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                          c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                          c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                          c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                          c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z"
                    ></path>
                    <path
                      d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                          c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z"
                    ></path>
                    <path
                      d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.vimeo.com/giromotion" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 24"
                  className="icon-svg"
                >
                  <path
                    d="M23.99 7.7c-0.08 1.8-1.3 4.27-3.67 7.4c-2.45 3.27-4.52 4.9-6.21 4.9c-1.05 0-1.94-0.99-2.66-2.99 c-0.48-1.82-0.97-3.65-1.45-5.48C9.46 9.6 8.9 8.6 8.3 8.55c-0.13 0-0.61 0.29-1.41 0.87L6 8.3C6.89 7.5 7.8 6.7 8.6 5.9 c1.18-1.05 2.07-1.61 2.67-1.66c1.4-0.14 2.3 0.8 2.6 2.95c0.35 2.3 0.6 3.7 0.7 4.24c0.4 1.9 0.8 2.8 1.3 2.8 c0.38 0 0.94-0.61 1.7-1.84c0.75-1.22 1.16-2.16 1.21-2.79c0.11-1.06-0.3-1.59-1.21-1.59c-0.43 0-0.88 0.1-1.33 0.3 c0.88-2.98 2.58-4.43 5.07-4.34C23.23 4.1 24.1 5.3 24 7.7z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-right">
            <h3>Let&apos;s connect</h3>
            <p>+55 51 99840-4398<br />igor@giromotion.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <span className="footer-bottom"
            ><strong>Giro Motion.</strong> All Rights Reserved.</span
            >
          </p>
        </div>
      </footer>
    </>
  );
}
