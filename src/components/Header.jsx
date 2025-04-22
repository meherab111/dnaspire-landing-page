import styled from "styled-components";

const HeaderStyle = styled.header`

    z-index: 1;
    width: 100%;
    background-color: ${ ({theme}) => theme.colors.secondaryColor};
  
  .header-section {
    padding: 0 2.4rem;
    justify-content: space-between;
  
    .logo {
      a {
        font-size: 6.2rem;
        font-family: "Gruppo", sans-serif;
        color: ${ ({theme}) => theme.colors.primaryColor};
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
          background-color: ${ ({theme}) => theme.colors.whiteColor};
          color: ${ ({theme}) => theme.colors.blackColor};
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
            background-color: ${ ({theme}) => theme.colors.blackColor};
            color: ${ ({theme}) => theme.colors.whiteColor};
          }
        }
      }
    }
  }

   
/** Media Query */

/* 1536px, 1280px, 1024px, 768px, 540px */


@media (width<=1024px) {

  .header-section {
    .logo {
      a {
        font-size: 5.2rem;
      }
    }
    .links {
      ul {
        gap: 1.2rem;
      }
    }
  }

}

@media (width<=768px){

    .header-section {
        flex-direction: column;
        .links {
            ul {
               margin: 0 0 1.2rem 0; 
            }
        }
    }

}

@media (width<=540px){
    .header-section {
        .logo {
          a {
            font-size: 4.6rem;
          }
        }
        .links {
          ul {
            gap: 1rem;
          }
        }
      }

}
`

export const Header = () => {
    return(
        <HeaderStyle>
        <section className="container header-section flex">
          <div className="logo">
            <a href="#">DNAspire</a>
          </div>
          <nav className="links">
            <ul className="flex">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">terms</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </section>
      </HeaderStyle>
    )
}