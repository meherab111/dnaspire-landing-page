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
  scroll-behavior: smooth;
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
  background-color: ${({ theme }) => theme.colors.btnColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  border: none;
  border-radius: 100rem;
  -webkit-border-radius: 100rem;
  -moz-border-radius: 100rem;
  -ms-border-radius: 100rem;
  -o-border-radius: 100rem;
  height: 80px;
  width: 310px;
  box-shadow: ${({ theme }) => theme.boxShadow.boxShadow};
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

}

@media (width<=768px){
    p,
    a,
    li {
      font-size: 1.6rem;
    }
      img{
        width: 50%;
      }

}

@media (width<=540px){

    button {
        font-size: 2.4rem;
        height: 40px;
        width: 190px;
      }

}


`;
