import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Main Body of Page */}
      <main>
        <section className="off-white-bg about-size">
          <div className="container raleway-font p-5">
            <div className="row">
              <div className="col-md-4 pb-5">
                <Image className="image-border-radius" src="/togetherAbout.png" alt="Rick and Jada standing together" width={350} height={500} />
              </div>
              <div className="col-md-8">
                <h2 className="bold-font orange-text align-center pb-3">About Nederlees</h2>
                <p className="dark-gray-text ps-5 pb-4">NederLees is a project started by two language-loving friends. Jada and Rick met online while in university and quickly became friends through
                their shared passion for language learning. Jada became a software engineer, and Rick became a linguist/language teacher with an interest in writing.
                Combining their skills and interests made perfect sense, and NederLees was born. </p>
                <p className="dark-gray-text ps-5">NederLees aims to improve Dutch learners' reading, vocabulary, and grammar understanding through interesting and easy-to-understand short stories
                from A0 (absolute beginner) to B1 (lower intermediate) level. Whether you are studying for the Dutch citizenship exams (Staatsexamen NT2), work, or fun,
                NederLees can help you reach your Dutch learning goals through comprehensible input and extensive vocabulary lists.</p>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-6 pe-5">
                <h2 className="bold-font dark-green-text align-center pb-3">About Rick</h2>
                <p className="dark-gray-text">
                  Rick is the writer of all stories and vocabulary lists. He holds a bachelor's degree in Japanese, and a master's in Linguistics. He speaks four
                  languages fluently, and a few more at beginner to intermediate levels. This language learning experience plus his experience as a language teacher
                  gives him a solid understanding of foreign language acquisition and which methods work best. In his free time, he enjoys reading, travel, cooking,
                  and staring at his pet gecko.
                </p>
              </div>
              <div className="col-md-6 ps-5">
                <h2 className="bold-font dark-green-text align-center pb-3">About Jada</h2>
                <p className="dark-gray-text">
                  Jada is the website designer and developer. She holds a bachelor's and master’s degree in Computer Science. Language learning has been one of her
                  passions since high school. She’s currently studying Mandarin Chinese and loves engaging in Chinese culture through graded readers and easy native
                  novels. She’s read hundreds of pages of Mandarin graded readers. In her free time, she enjoys playing Pokemon Go, crafting, and spending time with
                  her dog and husband.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}