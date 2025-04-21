import styled from "styled-components";

export const MainStyle = styled.main`

.main-section {
    gap: 10rem;
  
    .info-left-side {
      gap: 10rem;
      h1 {
        font-size: 12.4rem;
        font-weight: 100;
        color: var(--primary-color);
      }
      p {
        font-size: 4rem;
        text-transform: none;
        color: var(--black-color);
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
    fill: var(--secondary-color);
  }
`