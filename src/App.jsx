export const App = () => {
  return (
    <>
      <header>
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
      </header>

      <main>
        <section>
          <div className="container main-section grid grid-two-column">
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
      </main>
    </>
  );
};
