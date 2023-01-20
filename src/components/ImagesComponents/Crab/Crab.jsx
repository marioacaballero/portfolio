import React from 'react';
import crab1 from '../../Data/ImageComponents/Crab/crab1.jpeg';
import crab2 from '../../Data/ImageComponents/Crab/crab2.jpg';
import crab3 from '../../Data/ImageComponents/Crab/crab3.jpg';
import crab4 from '../../Data/ImageComponents/Crab/crab4.jpg';
import style from './Crab.module.css';

function Crab() {
  return (
    <div className={style.mainCrab}>
      <h2>Did you see the Crab?</h2>
      <img alt="crab1" src={crab1} />
      <div>
        <h3>Crab Nebula</h3>
        <div>
          <div>
            <p>
              In 1054, Chinese astronomers took notice of a “guest star” that
              was, for nearly a month, visible in the daytime sky. The “guest
              star” they observed was actually a supernova explosion, which gave
              rise to the Crab Nebula, a six-light-year-wide remnant of the
              violent event.
            </p>
            <p>
              With an apparent magnitude of 8.4 and located 6,500 light-years
              from Earth in the constellation Taurus, the Crab Nebula can be
              spotted with a small telescope and is best observed in January.
              The nebula was discovered by English astronomer John Bevis in
              1731, and later observed by Charles Messier who mistook it for
              Halley&apos;s Comet. Messier&apos;s observation of the nebula
              inspired him to create a catalog of celestial objects that might
              be mistaken for comets.
            </p>
          </div>
          <img alt="crab2" src={crab2} />
        </div>
      </div>
      <div>
        <div>
          <img alt="crab3" src={crab3} />
          <div>
            <p>
              This large mosaic of the Crab Nebula was assembled from 24
              individual exposures captured by Hubble over three months. The
              colors in this image do not match exactly what we would see with
              our eyes but yield insight into the composition of this
              spectacular stellar corpse. The orange filaments are the tattered
              remains of the star and consist mostly of hydrogen. The blue in
              the filaments in the outer part of the nebula represents neutral
              oxygen. Green is singly ionized sulfur, and red indicates doubly
              ionized oxygen. These elements were expelled during the supernova
              explosion.
            </p>
            <p>
              A rapidly spinning neutron star (the ultra-dense core of the
              exploded star) is embedded in the center of the Crab Nebula.
              Electrons whirling at nearly the speed of light around the
              star&apos;s magnetic field lines produce the eerie blue light in
              the interior of the nebula. The neutron star, like a lighthouse,
              ejects twin beams of radiation that make it appear to pulse 30
              times per second as it rotates.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Crab Pulsar</h3>
        <div>
          <div>
            <p>
              In the 1960s, because of the prediction and discovery of pulsars,
              the Crab Nebula again became a major center of interest. It was
              then that Franco Pacini predicted the existence of the Crab Pulsar
              for the first time, which would explain the brightness of the
              cloud. The star was observed shortly afterwards in 1968. The
              discovery of the Crab Pulsar, and the knowledge of its exact age
              (almost to the day) allows for the verification of basic physical
              properties of these objects, such as characteristic age and
              spin-down luminosity, the orders of magnitude involved (notably
              the strength of the magnetic field), along with various aspects
              related to the dynamics of the remnant.
            </p>
          </div>
          <img alt="crab4" src={crab4} />
        </div>
      </div>
      <p>
        Source:
        <a
          href="https://www.nasa.gov/feature/goddard/2017/messier-1-the-crab-nebula"
          rel="noreferrer"
          target="_blank"
        >
          https://www.nasa.gov/feature/goddard/2017/messier-1-the-crab-nebula
        </a>
        Also, you can find more info
        <a
          href="https://en.wikipedia.org/wiki/Crab_Nebula"
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

export default Crab;
