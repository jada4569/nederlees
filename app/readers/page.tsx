import Image from "next/image";

export default function Readers() {
  return (
    <div>
      {/* Main Body of Page */}
      <main>
        <div className="container raleway-font off-white-bg py-5">
          <div className="align-center">
            <Image className="image-border-radius" src="/books.jpg" alt="Stack of books" width={350} height={350} />
          </div>
          <h2 className="bold-font orange-text align-center py-3">All Our Readers</h2>
          <div className="row justify-content-center g-2 mb-4">
            {['A0', 'A1', 'A2', 'B1'].map(level => (
              <div className="col-6 col-md-3" key={level}>
                <button className="reader-button w-100 py-2">
                  {level}
                </button>
              </div>
            ))}
          </div>
          <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A0 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A1 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level A2 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">Level B1 Readers</h4>
          <p>Story List Placeholder</p>
        </div>
      </main>
    </div>
  );
}