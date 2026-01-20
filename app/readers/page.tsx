import Image from "next/image";

export default function Readers() {
  return (
    <div>
      {/* Main Body of Page */}
      <main>
        <div className="container raleway-font off-white-bg py-5">
          <div className="align-center">
            <Image className="image-border-radius img-fluid" src="/books.jpg" alt="Stack of books" width={350} height={350} />
          </div>
          <h2 className="bold-font orange-text align-center py-3">All Our Readers</h2>
          <p className="dark-gray-text align-center mb-4">
            Browse graded readers by CEFR level.
          </p>
          <div className="row justify-content-center g-2 mb-4">
            {['A0', 'A1', 'A2', 'B1'].map(level => (
              <div className="col-6 col-md-3" key={level}>
                <a
                  href={`#${level}`}
                  className="reader-button w-100 py-2 text-center d-block"
                >
                  {level}
                </a>
              </div>
            ))}
          </div>

          {/* A0 List */}
          <div className="reader-section" id="A0">
            <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A0 Readers</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100">
                  <Image src="/kingsday.jpg" className="card-img-top" alt="Dutch people celebrating King's Day" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">
                      King's Day
                    </h5>
                    <p className="card-text dark-gray-text">
                      A short story about how Dutch people celebrate King's Day.
                    </p>
                    <a href="#" className="btn green-button w-100">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A1 List */}
          <div className="reader-section" id="A1">
            <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A1 Readers</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100">
                  <Image src="/kingsday.jpg" className="card-img-top" alt="Dutch people celebrating King's Day" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">
                      King's Day
                    </h5>
                    <p className="card-text dark-gray-text">
                      A short story about how Dutch people celebrate King's Day.
                    </p>
                    <a href="#" className="btn green-button w-100">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A2 List */}
          <div className="reader-section" id="A2">
            <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A2 Readers</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100">
                  <Image src="/kingsday.jpg" className="card-img-top" alt="Dutch people celebrating King's Day" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">
                      King's Day
                    </h5>
                    <p className="card-text dark-gray-text">
                      A short story about how Dutch people celebrate King's Day.
                    </p>
                    <a href="#" className="btn green-button w-100">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B1 List */}
          <div className="reader-section" id="B1">
            <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level B1 Readers</h4>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100">
                  <Image src="/kingsday.jpg" className="card-img-top" alt="Dutch people celebrating King's Day" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">
                      King's Day
                    </h5>
                    <p className="card-text dark-gray-text">
                      A short story about how Dutch people celebrate King's Day.
                    </p>
                    <a href="#" className="btn green-button w-100">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}