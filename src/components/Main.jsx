import styled from "styled-components"

const MainStyle = styled.main`
    
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

 
/** Media Query */

/* 1536px, 1280px, 1024px, 768px, 540px */

@media (width<=1280px) {
  .custom-shape-divider-bottom-1745089715 svg {
    height: 114px;
}
}

@media (width<=1024px) {
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
      .custom-shape-divider-bottom-1745089715 svg {
        height: 90px;
    }
}

@media (width<=540px){
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

`


export const Main = () => {
    return(
<MainStyle>
<section className="container main-section grid grid-two-column">
 
  <div className="info-left-side flex flex-column">
    <div className="info-text">
      <h1 className="discover-text">Discover</h1>
      <p>
        personalized health insights, ancestry breakdowns, and genetic
        traits—all from a simple saliva test.
      </p>
    </div>
    <div className="info-buttons flex">
      <button>order now</button>
      <button>see how it works</button>
    </div>
  </div>
  <div className="info-right-side">
    <img src="./public/images/right-image.svg" alt="image" />
  </div>
  
</section>
<div class="custom-shape-divider-bottom-1745089715">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
      class="shape-fill"
    ></path>
  </svg>
</div>
</MainStyle>
)
}