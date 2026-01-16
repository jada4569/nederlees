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
                  <span className="orange-text"> Dutch </span>
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

        {/* Sample Readers List Section*/}
        <section className="raleway-font off-white-background">
          <div className="container py-5 text-align-center">
            <h2 className="inter-font py-3 orange-text bold-font align-center" >From Absolute Beginner to Intermediate</h2>
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-12 p-3">
                <div className="card">
                  <Image src="/kingsday.jpg" className="card-img-top" alt="Dutch people celebrating King's Day" width="200" height="150" />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">A0 Level Story: King's Day</h5>
                    <p className="card-text dark-gray-text">A story about how Dutch people celebrate King's Day, the king's birthday</p>
                    <a href="#" className="btn green-button">Read Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 p-3">
                <div className="card">
                  <Image src="/new-license.jpeg" className="card-img-top" alt="Car keys on a license" width="200" height="150" />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">A1 Level Story: A New Driver's License</h5>
                    <p className="card-text dark-gray-text">A story about a young man renewing his driver's license in the Netherlands</p>
                    <a href="#" className="btn green-button">Read Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 p-3">
                <div className="card">
                  <Image src="/amissedflight.jpg" className="card-img-top" alt="An airport" width="200" height="150" />
                  <div className="card-body">
                    <h5 className="card-title  dark-green-text bold-font" >A2 Level Story: A Missed Flight</h5>
                    <p className="card-text dark-gray-text">A story about a family missing their flight and trying to find a solution</p>
                    <a href="#" className="btn green-button">Read Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 p-3">
                <div className="card">
                  <Image src="/bokkenrijders.jpg" className="card-img-top" alt="Picture of the bokkenrijders from Dutch folklore" width="200" height="150" />
                  <div className="card-body">
                    <h5 className="card-title dark-green-text bold-font">B1 Level Story: The Buckriders</h5>
                    <p className="card-text dark-gray-text">A story about the buckriders, a famous band of robbers from Dutch folklore</p>
                    <a href="#" className="btn green-button">Read Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center">
              <button type="button" className="btn link-text">What do these levels mean?</button>
            </div>


          </div>
        </section>


      </main>
    </div>
  );
}
