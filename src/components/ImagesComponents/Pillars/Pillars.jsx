import React, { useEffect } from 'react';
import { TiArrowBackOutline, TiArrowUpOutline } from 'react-icons/ti';
import nebula from '../../Data/ImageComponents/Pillars/pillars2.jpg';
import nebula2 from '../../Data/ImageComponents/Pillars/nebula.jpg';
import pillars1 from '../../Data/ImageComponents/Pillars/pillars.jpg';
import pillars2 from '../../Data/ImageComponents/Pillars/pillars3.jpg';
import style from './Pillars.module.css';

function Pillars() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={style.mainPillars}>
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
      <h2>Start with &rdquo;nebulas&rdquo;</h2>
      <img alt="nebula" src={nebula} />
      <div>
        <h3>What is Nebula?</h3>
        <div>
          <div>
            <p>
              A nebula is a distinct luminescent part of interstellar medium,
              which can consist of ionized, neutral or molecular hydrogen and
              also cosmic dust. Nebulae are often star-forming regions, such as
              in the &rdquo;Pillars of Creation&rdquo; in the Eagle Nebula. In
              these regions, the formations of gas, dust, and other materials
              &rdquo;clump&rdquo; together to form denser regions, which attract
              further matter, and eventually will become dense enough to form
              stars. The remaining material is then thought to form planets and
              other planetary system objects.
            </p>
          </div>
          <img alt="nebula2" src={nebula2} />
        </div>
      </div>
      <div>
        <h3>Pillars of Creation</h3>
        <div>
          <img alt="pillars" src={pillars1} />
          <div>
            <p>
              These towering tendrils of cosmic dust and gas sit at the heart of
              M16, or the Eagle Nebula. The aptly named Pillars of Creation,
              featured in this stunning Hubble image, are part of an active
              star-forming region within the nebula and hide newborn stars in
              their wispy columns.
            </p>
            <p>
              Although this is not Hubble&apos;s first image of this iconic
              feature of the Eagle Nebula, it is the most detailed. The blue
              colors in the image represent oxygen, red is sulfur, and green
              represents both nitrogen and hydrogen. The pillars are bathed in
              the scorching ultraviolet light from a cluster of young stars
              located just outside the frame. The winds from these stars are
              slowly eroding the towers of gas and dust.
            </p>
            <p>
              Stretching roughly 4 to 5 light-years, the Pillars of Creation are
              a fascinating but relatively small feature of the entire Eagle
              Nebula, which spans 70 by 55 light-years. The nebula, discovered
              in 1745 by the Swiss astronomer Jean-Philippe Loys de Chéseaux, is
              located 7,000 light-years from Earth in the constellation Serpens.
              With an apparent magnitude of 6, the Eagle Nebula can be spotted
              through a small telescope and is best viewed during July. A large
              telescope and optimal viewing conditions are necessary to resolve
              the Pillars of Creation.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Theorized destruction</h3>
        <div>
          <div>
            <p>
              Images taken with the Spitzer Space Telescope uncovered a cloud of
              dust in the vicinity of the Pillars of Creation that Nicolas
              Flagey suggested could be a shock wave produced by a supernova.
              The appearance of the cloud suggests the supernova shockwave would
              have destroyed the Pillars of Creation 6,000 years ago. Given the
              distance of roughly 7,000 light-years to the Pillars of Creation,
              this would mean that they have actually already been destroyed,
              but because light travels at a finite speed, this destruction
              should be visible from Earth in about 1,000 years. However, this
              interpretation of the hot dust has been disputed by an astronomer
              uninvolved in the Spitzer observations, who argues that a
              supernova should have resulted in stronger radio and x-ray
              radiation than has been observed, and that winds from massive
              stars could instead have heated the dust. If this is the case, the
              Pillars of Creation will undergo a more gradual erosion.
            </p>
          </div>
          <img alt="pillars3" src={pillars2} />
        </div>
      </div>
      <p>
        Source:
        <a
          href="https://www.nasa.gov/image-feature/the-pillars-of-creation"
          rel="noreferrer"
          target="_blank"
        >
          https://www.nasa.gov/image-feature/the-pillars-of-creation
        </a>
      </p>
      <p>
        Also, you can find more info
        <a
          href="https://en.wikipedia.org/wiki/Pillars_of_Creation"
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

export default Pillars;
