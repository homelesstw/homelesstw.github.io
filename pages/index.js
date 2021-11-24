import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import bgImg01 from "../public/img/bg-img-1.png";
import bgImg02 from "../public/img/bg-img-2.png";
import bgImg03 from "../public/img/bg-img-3.png";
import bgImg04 from "../public/img/bg-img-4.png";
import bgImg05 from "../public/img/bg-img-5.png";
import bgImg06 from "../public/img/bg-img-6.png";
import bgImg07 from "../public/img/bg-img-7.png";

gsap.registerPlugin(ScrollTrigger);

const bgs = [bgImg01, bgImg02, bgImg03, bgImg04, bgImg05, bgImg06, bgImg07];

const DotDiv = styled.div({
  mask: (props) =>
    props.url ? `url(${props.url}) no-repeat center center` : "",
  maskSize: "contain",
});

export default function Home() {
  const rootRef = React.useCallback((node) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: node,
        start: "top 1px",
        end: "bottom 100%",
        scrub: true,
      },
    });

    // timeline: background
    bgs.forEach((el, index) => {
      if (index !== 0) {
        tl.set(`#bg-${index}`, { autoAlpha: 0 }, 0);
      }

      tl.to(
        `#bg-${index}`,
        {
          autoAlpha: 1,
          duration: 0.1,
        },
        index - 0.5
      );

      if (index !== bgs.length - 1) {
        tl.to(
          `#bg-${index}`,
          {
            autoAlpha: 0,
            duration: 0.1,
          },
          index + 0.5
        );
      }
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC&display=swap"
          rel="stylesheet"
        />
        <title>無家十年</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        ref={rootRef}
        className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-red-50"
      >
        {/* 背景 */}
        <div className="bg-div z-0">
          {bgs.map((el, index) => (
            <div key={`bg-${index}`} id={`bg-${index}`} className="bg">
              <Image
                layout="fill"
                objectFit="cover"
                src={el}
                alt="Picture of the author"
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          ))}
        </div>

        {/* 遮罩 */}
        <div className="dot-div z-1">
          {bgs.map((el, index) => (
            <DotDiv
              key={`mask-${index}`}
              className="dot"
              url={index !== 1 ? `/img/bg-mask-${index + 1}.svg` : ``}
            />
          ))}
        </div>

        {/* 文字區 */}
        <main className="relative z-40 inset-0 w-full min-h-screen">
          {/* 首段封面 */}

          <section className="section grid grid-cols-3 px-3 md:px-8">
            <div className="hidden md:block md:col-span-2"></div>
            <div className="col-span-3 md:col-span-1 flex flex-col min-h-screen">
              <div className="flex-grow flex flex-col items-start md:items-end justify-start md:justify-center">
                <p className="my-3 bg-white font-bold  px-6 py-4 text-6xl">
                  無家十年
                </p>
                <p className="font-serif px-6 py-4 text-2xl bg-white">
                  人球、傷病、露宿，與夾縫中的照顧網
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-lg bg-white px-6 py-4">
                  芒草心 10 週年 x 臺灣無家流浪 10 年回顧
                </p>
              </div>
            </div>
          </section>

          {/* 導言 */}
          <section className="section flex flex-col px-3 md:px-8 items-center justify-center ">
            <div className=" max-w-screen-sm bg-white px-6 py-4 my-3">
              <p className="my-3 leading-normal">
                2011 年，是臺灣無家服務領域風起雲湧的開端。10
                年來，僅管公部門法令文書依舊以「遊民」相稱，但民間團體早已跟隨國際腳步，從早年的「流浪漢」、「遊民」，到近年提倡街頭友善的「街友」一詞，一路拓寬倡議邊界，看見更多蝸居在違法爛房、寄宿營業場所、常態性依親的「無家者」。
              </p>
              <p className="my-3 leading-normal">
                2021年，芒草心與多多益善合作【無家十年】，回首
                2011-2021，從關鍵人物到重大事件，從庇護中心、中繼住宅到多元居住，從街頭的瘋人、女性到社工，從有房的街友到無根的租客。
              </p>
            </div>
          </section>

          {/* 第一篇 */}

          <section className="section p-3 md:p-8 flex flex-col">
            <div className="w-100 grid grid-cols-3 flex-grow">
              <div className="col-span-3 lg:col-span-1 flex flex-col">
                <div className="flex flex-col items-start justify-center">
                  <p className="bg-white my-2 px-4 py-3 text-lg">
                    無家十年 2011-2014
                  </p>
                  <p className="font-bold my-2 px-4 py-3 text-2xl bg-white">
                    誰的市容，誰的家？
                  </p>
                  <button className=" my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    閱讀專題文章
                  </button>
                </div>
              </div>
              <div className="hidden md:block col-span-2"></div>
            </div>

            <div className="w-100 grid grid-cols-3 ">
              <div className="hidden md:block col-span-2"></div>
              <div className="col-span-3 md:col-span-1 flex flex-col items-end justify-center">
                <div className="h-auto my-4 p-8 bg-white ">
                  <p className="font-bold text-lg text-right">
                    如果城市是所有人的城市
                    <br />
                    「市容」當然也應該包括「所有人」
                  </p>
                  <div className="text-sm mt-4">
                    <p className="my-3 leading-normal">
                      2011年，以收容安置為名的街頭「強制驅離」走入歷史，法令的轉向與北臺灣民間力量快速竄升，使得無數流浪的生命跟著轉向，奪回就地安身的尊嚴與權利。
                    </p>
                    <p className="my-3 leading-normal">
                      人被好好的留下，反而因此改變了街頭的樣貌。「遊民」從原本遭排擠的特定「族群」，逐漸被視為無家之人在跨階層、跨縣市間流動的一種「狀態」，汙名開始緩慢剝落……
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 grid grid-cols-1 lg:grid-cols-2 ">
              <div />
              <div className="flex flex-col items-end justify-center">
                <p className="h-auto my-4 p-6 text-lg md:text-2xl bg-white text-right font-serif leading-relaxed">
                  「大家都想把人趕走，卻沒人回答得出他們能去哪？」
                  <br />
                  「如果街頭已經飽和，收容中心為什麼總是住不滿？」
                  <br />
                  「就地安身究竟是失敗的安置，還是成功的輔導？」
                  <br />
                </p>
              </div>
            </div>
          </section>

          {/* 第二篇 */}

          <section className="section p-3 md:p-8 flex flex-col">
            <div className="w-100 grid grid-cols-3 flex-grow ">
              <div className="hidden md:block col-span-2"></div>
              <div className="col-span-3 lg:col-span-1 flex flex-col">
                <div className="flex flex-col items-end justify-center">
                  <p className="bg-white  my-2 px-4 py-3  text-lg">
                    無家十年 2015-2018
                  </p>
                  <p className="font-bold h-16 my-2 px-4 py-3  text-2xl bg-white">
                    街頭的瘋人，與想像中的遊民
                  </p>
                  <button className="my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    閱讀專題文章
                  </button>
                </div>
              </div>
            </div>

            <div className="w-100 grid grid-cols-3 ">
              <div className="col-span-3 md:col-span-1 flex flex-col  items-end justify-center">
                <div className="h-auto my-4 p-8 bg-white">
                  <p className="font-bold text-lg">
                    無家者的面貌開始轉變
                    <br />
                    早就不符合過去的刻板印象
                  </p>
                  <div className="text-sm mt-4">
                    <p className="my-3 leading-normal">
                      2015
                      年，新任臺北市長柯文哲大動作整頓街友業務、芒草心剛剛開展 3
                      個住宿式據點，「人生百味」、「夢想城鄉」、「慕哲人社」等團體延續太陽花運動的野火，陸續誕生。
                    </p>
                    <p className="my-3 leading-normal">
                      民間力量的堀起，讓萬華原本的網絡日漸深化。然而，也是在這一年，投身街友服務
                      12
                      年的社工張獻忠心灰意冷求去。無巧不巧，隔壁的新北市也風聲鶴唳……
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block col-span-2"></div>
            </div>
            <div className="w-100 grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex flex-col items-start justify-center">
                <p className="h-auto my-4 p-6 text-lg md:text-2xl bg-white font-serif leading-relaxed">
                  「每年花 500、600 萬的醫療費在街友身上，值得嗎？」
                  <br />
                  「很多街友都想工作，但他們能做什麼？」
                  <br />
                  「精障女性的比例為什麼高達 6 成？街頭的瘋人何去何從？」
                  <br />
                </p>
              </div>
              <div />
            </div>
          </section>

          {/* 第三篇 */}

          <section className="section p-3 md:p-8 flex flex-col">
            <div className="w-100 grid grid-cols-3 flex-grow">
              <div className="col-span-3 lg:col-span-1 flex flex-col">
                <div className="flex flex-col items-start justify-center">
                  <p className="bg-white  my-2 px-4 py-3  text-lg">
                    無家十年 2019-2021
                  </p>
                  <p className="font-bold h-16  my-2 px-4 py-3  text-2xl bg-white">
                    有房的街友，與無根的租客
                  </p>
                  <button className="my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    閱讀專題文章
                  </button>
                </div>
              </div>
              <div className="hidden md:block col-span-2"></div>
            </div>
            <div className="w-100 grid grid-cols-12 items-end">
              <div className="col-span-12 md:col-span-5 h-auto my-4 p-8 bg-white">
                <p className="font-bold text-lg">
                  就算租到了房子
                  <br />
                  人也不一定能好好生活
                </p>
                <div className="text-sm mt-4">
                  <p className="my-3 leading-normal">
                    無家之人，並不是有地方住就得到萬靈丹。人際斷裂、精神失序、大小便失襟、室友間衝突……以前在街頭，也不用煩惱瓦斯、水電、管線等生活挑戰。
                  </p>
                  <p className="my-3 leading-normal">
                    居住很難，更難的是穩定。社工的角色一抽掉，總是前功盡棄，友善的房東也越來越少。如果說人們常對遊民存在刻板印象，那我們對所謂「自立」的樣貌，是否也帶著過時的想像？
                  </p>
                </div>
              </div>
              <div />
              <div className="col-span-12 md:col-span-6 flex flex-col items-end justify-center">
                <p className="h-auto my-4 p-6 text-2xl bg-white  font-serif leading-relaxed">
                  「長期蝸居在違法爛房裡的人，是租客還是無家者？」
                  <br />
                  「媒合拉近房東和街友的人 叫做社工，一個社工能拉幾戶？」
                  <br />
                  「為什麼這些人都租到房子了，還需要社工去關心？」
                  <br />
                </p>
              </div>
            </div>
          </section>

          {/* 第四篇 */}

          <section className="section p-3 md:p-8 flex flex-col">
            <div className="w-100 grid grid-cols-3   flex-grow">
              <div className="hidden md:block col-span-2"></div>
              <div className="col-span-3 lg:col-span-1 flex flex-col">
                <div className="flex flex-col items-end justify-center">
                  <p className="bg-white  my-2 px-4 py-3  text-lg">
                    無家十年 2021-
                  </p>
                  <p className="font-bold my-2 px-4 py-3  text-2xl bg-white">
                    官僚中的老弱人球，與夾縫中的照顧網
                  </p>
                  <button className="my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    閱讀專題文章
                  </button>
                </div>
              </div>
            </div>
            <div className="w-100 grid grid-cols-12 items-end">
              <div className="col-span-12 md:col-span-6 flex flex-col items-start justify-center">
                <p className="h-auto my-4 p-6 text-2xl bg-white  font-serif leading-relaxed">
                  「其他社工無計可施的全轉到我手上，我又還能做什麼？」
                  <br />
                  「欠房租的老人家跑去睡麥當勞，他到底是老福個案還是遊民？」
                  <br />
                  「機構住進去竟然出不來，一日遊民，終身遊民？」
                  <br />
                </p>
              </div>
              <div />
              <div className="col-span-12 md:col-span-5 h-auto my-4 p-8 bg-white">
                <p className="font-bold text-lg">
                  社福單位不應該變成遊民製造機
                </p>
                <div className="text-sm mt-4">
                  <p className="my-3 leading-normal">
                    10
                    年來，全臺無家服務持續進展，街頭的人數卻「從未減少」。今天消失了
                    100 個，明天又來了 100 個，城市永遠處在飽和狀態。{" "}
                  </p>
                  <p className="my-3 leading-normal">
                    源頭的水從未成功防堵，再加上被漏接的家暴受害者／失業勞工／精神障礙／中高齡老弱，以及各局處、各縣市、各中心的彼此消耗，接不住的人一再從夾縫中掉落，在系統間流浪，成了官僚中的人球。{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 第五篇 */}

          <section className="section p-3 md:p-8 flex flex-col">
            <div className="w-100 grid grid-cols-3 flex-grow">
              <div className="col-span-3 lg:col-span-1 flex flex-col">
                <div className="flex flex-col items-start justify-center">
                  <p className="bg-white my-2 px-4 py-3 text-lg">
                    無家十年－番外篇
                  </p>
                  <p className="font-bold bg-white  my-2 px-4 py-3  text-2xl ">
                    街頭的女性，與貧病交迫的廻圈／專訪撒瑪黎雅婦女關懷協會
                  </p>
                  <button className="my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    閱讀專題文章
                  </button>
                </div>
              </div>
              <div className="hidden md:block col-span-2"></div>
            </div>

            <div className="w-100 grid grid-cols-3 ">
              <div className="hidden md:block col-span-2"></div>
              <div className="col-span-3 md:col-span-1 flex flex-col items-end justify-center">
                <div className="h-auto my-4 p-8 bg-white ">
                  <p className="font-bold text-lg text-right">
                    如果城市是所有人的城市
                    <br />
                    「市容」當然也應該包括「所有人」
                  </p>
                  <div className="text-sm mt-4">
                    <p className="my-3 leading-normal">
                      長達 17
                      年，撒瑪黎雅都是全臺唯一的女性街友安置中心，每年來來去去大約
                      30 人，其中有高達 7、8 成都有精神議題。
                    </p>
                    <p className="my-3 leading-normal">
                      直到 2015
                      年，撒瑪黎雅才在四處尋覓辛苦募款後，買下自己的安置據點，不用再被房東趕來趕去。「我們照顧流浪的人，但我們自己都在流浪。」新的據點悄悄在社區巷弄裡開了不顯眼的門，招牌也不敢掛得太張揚，就怕成為嫌惡設施。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 grid grid-cols-1 md:grid-cols-2 ">
              <div />
              <div className="flex flex-col items-end justify-center">
                <p className="h-auto my-4 p-6 text-lg md:text-2xl bg-white text-right font-serif leading-relaxed">
                  「精神障礙雖然常是人掉落街頭的原因，但也更可能是結果。」
                  <br />
                  「惡劣的生存環境和叢林法則，常以最快的速度毀人心智。」
                  <br />
                  「特別對女性來說，在流浪剛開始即早介入，是非常關鍵的事。」
                  <br />
                </p>
              </div>
            </div>
          </section>

          {/* 最終資訊 */}

          <footer className="flex flex-col items-center bg-white p-3 md:p-6 my-3">
            <div className=" max-w-screen-sm p-6 my-3">
              <h3 className="my-3 bg-white font-bold text-3xl leading-normal">
                回首，是為了定錨下一個 10 年
              </h3>

              <p className="my-3 leading-normal">
                這也是為什麼，我們再次為它投入心血。去年初，Right Plus
                多多益善推出了專題「【制度傷人】臺灣限定的生存遊戲，誰破得了關？」探究臺灣底層貧窮者如何受困於我國獨有的制度困局，永無翻身之日。今年，多多與芒草心合作【無家十年】，回首
                2011-2021，從關鍵人物到重大事件，從庇護中心、中繼住宅到多元居住，從街頭的瘋人、女性到社工，從有房的街友到無根的租客。
              </p>
              <p className="my-3 leading-normal">
                回首是為了謹記，我們曾經做對了什麼，讓街頭有了巨大的轉變，讓氛圍變得友善，讓討論的空間得以撐開，多元彈性的服務百花齊放，實務經驗能夠累積交流。回首也是為了釐清，為什麼即使如此，街頭的人卻從未減少，且出了臺北市，天地如何截然不同。
              </p>
              <p className="my-3 leading-normal">
                更重要的是，下一個 10
                年，我們如何能夠面對貧窮與無家，不再束手無策。{" "}
              </p>
              <p className="my-3 leading-normal">
                11 月 23 日開始，在耗時 4 個月、爬梳 13 份研究論文、訪問 21
                位公部門與民間資深工作者、橫跨 5 個縣市與 12
                個組織／單位後，跟著我們一起坐上時光機、走訪北中南突破臺北視角，與你一起看見臺灣底層貧窮者的掙扎、夾縫中的善意與照顧網。
              </p>
              <p className="my-6 leading-normal">
                <b>採訪撰稿</b>／葉靜倫 <br />
                <b>策題製作</b>／Right Plus 多多益善
                <br />
                <b>專題支持</b>／芒草心慈善協會、卓越新聞獎基金會
                <br />
                <b>研究支援</b>/芒草心慈善協會、李佳庭、廖冠樺、曾文勤
                <br />
                <b>視覺設計</b>／張文韋
                <br />
                <b>網頁設計</b>／劉彥岑
                <br />
              </p>
            </div>
          </footer>
        </main>

        {/* 網點 */}
        {/* <main className="fixed z-10  inset-0 w-full min-h-screen test"></main> */}
      </div>
    </>
  );
}
