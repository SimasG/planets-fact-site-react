import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      display: none;
      .header__logo {
        font-size: 2.8rem;
        color: #fff;
        z-index: 100;
      }
      .burger-btn {
        z-index: 100;
      }
    }
  }
`;

export const StyledHeaderMenuMobile = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(240, 67%, 8%);
  overflow: hidden;

  nav {
    position: fixed;
    width: 100%;
    padding: 0 2.4rem 6.7rem 2.4rem;
    margin-top: 11.3rem;
    height: 100px;
  }

  ul {
    width: 100%;
    /* No clue why I need to put margin-top here */
    margin-top: 45rem;
    .header__menu-item {
      display: grid;
      justify-items: start;
      align-items: center;
      grid-template-columns: 4fr 20fr 1.5fr;
      grid-template-rows: 1 1fr;
      grid-template-areas: "icon planet-name arrow";
      padding: 2.4rem 0;
      .planet-icon {
        position: relative;
        background-color: ${({ theme }) => theme.randomColor};
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
        color: #fff;
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
  }
`;

export const StyledHeaderMenuDesktop = styled.section`
  padding: 4rem 4rem 0 4rem;
  display: inline;
  display: none;
  .header__links-list {
    display: flex;
    justify-content: space-between;
    ul {
      li {
        .planet-name {
          position: relative;
          font-family: "Spartan", sans-serif;
          font-size: 1.1rem;
          line-height: 2.5rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 0.6;
          &:hover {
            opacity: 1;
            transition: opacity ease-in-out 0.5s;
          }
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;
