import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Gruppo&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* Base Rule */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

h1 {
  font-family: "Gruppo", sans-serif;
  text-transform: capitalize;
}

img {
  transform: scaleX(-1);
  height: auto;
  width: 100%;
  animation: imgRotation 10s linear 10s infinite;
  -webkit-animation: imgRotation 10s linear 10s infinite;
}

@keyframes imgRotation {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: 5deg;
  }
  50% {
    rotate: 0deg;
  }
  75% {
    rotate: -5deg;
  }
  100% {
    rotate: 0deg;
  }
}

p,
a,
li {
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  text-decoration: none;
  list-style: none;
}


/* Layout */

.container {
  max-width: 146rem;
  margin: 0 auto;
  padding: 6.6rem 2.4rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.grid {
  display: grid;
  align-items: center;
  justify-content: center;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

/* Reuseable */

button {
  z-index: 1;
  font-family: "Gruppo", sans-serif;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 3.4rem;
  background-color: ${ ({theme}) => theme.colors.btnColor};
  color: ${ ({theme}) => theme.colors.whiteColor};
  border: none;
  border-radius: 100rem;
  -webkit-border-radius: 100rem;
  -moz-border-radius: 100rem;
  -ms-border-radius: 100rem;
  -o-border-radius: 100rem;
  height: 80px;
  width: 310px;
  box-shadow: ${ ({theme}) => theme.boxShadow.boxShadow};
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;

  &:hover {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
    -moz-transform: translateY(0.2rem);
    -ms-transform: translateY(0.2rem);
    -o-transform: translateY(0.2rem);
    box-shadow: none;
  }
}


/* -----------------  */
header {
    z-index: 1;
    width: 100%;
    background-color: ${ ({theme}) => theme.colors.secondaryColor};
  }
  
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

  
.main-section {
    gap: 10rem;
  
    .info-left-side {
      gap: 10rem;
      h1 {
        font-size: 12.4rem;
        font-weight: 100;
        color: ${ ({theme}) => theme.colors.primaryColor};
      }
      p {
        font-size: 4rem;
        text-transform: none;
        color: ${ ({theme}) => theme.colors.blackColor};
      }
      .info-buttons {
        gap: 4rem;
      }
    }
  }
  
  .custom-shape-divider-bottom-1745089715 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
  }
  
  .custom-shape-divider-bottom-1745089715 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 124px;
      transform: rotateY(180deg);
  }
  
  .custom-shape-divider-bottom-1745089715 .shape-fill {
    fill: ${ ({theme}) => theme.colors.secondaryColor};
  }

/** Media Query */

/* 1536px, 1280px, 1024px, 768px, 540px */

@media (width<=1536px) {
  html {
    font-size: 56%;
  }
}

@media (width<=1280px) {
  html {
    font-size: 52%;
  }
  button {
    height: 70px;
    width: 280px;
  }
  .custom-shape-divider-bottom-1745089715 svg {
    height: 114px;
}
}

@media (width<=1024px) {
  button {
    font-size: 2.8rem;
    height: 60px;
    width: 240px;
  }

  img{
    width: 40%;
  }

  p,
  a,
  li {
    font-size: 1.8rem;
  }

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

  .main-section {
    gap: 0;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;

    .info-left-side {
        gap: 2.2rem;
        order: 1;
      h1 {
        font-size: 9.2rem;
      }
      p {
        font-size: 2.8rem;
      }
      .info-buttons {
        gap: 2.2rem;
      }
    }
  }
  .custom-shape-divider-bottom-1745089715 svg {
    height: 100px;
}
}

@media (width<=768px){
    p,
    a,
    li {
      font-size: 1.6rem;
    }
    .header-section {
        flex-direction: column;
        .links {
            ul {
               margin: 0 0 1.2rem 0; 
            }
        }
    }
      img{
        width: 50%;
      }
    
      .header-section {
        .logo {
          a {
            font-size: 5rem;
          }
        }
        .links {
          ul {
            gap: 1rem;
          }
        }
      }
      .custom-shape-divider-bottom-1745089715 svg {
        height: 90px;
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
    button {
        font-size: 2.4rem;
        height: 40px;
        width: 190px;
      }
      .main-section {
        .info-left-side {
          h1 {
            font-size: 7.2rem;
          }
          p {
            font-size: 2.4rem;
          }
          .info-buttons {
            gap: 1rem;
          }
        }
      }
}


`;
