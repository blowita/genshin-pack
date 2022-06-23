import React from "react";

import { Container } from "./styles";

const InfoPage: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>Information Page</h1>
        <section>
          <details>
            <summary>About Genshin Pack</summary>
            <p>
              Genshin Pack is an open-source fan-made website for{" "}
              <a href="https://genshin.hoyoverse.com/">Genshin Impact</a> that
              aims to help players plan their characters&apos; progress.
            </p>
          </details>
        </section>
        <section>
          <details>
            <summary>Disclaimer about Genshin Impact</summary>
            <p>
              Genshin Impact, game content and materials are trademarks and
              copyrights of COGNOSPHERE.
            </p>
            <p>
              Images used in Genshin Pack were obtained from{" "}
              <a href="https://www.hoyolab.com/">HoYoLAB&apos;s tools</a> and
              are stored locally in order to not impact COGNOSPHERE&apos;s
              services.
            </p>
          </details>
        </section>
        <br />
        <section>
          <details>
            <summary>Privacy Policy</summary>
            <p>Last updated: December 29th, 2021</p>
            <p>
              Genshin Pack runs locally on the user&apos;s browser and no user
              data is sent over the internet. Genshin Pack doesn&apos;t collect
              user data and doesn&apos;t share any data with third parties. All
              site data is stored locally in the browser&apos;s localStorage and
              can be erased at the user&apos;s discretion by clearing the data
              stored locally.
            </p>
          </details>
        </section>
        <section>
          <details>
            <summary>Cookies Policy</summary>
            <p>Last updated: December 29th, 2021</p>
            <p>
              Genshin Pack doesn&apos;t use cookies. All site data is stored
              locally in the browser&apos;s <em>localStorage</em> and is
              identified by keys starting with <em>@GenshinPack</em>. The data
              has no expiration date and is only required in order to achieve
              persistence between sessions. It can be cleared individually or
              completely wiped at the user&apos;s discretion through the
              mechanisms provided by the browser to clear the localStorage. No
              data is recorded until the user performs the first interaction
              with input elements of the site. The data is never sent over the
              internet and only exists in the user&apos;s browser. The stored
              data is comprised of site preferences and game data filled by the
              user when interacting with input elements in this site.
            </p>
          </details>
        </section>
        <br />
        <section>
          <details>
            <summary>Frequently Asked Questions</summary>
            <p>Last updated: December 29th, 2021</p>
            <p>
              Q: Will Genshin Pack be updated with every new patch of Genshin
              Impact?
            </p>
            <p>A: Yes, it will.</p>
            <br />
            <p>
              Q: Will Genshin Pack provide online storage and data
              synchronization between devices?
            </p>
            <p>
              A: No, it won&apos;t. But it&apos;ll provide a way of exporting
              and importing data in the future.
            </p>
          </details>
        </section>
        <br />
        <section>
          <details>
            <summary>Roadmap</summary>
            <p>Last updated: February 16th, 2022</p>
            <p>Latest release: 1.0.5 - June 22nd, 2022</p>
            <p>Coming soon:</p>
            <ul>
              <li>Search characters and resources by name (or regex)</li>
              <li>
                Filter characters (by element, weapon type and other options)
              </li>
              <li>Sort characters (by level, A-Z, rarity and other options)</li>
            </ul>
            <br />
            <p>Coming later:</p>
            <ul>
              <li>Fill data through Image Recognition (characters)</li>
              <li>Fill data through Image Recognition (resources)</li>
              <li>
                Check if resources gathered are enough (by upgrading or
                converting)
              </li>
              <li>Upgrade or convert resources</li>
              <li>Section for weapons</li>
            </ul>
            <br />
            <p>On the radar:</p>
            <ul>
              <li>
                Display resources for single character (on character screen)
              </li>
              <li>Resin calculator (estimate resin and time required)</li>
              <li>Localization (Portuguese)</li>
            </ul>
            <br />
            <p>Other:</p>
            <ul>
              <li>SEO (Search Engine Optimization)</li>
              <li>Import/export data</li>
              <li>
                Replace global state management (use zustand instead of
                recoiljs)
              </li>
            </ul>
          </details>
        </section>
        <section>
          <details>
            <summary>Version History</summary>
            <p>1.0.5 - June 22nd, 2022</p>
            <ul>
              <li>
                Added Genshin Impact&apos;s version 2.7 new character (Kuki
                Shinobu)
              </li>
            </ul>
            <br />
            <p>1.0.4 - May 31st, 2022</p>
            <ul>
              <li>
                Added Genshin Impact&apos;s version 2.6 new character (Kamisato
                Ayato)
              </li>
              <li>
                Added Genshin Impact&apos;s version 2.7 new character (Yelan)
              </li>
            </ul>
            <br />
            <p>1.0.3 - February 16th, 2022</p>
            <ul>
              <li>
                Added Genshin Impact&apos;s version 2.5 new character (Yae Miko)
              </li>
            </ul>
            <br />
            <p>1.0.2 - January 5th, 2022</p>
            <ul>
              <li>
                Added Genshin Impact&apos;s version 2.4 new characters (Shenhe
                and YunJin)
              </li>
            </ul>
            <br />
            <p>1.0.1 - December 29th, 2021</p>
            <ul>
              <li>Added privacy policy and information page</li>
            </ul>
            <br />
            <p>1.0.0 - December 27th, 2021</p>
            <ul>
              <li>Released Genshin Pack&apos;s Character and Resource pages</li>
              <li>Data matching Genshin Impact&apos;s version 2.3</li>
            </ul>
            <br />
          </details>
        </section>
        <section>
          <details>
            <summary>Feedback and how to contribute</summary>
            <p>
              Genshin Pack is an open-source project,{" "}
              <a href="https://github.com/blowita/genshin-pack">
                hosted on Github
              </a>{" "}
              and accepting contributions from anyone willing to help.
            </p>
            <p>
              Suggestions and issues may be{" "}
              <a href="https://github.com/blowita/genshin-pack/issues">
                submitted at the issues page
              </a>{" "}
              and we&apos;ll add them to the roadmap.
            </p>
          </details>
        </section>
      </main>
    </Container>
  );
};

export default InfoPage;
