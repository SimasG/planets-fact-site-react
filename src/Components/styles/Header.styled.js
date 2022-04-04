import styled from "styled-components";

export const StyledHeader = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2.8rem;
    }
  }
`;

export const StyledHeaderMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  overflow: hidden;

  nav {
    position: fixed;
    width: 100%;
    padding: 0 2.4rem 6.7rem 2.4rem;
    top: 11.3rem;
    height: 100px;
  }

  ul > .header__menu-item {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 4fr 20fr 1.5fr;
    grid-template-rows: 1 1fr;
    grid-template-areas: "icon planet-name arrow";
    padding: 2.4rem 0;
    height: 200px;
    background-color: blue;
    .planet-icon {
      position: relative;
      background: red;
      width: 2rem;
      height: 2rem;
      border-radius: 90px;
      grid-area: icon;
    }

    .planet-name.mobile {
      grid-area: planet-name;
      font-family: "Spartan", sans-serif;
      font-size: 1.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.136rem;
      height: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      justify-self: start;
    }

    .menu-arrow {
      width: 0.04rem;
      height: 0.08rem;
      border: solid #d8d8d8;
      border-width: 0 0.2rem 0.2rem 0;
      opacity: 0.5;
      display: inline-block;
      padding: 0.3rem;
      transform: rotate(-45deg);
      transition: transform 0.3s linear;
      background: none;
      cursor: pointer;
      grid-area: arrow;
    }
  }
`;

//     .header__menu {
//       .header__menu-nav {
//         .header__menu-item {
//           .planet-icon {
//           }
//           #mercury {
//             background: #def4fc;
//           }
//           #venus {
//             background: #f7cc7f;
//           }
//           #earth {
//             background: #545bfe;
//           }
//           #mars {
//             background: #ff6a45;
//           }
//           #jupiter {
//             background: #ecad7a;
//           }
//           #saturn {
//             background: #fccb6b;
//           }
//           #uranus {
//             background: #65f0d5;
//           }
//           #neptune {
//             background: #497efa;
//           }
//           .planet-name.mobile {
//           }
//           .menu-arrow {
//           }
//         }
//         .header__menu-item:first-child {
//           padding-top: 0;
//         }
//         .header__menu-item:last-child {
//           padding-bottom: 0;
//         }
//         .header__hr {
//           width: 100%;
//           height: 1px;
//           background: #979797;
//           opacity: 0.3;
//         }
//       }
//     }
//     .header__menu.active {
//       display: block;
//     }