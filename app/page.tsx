'use client';

import Image from "next/image";
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

export default function Home() {

  const [open, setOpen] = useState(false);

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
                <Image className="image-border-radius" src="/amsterdam-canal.jpg" alt="Amsterdam canal" width="475" height="325" />
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
              <Button onClick={() => setOpen(!open)} aria-controls="cefr-levels" aria-expanded={open} 
              className="cefr-toggle-btn large-text-size">
                What do these levels mean?
              </Button>
              <div className="cefr-parent">
                <Collapse in={open} className="cefr-collapse">
                  <div id="cefr-levels">
                    <h2 className="dark-green-text bold-font">
                      CEFR leveling System
                    </h2>
                    <p className="dark-gray-text py-3">
                      NederLees uses the Common European Framework of Reference for Languages (CEFR), which describes how well someone can 
                      understand and use a language. This framework has six levels: A1, A2, B1, B2, C1, and C2. The readers on this site 
                      will be mainly aimed towards students between A0 and B1 level, with a few stories beyond B1.
                    </p>
                    <div className="cefr-span">
                      <div className="row align-items-center mb-4">
                        <div className="col-2">
                          <div className="circle-span">
                            A0
                          </div>
                        </div>
                        <div className="col-10 align-left">
                          <p className="dark-green-text bold-font">
                            Complete Beginner
                          </p>
                          <p className="dark-gray-text">
                            At this level, you’re just starting out. You may know a few individual words or phrases like “hello” or “thank you,” 
                            but you can’t really use the language yet. A0 is not an official CEFR level, but it is often used to describe absolute 
                            beginners. If you are new to Dutch, start here!
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center mb-4">
                        <div className="col-2">
                          <div className="circle-span">
                            A1
                          </div>
                        </div>
                        <div className="col-10 align-left">
                          <p className="dark-green-text bold-font">
                            Beginner
                          </p>
                          <p className="dark-gray-text">
                            You can understand and use very simple sentences. You can introduce yourself, ask and answer basic questions (like 
                            "Where do you live?" or "Do you have brothers or sisters?"), and interact in a very limited way if the other person 
                            speaks slowly. Students at A1 level know ~1000 words. 
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center mb-4">
                        <div className="col-2">
                          <div className="circle-span">
                            A2
                          </div>
                        </div>
                        <div className="col-10 align-left">
                          <p className="dark-green-text bold-font">
                            Elementary
                          </p>
                          <p className="dark-gray-text">
                            You can handle simple everyday situations, like ordering food, giving directions, or talking about your job, family, 
                            or hobbies. You can understand common phrases and basic written texts. Students at A2 level know ~2500 words. 
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center mb-4">
                        <div className="col-2">
                          <div className="circle-span">
                            B1
                          </div>
                        </div>
                        <div className="col-10 align-left">
                          <p className="dark-green-text bold-font">
                            Lower Intermediate
                          </p>
                          <p className="dark-gray-text">
                            You’re able to speak and understand more freely in everyday situations. You can describe events and understand the 
                            main points of spoken or written texts. If you have only used apps, we recommend that you start with our A1 or A2 level 
                            readers. Students at B1 level know ~5000 words. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="dark-gray-text py-3">
                        You can find out more information about the CEFR leveling system 
                        <a href="https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bc7b" className="link-text"> here</a>.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </section>

        {/* Readers For Everyone Section*/}
        <section className="pb-5 large-text-size">
          <div className="container align-center">
            <h2 className="inter-font py-3 dark-green-text bold-font align-center" >Readers For Everyone</h2>
            <p className="dark-gray-text readers-width raleway-font py-3">
              From romance, science fiction, and horror to Dutch folklore and culture, there are plenty of stories to enjoy and take your 
              Dutch comprehension to the next level. 
            </p>
          </div>
        </section>

        {/* Why Use Graded Readers Section*/}
        <section className="pb-5 large-text-size">
          <div className="container raleway-font p-3 align-center">
            <div className="row align-items-center mb-4">
              <div className="col-md-7">
                <h2 className="inter-font bold-font dark-green-text pb-3">Why Use Graded Readers?</h2>
                <div className="row align-items-center mb-4">
                  <div className="col-2">
                    <div className="circle-span">
                      1
                    </div>
                  </div>
                  <div className="col-10 align-left">
                    <p className="dark-gray-text bold-font">
                      Learn words in context
                    </p>
                    <p className="dark-gray-text">
                      Understand how vocabulary is used in conte
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-2">
                    <div className="circle-span">
                      1
                    </div>
                  </div>
                  <div className="col-10 align-left">
                    <p className="dark-gray-text bold-font">
                      Immersive Grammar
                    </p>
                    <p className="dark-gray-text">
                      Start recognizing and understanding grammar naturally
                    </p>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-2">
                    <div className="circle-span">
                      1
                    </div>
                  </div>
                  <div className="col-10 align-left">
                    <p className="dark-gray-text bold-font">
                      Start thinking in Dutch
                    </p>
                    <p className="dark-gray-text">
                      As you get more used to reading in Dutch, your need to translate in your head will decrease
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <Image className="image-border-radius" src="/holding-book.jpg" alt="Hands holding a book" width={400} height={400} />
              </div>
            </div>
            <p className="dark-gray-text pt-2">
            Learn more about the science behind graded readers
            <a href="https://www.researchgate.net/publication/317816087_The_Benefits_of_Graded_Reading" className="link-text"> here</a>.
          </p>
          </div>
        </section>
      </main>
    </div>
  );
}
