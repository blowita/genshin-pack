![License](https://img.shields.io/github/license/blowita/genshin-pack?color=blue)
![Node version](https://img.shields.io/badge/node-v14.18.0-brightgreen)
![Yarn version](https://img.shields.io/badge/yarn-v1.22.15-brightgreen)
![React version](https://img.shields.io/badge/react-^17.0.1-blue)
![Recoil version](https://img.shields.io/badge/recoil-^0.1.2-blue)
![Styled Components version](https://img.shields.io/badge/styled--components-^5.2.1-blue)
![Polished version](https://img.shields.io/badge/polished-^4.0.5-lightgray)
![Typescript](https://img.shields.io/badge/typescript-^4.1.2-lightgray)

# :sunrise_over_mountains::school_satchel: Genshin Pack - Genshin Impact Resource Management :chart_with_upwards_trend:

An open-source web fansite to help Genshin Impact players manage their resources and plan their character progression (:construction: upcoming: and weapon progression :wrench:). This is meant as an alternative to [HoYoLAB's Enhancement Progression Calculator](https://webstatic-sea.mihoyo.com/ys/event/calculator-sea/index.html) and other similar tools.

## :hammer: Status

> :green_circle: Online (Github Pages): https://blowita.github.io/genshin-pack/ [version 1.0.9]

> :construction: Upcoming: [roadmap](./roadmap.md) :wrench:

## :bookmark: Content Table
<!--ts-->
  * [App Interface](#newspaper-app-interface)
  * [Technologies](#books-technologies)
  * [Contributing](#hand-how-to-contribute)
  * [Install and Run Locally](#calling-installing-and-running-this-project-locally)
  * [Author and License](#memo-author-and-license)
<!--te-->

## :newspaper: App Interface

<details>
  <summary>Character page</summary>
  <p align="center">
    <img alt="Character page" title="Character page" width="600" src="./.github/character-page.png">
  </p>
</details>
<details>
  <summary>Resources page</summary>
  <p align="center">
    <img alt="Resources page" title="Resources page" width="600" src="./.github/resource-page.png">
  </p>
</details>

## :books: Technologies

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [React](https://reactjs.org/)
- [Recoil](https://recoiljs.org/)
- [Styled Components](https://styled-components.com/)
- [Polished](https://polished.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :hand: How to contribute

This is an open source project, feel free to submit suggestions and bug reports at the [Issues page](https://github.com/blowita/genshin-pack/issues), or make a [Pull Request (PR)](https://github.com/blowita/genshin-pack/pulls) if you feel like helping with coding. Also, feel free to fork, clone or copy parts of the project to use on your own projects.

## :calling: Installing and running this project

### :wrench: Prerequisites

Before starting, make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed.

### :inbox_tray: Install and run

Clone the project using Git, install its dependencies through Yarn and run the project:

```bash
git clone https://github.com/blowita/genshin-pack.git

# wait for git to finish clonning the project, then navigate to the folder and install the dependencies:

cd genshin-pack
cd web

yarn

# Finally, run the app:

yarn start
```

The app will be served locally at http://localhost:3000/genshin-pack.

## :memo: Author and License

[![Author: blowita](https://avatars.githubusercontent.com/u/62087579?s=40&v=4)](https://github.com/blowita/blowita) | [BlowITA](https://github.com/blowita/blowita)
-|-

[![License](https://img.shields.io/github/license/blowita/genshin-pack)](LICENSE)

This project was something I developed in order to learn Facebook's [Recoil library](https://recoiljs.org/) and to practice CSS and styled-components. This helped me identify multiple points that I can improve in future projects (specially in state management and componentization).
