import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Main Body of Page */}
      <main>
        {/* Hero Section */}
        <section className="py-3 raleway-font light-green-bg">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="badge p-3 written-by-badge" >Written by a Dutch Linguist</span>
                <h1 className="display-4 fw-bold my-4 dark-green-text" >
                  Level up your
                  <span className="orange-color"> Dutch </span>
                  language skills through reading
                </h1>
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-lg orange-button" >Get Started</button>
                </div>
              </div>
              <div className="col-lg-5 canal-img">
                <Image src="/amsterdam-canal.jpg" alt="Amsterdam canal" width="450" height="300" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
