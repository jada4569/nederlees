import Image from "next/image";

export default function Home() {
  return (
    <div>
      <body>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
          <div className="container-fluid">
            <a>
              <Image src="logo.svg" alt="Logo" width={75} height={75} />
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
      </body>
    </div>
  );
}
