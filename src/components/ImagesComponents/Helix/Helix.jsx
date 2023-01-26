import React from 'react';
import { TiArrowBackOutline, TiArrowUpOutline } from 'react-icons/ti';
import helix from '../../Data/ImageComponents/Helix/helix1.jpeg';
import helix2 from '../../Data/ImageComponents/Helix/helix4.jpg';
import helix3 from '../../Data/ImageComponents/Helix/helix5.jpg';
import helix4 from '../../Data/ImageComponents/Helix/helix6.jpg';
import style from './Helix.module.css';

function Helix() {
  return (
    <div className={style.mainHelix}>
      <button
        type="button"
        onClick={() => window.history.back()}
        className={style.back}
      >
        <TiArrowBackOutline />
      </button>
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        className={style.toTop}
      >
        <TiArrowUpOutline />
      </button>
      <h2>Helix what?</h2>
      <img alt="helix" src={helix} />
      <div>
        <h3>Helix Nebula</h3>
        <div>
          <div>
            <p>
              When a star like the Sun runs out of fuel, it expands and its
              outer layers puff off, and then the core of the star shrinks. This
              phase is known as a &rdquo;planetary nebula&rdquo; and astronomers
              expect our Sun will experience this in about 5 billion years. This
              Helix Nebula images contains infrared data from NASA&apos;s
              Spitzer Space Telescope (green and red), optical light from Hubble
              (orange and blue), ultraviolet from NASA&apos;s Galaxy Evolution
              Explorer (cyan), and Chandra&apos;s X-rays (appearing as white)
              showing the white dwarf star that formed in the center of the
              nebula. The image is about four light years across.
            </p>
          </div>
          <img alt="helix2" src={helix2} />
        </div>
      </div>
      <div>
        <h3>General Information</h3>
        <div>
          <img alt="helix3" src={helix3} />
          <div>
            <p>
              The Helix Nebula is an example of a planetary nebula, formed by an
              intermediate to low-mass star, which sheds its outer layers near
              the end of its evolution. Gases from the star in the surrounding
              space appear, from our vantage point, as if we are looking down a
              helix structure. The remnant central stellar core, known as the
              central star (CS) of the planetary nebula, is destined to become a
              white dwarf star. The observed glow of the central star is so
              energetic that it causes the previously expelled gases to brightly
              fluoresce.
              <p>
                The nebula is in the constellation of Aquarius, and lies about
                650 light-years away, spanning about 0.8 parsecs (2.5
                light-years). Its age is estimated to be 10600+2300 years, based
                on the ratio of its size to its measured expansion rate of 31
                km/s.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Structure</h3>
        <div>
          <div>
            <p>
              The Helix Nebula is thought to be shaped like a prolate spheroid
              with strong density concentrations toward the filled disk along
              the equatorial plane, whose major axis is inclined about 21° to
              37° from our vantage point. The size of the inner disk is 8.19
              arcmin in diameter (0.52 pc); the outer torus is 12.22 arcmin in
              diameter (0.77 pc); and the outer-most ring is about 25 arcmin in
              diameter (1.76 pc). The outer-most ring appears flattened on one
              side due to it colliding with the ambient interstellar medium.
            </p>
          </div>
          <img alt="helix4" src={helix4} />
        </div>
      </div>
      <p>
        Source:
        <a
          href="https://www.nasa.gov/mission_pages/chandra/images/helix-nebula.html"
          rel="noreferrer"
          target="_blank"
        >
          https://www.nasa.gov/mission_pages/chandra/images/helix-nebula.html
        </a>
      </p>
      <p>
        Also, you can find more info
        <a
          href="https://en.wikipedia.org/wiki/Helix_Nebula"
          rel="noreferrer"
          target="_blank"
        >
          HERE
        </a>
        or checking Google.
      </p>
    </div>
  );
}

export default Helix;
