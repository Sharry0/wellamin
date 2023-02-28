import css from "../styles/news.module.css";
import Footer from "../comps/Footer";

export default function News() {

  const news = [
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "./news/newsOutlets/outlet_2.png",
      headline: "New vitamin pill from Wellamin could revolutionize daily nutrition",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "./news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill shows promising results in clinical trials",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Horizon Times",
      newsOutletImg: "./news/newsOutlets/outlet_2.png",
      headline: "The new vitamin pill from Wellamin receives FDA approval",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "./news/newsOutlets/outlet_3.png",
      headline: "Wellamin's vitamin pill offers affordable and convenient daily nutrition solution",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "./news/newsOutlets/outlet_1.png",
      headline: "Experts praise Wellamin's vitamin pill as a game-changer in the health supplement industry",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Sunrise Journal",
      newsOutletImg: "./news/newsOutlets/outlet_1.png",
      headline: "Wellamin's vitamin pill contains innovative blend of nutrients for optimal health",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "./news/newsOutlets/outlet_3.png",
      headline: "The new vitamin pill from Wellamin receives rave reviews from customers",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "./news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill recognized as a top-performing health supplement in the market",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Brighter Press",
      newsOutletImg: "./news/newsOutlets/outlet_3.png",
      headline: "New study confirms efficacy of Wellamin's vitamin pill in promoting overall wellness",
      img: "",
      date: "",
    },
    {
      newsOutlet: "Global Daily Times ",
      newsOutletImg: "./news/newsOutlets/outlet_4.png",
      headline: "Wellamin's vitamin pill offers vegan and gluten-free option for health-conscious consumers",
      img: "",
      date: "",
    },
  ]

  return (
    <div className={css.news} >
      <section className={css.landing}>
        <h1>News</h1>
      </section>
      <section>
        {}
      </section>
      <Footer />
    </div>
  )
}
