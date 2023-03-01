import css from "../styles/news.module.css";
import Image from "next/image";
import Footer from "../comps/Footer";

export default function News() {

  const news = [
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "/news/newsOutlets/outlet_2.png",
      headline: "New vitamin pill from Wellamin could revolutionize daily nutrition",
      img: "/news/article/article_1.jpg",
      date: "November 25, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill shows promising results in clinical trials",
      img: "/news/article/article_2.jpg",
      date: "November 08, 2022",
    },
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "/news/newsOutlets/outlet_2.png",
      headline: "The new vitamin pill from Wellamin receives FDA approval",
      img: "/news/article/article_3.jpg",
      date: "October 18, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "Wellamin's vitamin pill offers affordable and convenient daily nutrition solution",
      img: "/news/article/article_4.jpg",
      date: "September 30, 2022",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "/news/newsOutlets/outlet_1.png",
      headline: "Experts praise Wellamin's vitamin pill as a game-changer in the health supplement industry",
      img: "/news/article/article_5.jpg",
      date: "September 23, 2022",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "/news/newsOutlets/outlet_1.png",
      headline: "Wellamin's vitamin pill contains innovative blend of nutrients for optimal health",
      img: "/news/article/article_6.jpg",
      date: "September 12, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "The new vitamin pill from Wellamin receives rave reviews from customers",
      img: "/news/article/article_7.jpg",
      date: "August 15, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill recognized as a top-performing health supplement in the market",
      img: "/news/article/article_8.jpg",
      date: "August 08, 2022",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "/news/newsOutlets/outlet_3.png",
      headline: "New study confirms efficacy of Wellamin's vitamin pill in promoting overall wellness",
      img: "/news/article/article_9.jpg",
      date: "July 23, 2022",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "/news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill offers vegan and gluten-free option for health-conscious consumers",
      img: "/news/article/article_10.jpg",
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
                  <Image src={article.newsOutletImg} width={40} height={40} alt={`Logo of ${article.newsOutlet}`} />
                  {article.newsOutlet}
                </div>
                <div className={css.articleBody}>
                  <div className={css.articleImg} >
                    <Image src={article.img} fill sizes="100%" style={{ objectFit: "cover" }} alt={`${article.newsOutlet} article image`} priority={i < 4 ? true : false} />
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
