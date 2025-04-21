import styled from "styled-components";

export const HeaderStyle = styled.header`
/* -----------------  */
header {
    z-index: 1;
    width: 100%;
    background-color: var(--secondary-color);
  }
  
  .header-section {
    padding: 0 2.4rem;
    justify-content: space-between;
  
    .logo {
      a {
        font-size: 6.2rem;
        font-family: "Gruppo", sans-serif;
        color: var(--primary-color);
      }
    }
  
    .links {
      ul {
        gap: 1.4rem;
      }
      li {
        a {
          padding: 0.4rem 0.8rem;
          border-radius: 10rem;
          background-color: var(--white-color);
          color: var(--black-color);
          -webkit-border-radius: 10rem;
          -moz-border-radius: 10rem;
          -ms-border-radius: 10rem;
          -o-border-radius: 10rem;
          transition: all 0.3s linear;
          -webkit-transition: all 0.3s linear;
          -moz-transition: all 0.3s linear;
          -ms-transition: all 0.3s linear;
          -o-transition: all 0.3s linear;
  
          &:hover {
            background-color: var(--black-color);
            color: var(--white-color);
          }
        }
      }
    }
  }
  `