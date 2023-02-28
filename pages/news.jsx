import css from "../styles/news.module.css";
import Image from "next/image";
import Footer from "../comps/Footer";

export default function News() {

  const news = [
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "/news/newsOutlets/outlet_2.png",
      headline: "New vitamin pill from Wellamin could revolutionize daily nutrition",
      img: "",
      date: "November 25, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill shows promising results in clinical trials",
      img: "",
      date: "November 08, 2022",
    },
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "/news/newsOutlets/outlet_2.png",
      headline: "The new vitamin pill from Wellamin receives FDA approval",
      img: "",
      date: "October 18, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "Wellamin's vitamin pill offers affordable and convenient daily nutrition solution",
      img: "",
      date: "September 30, 2022",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "/news/newsOutlets/outlet_1.png",
      headline: "Experts praise Wellamin's vitamin pill as a game-changer in the health supplement industry",
      img: "",
      date: "September 23, 2022",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "/news/newsOutlets/outlet_1.png",
      headline: "Wellamin's vitamin pill contains innovative blend of nutrients for optimal health",
      img: "",
      date: "September 12, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "The new vitamin pill from Wellamin receives rave reviews from customers",
      img: "",
      date: "August 15, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill recognized as a top-performing health supplement in the market",
      img: "",
      date: "August 08, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "New study confirms efficacy of Wellamin's vitamin pill in promoting overall wellness",
      img: "",
      date: "July 23, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill offers vegan and gluten-free option for health-conscious consumers",
      img: "",
      date: "July 17, 2022",
    },
  ]

  return (
    <div className={css.news} >
      <section className={css.landing}>
        <h1>News</h1>
      </section>
      <section>
        <div className={css.newsContainer} >
          {
            news.map((article, i) => (
              <div className={css.articleContainer} key={i} >
                <div className={css.articleHead}>
                  <Image src={article.newsOutletImg} width={40} height={40} />
                  {article.newsOutlet}
                </div>
                <div className={css.articleBody}>
                  <div className={css.articleImg} >
                    <Image src={"/news/news_bg2.jpg"} fill style={{ objectFit: "cover" }} />
                  </div>
                  <h3>{article.headline}</h3>
                </div>
                <div className={css.articleFoot}>
                  {`Published: ${article.date}`}
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}
