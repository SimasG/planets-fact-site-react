import styled from "styled-components";
// import planetData from "../../data.json";
// import Mercury from "../../assets/planet-mercury.svg";

export const StyledMain = styled.main`
  .main__container {
    .main__tabs {
      padding: 2rem 3.7rem;
      border-top: 1px solid rgba(151, 151, 151, 0.3);
      border-bottom: 1px solid rgba(151, 151, 151, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main__tab {
        position: relative;
        font-family: "Spartan", sans-serif;
        font-size: 0.9rem;
        letter-spacing: 0.193rem;
        text-transform: uppercase;
        font-weight: 700;
        opacity: 0.6;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;
        background: transparent;
        border: none;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.4rem;
          top: 2.7rem;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        &:hover {
          opacity: 1;
          &::before {
            transform: scaleX(1);
          }
        }
      }
    }
    .main__tabs.active {
      display: none;
    }
    .main__tabs.hide-for-mobile {
      display: none;
    }
    .main__hero {
      display: none;
      padding: 2.4rem;
      position: relative;
      .main__img {
        text-align: center;
        padding-top: 9.8rem;
        padding-bottom: 9.8rem;
        margin: 0 auto;
        img {
          height: 11.1rem;
          width: 11.1rem;
          margin: 0 auto;
          .planet-img {
            text-align: center;
            margin: 0 auto;
          }
        }
      }
      .main__text {
        text-align: center;
        .main__text-heading {
          font-size: 4rem;
        }
        .main__text-paragraph {
          font-family: "Spartan", sans-serif;
          line-height: 2.5rem;
          padding-bottom: 3rem;
        }
        .main__text-source {
          font-family: "Spartan", sans-serif;
          font-size: 1.2rem;
          line-height: 2.5rem;
          opacity: 0.4;
          font-weight: 400;
          top: -0.5rem;
        }
        .main__text-source-link {
          text-decoration: underline;
          font-weight: 700;
          cursor: pointer;
          top: -0.5rem;
          font-size: 1.2rem;
        }
        .main__text-source-link > p {
          font-size: 1.2rem;
        }
      }
      .main__table {
        margin: 2.8rem 0;
        .main__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(151, 151, 151, 0.3);
          padding: 1.05rem 2.3rem;
          margin: 0.8rem 0;
          .main__item-title {
            font-family: "Spartan", sans-serif;
            font-size: 0.8rem;
            line-height: 1.6rem;
            letter-spacing: 0.073rem;
            text-transform: uppercase;
            font-weight: 700;
            opacity: 0.6;
          }
          .main__item-info {
            font-family: "Antonio", sans-serif;
            font-size: 2rem;
            line-height: auto;
            letter-spacing: -0.075rem;
            text-transform: uppercase;
            font-weight: 700;
          }
        }
        .main__item:first-child {
          margin-top: 0;
        }
        .main__item:last-child {
          margin-bottom: 0;
        }
      }
    }
    .active {
      display: block;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .main__container {
      .main__tabs {
        display: none;
        border: none;
        .main__tab {
          border: 1px solid rgba(151, 151, 151, 0.3);
          &::before {
            content: "";
            display: none;
          }
          &:hover {
            opacity: 1;
            &::before {
              transform: scaleX(1);
            }
          }
        }
      }
      // MY FIRST BIG GRID EXPERIMENT
      .main__hero.active {
        padding: 2.5rem 3.9rem;

        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(4, 3fr);
        // grid-template-columns: 3fr 3fr 3fr 3fr;
        grid-template-rows: 13fr 9fr 4fr;
        grid-template-areas:
          "planet planet planet planet"
          "text text tabs tabs"
          "table table table table";
        .main__img {
          grid-area: planet;
          grid-column: 1/5;
          grid-row: 1/2;

          // OR
          // grid-column-start: 1;
          // grid-column-end: 5;
          // grid-row-start: row1-start;
          // grid-row-end: 2;
          padding: 0;
          img {
            height: 18.4rem;
          }
        }
        .main__text {
          grid-area: text;
          grid-column: 1/3;
          grid-row: 2/3;

          text-align: left;
          .main__text-heading {
            font-size: 4.8rem;
          }
          .main__text-paragraph {
            padding-right: 1rem;
          }
        }
        .main__tabs.hide-for-mobile {
          grid-area: tabs;
          grid-column: 3/5;
          grid-row: 2/3;

          display: flex;
          flex-direction: column;

          padding: 0;
          border: none;
          justify-self: end;
          margin-top: 4rem;
          .main__tab {
            width: 28.1rem;
            height: 4rem;
            margin: 0.8rem 0;
            line-height: 2.5rem;
            text-align: left;
            padding: 0 1.9rem;
            color: (--white);
            opacity: 1;
            &:hover {
              background: rgba(216, 216, 216, 0.2);
              transition: 0.3s ease-in-out;
            }
          }
          .main__tab.active {
            background: #419ebb;
          }
          .main__tab:first-child {
            margin-top: 0;
          }
          .main__tab:last-child {
            margin-bottom: 0;
          }
          .tab_number {
            color: #fff;
            opacity: 0.6;
            margin-right: 1.4rem;
          }
          .tab_title {
            color: white;
            opacity: 1;
          }
        }
        .main__table {
          grid-area: table;
          // grid-column: 1/5;
          // grid-row: 3/4;
          display: flex;
          justify-content: space-between;
          // not sure why the align-items doesn't work
          align-items: flex-end;
          width: 100%;
          margin: 0;
          .main__item {
            display: block;
            width: 16.4rem;
            height: 8.8rem;
            margin: 2rem 0 0 0;
            text-align: left;
            padding: 1.8rem 1.5rem 2.1rem 1.5rem;
            .main__item-title {
              margin-bottom: 0.5rem;
            }
            .main__item-info {
              font-size: 2.4rem;
              letter-spacing: -0.09rem;
            }
          }
        }
      }
    }
  }
`;
