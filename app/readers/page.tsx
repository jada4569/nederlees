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
          <div className="row align-center">
            <div className="col-3">
              <button className="reader-button off-white-bg link-color bold-font">A0</button>
            </div>
            <div className="col-3">
              <button className="reader-button off-white-bg link-color bold-font">A1</button>
            </div>
            <div className="col-3">
              <button className="reader-button off-white-bg link-color bold-font">A2</button>
            </div>
            <div className="col-3">
              <button className="reader-button off-white-bg link-color bold-font">B1</button>
            </div>
          </div>
          <h4 className="dark-green-text bold-font pt-5">Level A0 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-5">Level A1 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-5">Level A2 Readers</h4>
          <p>Story List Placeholder</p>
          <h4 className="dark-green-text bold-font pt-5">Level B1 Readers</h4>
          <p>Story List Placeholder</p>
        </div>
      </main>
    </div>
  );
}