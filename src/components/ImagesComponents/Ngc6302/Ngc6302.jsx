import React from 'react';
import { TiArrowBackOutline, TiArrowUpOutline } from 'react-icons/ti';
import bug1 from '../../Data/ImageComponents/Butterfly/butterfly1.jpeg';
import bug2 from '../../Data/ImageComponents/Butterfly/butterfly2.jpg';
import bug3 from '../../Data/ImageComponents/Butterfly/butterfly3.jpg';
import bug4 from '../../Data/ImageComponents/Butterfly/butterfly4.jpg';
import style from './Ngc6302.module.css';

function Ngc6302() {
  return (
    <div className={style.mainNgc}>
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
      <h2>Cool, a Butterfly!</h2>
      <img alt="bug1" src={bug1} />
      <div>
        <h3>NGC 6302</h3>
        <div>
          <div>
            <p>
              Butterfly Emerges from Stellar Demise in Planetary Nebula NGC 6302
            </p>
            <p>
              This celestial object looks like a delicate butterfly. But it is
              far from serene.
            </p>
            <p>
              What resemble dainty butterfly wings are actually roiling
              cauldrons of gas heated to more than 36,000 degrees Fahrenheit.
              The gas is tearing across space at more than 600,000 miles an hour
              -- fast enough to travel from Earth to the moon in 24 minutes!
            </p>
            <p>
              A dying star that was once about five times the mass of the Sun is
              at the center of this fury. It has ejected its envelope of gases
              and is now unleashing a stream of ultraviolet radiation that is
              making the cast-off material glow. This object is an example of a
              planetary nebula, so-named because many of them have a round
              appearance resembling that of a planet when viewed through a small
              telescope.
            </p>
          </div>
          <img alt="bug2" src={bug2} />
        </div>
      </div>
      <div>
        <div>
          <img alt="bug3" src={bug3} />
          <div>
            <p>
              The Wide Field Camera 3 (WFC3), a new camera aboard NASA&apos;s
              Hubble Space Telescope, snapped this image of the planetary
              nebula, catalogued as NGC 6302, but more popularly called the Bug
              Nebula or the Butterfly Nebula. WFC3 was installed by NASA
              astronauts in May 2009, during the servicing mission to upgrade
              and repair the 19-year-old Hubble telescope.
            </p>
            <p>
              NGC 6302 lies within our Milky Way galaxy, roughly 3,800
              light-years away in the constellation Scorpius. The glowing gas is
              the star&apos;s outer layers, expelled over about 2,200 years. The
              &rdquo;butterfly&rdquo; stretches for more than two light-years,
              which is about half the distance from the Sun to the nearest star,
              Alpha Centauri.
            </p>
            <p>
              The central star itself cannot be seen, because it is hidden
              within a doughnut-shaped ring of dust, which appears as a dark
              band pinching the nebula in the center. The thick dust belt
              constricts the star&apos;s outflow, creating the classic
              &rdquo;bipolar&rdquo; or hourglass shape displayed by some
              planetary nebulae.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>
              The star&apos;s surface temperature is estimated to be about
              400,000 degrees Fahrenheit, making it one of the hottest known
              stars in our galaxy. Spectroscopic observations made with
              ground-based telescopes show that the gas is roughly 36,000
              degrees Fahrenheit, which is unusually hot compared to a typical
              planetary nebulae.
            </p>
            <p>
              The WFC3 image reveals a complex history of ejections from the
              star. The star first evolved into a huge red-giant star, with a
              diameter of about 1,000 times that of our Sun. It then lost its
              extended outer layers. Some of this gas was cast off from its
              equator at a relatively slow speed, perhaps as low as 20,000 miles
              an hour, creating the doughnut-shaped ring. Other gas was ejected
              perpendicular to the ring at higher speeds, producing the
              elongated &rdquo;wings&rdquo; of the butterfly-shaped structure.
              Later, as the central star heated up, a much faster stellar wind,
              a stream of charged particles travelling at more than 2 million
              miles an hour, plowed through the existing wing-shaped structure,
              further modifying its shape.
            </p>
          </div>
          <img alt="bug4" src={bug4} />
        </div>
      </div>
      <p>
        Source:
        <a
          href="https://www.nasa.gov/mission_pages/hubble/multimedia/ero/ero_ngc6302.html"
          rel="noreferrer"
          target="_blank"
        >
          https://www.nasa.gov/mission_pages/hubble/multimedia/
        </a>
      </p>
      <p>
        Also, you can find more info
        <a
          href="https://en.wikipedia.org/wiki/NGC_6302"
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

export default Ngc6302;
