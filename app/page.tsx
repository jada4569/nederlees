import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <a className="name-home">
            <Image src="logo.svg" alt="Logo" width={50} height={50} />
            NederLees
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link" >Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >Readers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >Contact</a>
                  </li>
                </ul>
            </div>
        </div>
      </nav>

      {/* Main Body of Page */}
      <main>

      </main>
    </div>
  );
}
