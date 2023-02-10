import React, { useEffect } from 'react';
import { TiArrowBackOutline, TiArrowUpOutline } from 'react-icons/ti';
import galaxy1 from '../../Data/ImageComponents/Galaxy/galaxy1.jpg';
import galaxy2 from '../../Data/ImageComponents/Galaxy/galaxy2.jpg';
import bigbang from '../../Data/ImageComponents/Galaxy/bigbang.jpg';
import galaxies from '../../Data/ImageComponents/Galaxy/galaxies3.jpeg';
import style from './Galaxy.module.css';

function Galaxy() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={style.mainGalaxy}>
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
      <h2>What? A Galaxy?</h2>
      <img alt="galaxy" src={galaxy1} />
      <div>
        <h3>What are Galaxies?</h3>
        <div>
          <div>
            <p>
              Galaxies are sprawling systems of dust, gas, dark matter, and
              anywhere from a million to a trillion stars that are held together
              by gravity. Nearly all large galaxies are thought to also contain
              supermassive black holes at their centers. In our own galaxy, the
              Milky Way, the sun is just one of about 100 to 400 billion stars
              that spin around Sagittarius A*, a supermassive black hole that
              contains as much mass as four million suns.
            </p>
            <p>The deeper we look into the cosmos, the more galaxies we see.</p>
          </div>
          <img alt="galaxy2" src={galaxy2} />
        </div>
      </div>
      <div>
        <h3>Origin of Galaxies</h3>
        <div>
          <img alt="bigbang" src={bigbang} />
          <div>
            <p>
              The universe&apos;s first stars ignited some 180 million years
              after the big bang, the explosive moment 13.8 billion years ago
              that marks the origins of the universe as we know it. Gravity had
              sculpted the first galaxies into shape by the time the universe
              turned 400 million years old, or less than 3 percent of its
              current age.
            </p>
            <p>
              The questions about how galaxies form, are still open. Some
              believe that galaxies formed from smaller clusters of about one
              million stars, known as globular clusters, while others hold that
              galaxies formed first, and later birthed globular clusters.
              It&apos;s also difficult to figure out how many of a given
              galaxy&apos;s stars formed in situ from its own gas, versus
              forming in another galaxy and joining the party later.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>What types can we find?</h3>
        <div>
          <div>
            <p>
              Before the 20th century, we didn&apos;t know that galaxies other
              than the Milky Way existed; earlier astronomers had classified
              them as as “nebulae,” since they looked like fuzzy clouds. But in
              the 1920s, astronomer Edwin Hubble showed that the Andromeda
              “nebula” was a galaxy in its own right. Since it is so far from
              us, it takes light from Andromeda more than 2.5 million years to
              bridge the gap.
            </p>
            <p>
              We can find spiral galaxies, lenticular galaxies, elliptical
              galaxies and irregular galaxies.
            </p>
          </div>
          <img alt="galaxies" src={galaxies} />
        </div>
      </div>
      <p>
        Source:
        <a
          href="https://www.nationalgeographic.com/science/article/galaxies"
          rel="noreferrer"
          target="_blank"
        >
          https://www.nationalgeographic.com/science/article/galaxies
        </a>
      </p>
      <p>
        Also, you can find more info
        <a
          href="https://en.wikipedia.org/wiki/Galaxy"
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

export default Galaxy;
