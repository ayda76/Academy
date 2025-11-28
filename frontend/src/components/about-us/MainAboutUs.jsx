import { PiCheckFatDuotone } from "react-icons/pi";
import Footer from "../footer/Footer";

const MainAboutUs = () => {
  return (
    <>
      <div className="pt-8 container px-5 2xl:px-0">
        <h3 className="text-purple-800 text-lg font-semibold pb-4">
          درباره ما
        </h3>
        <section className="flex flex-col gap-3 xl:flex-row xl:gap-0 items-center xl:items-start justify-between">
          <div className="flex flex-col gap-5 text-sm xl:text-base text-secondary-700">
            <p className="leading-6">
              در دنیایی که تغییرات تکنولوژی، مدل‌های کاری و نیازهای بازار،
              سریع‌تر از نظام‌های آموزشی سنتی حرکت{" "}
            </p>
            <p>می‌کنند، بسیاری از افراد با پرسشی مواجه‌اند:</p>
            <p>چه چیزی واقعاً ما را برای کار، رشد و رقابت آماده می‌کند؟</p>
            <p>پاسخ ما در آکادمی است:</p>
            <p>
              ** آموزش واقعی؛ یعنی یادگیری مهارتی، کاربردی و مبتنی بر عمل **
            </p>
          </div>
          <img
            src="/assets/images/programming.svg"
            alt="آکادمی"
            width={64}
            height={64}
            className="w-[250px] h-[250px] md:w-[400px] md:h-[250px]"
          />
        </section>
        {/* ماموریت ما */}
        <section className="space-y-5 text-sm xl:text-base text-secondary-700">
          <h3 className="font-semibold text-lg text-purple-800 mt-5">
            🎯 مأموریت ما (Mission)
          </h3>
          <p>ما معتقدیم آموزش باید به توانمندی منجر شود.</p>
          <p className="leading-6">
            در آکادمی، مأموریت ما طراحی و اجرای دوره‌هایی‌ست که افراد را برای
            ورود مؤثر، مطمئن و حرفه‌ای به بازار کار آماده کند — نه صرفاً برای
            امتحان یا مدرک.
          </p>
          <p className="leading-6">
            ما با ارائه آموزش‌های حضوری، تعاملی، پروژه‌محور و پشتیبانی‌شده، تلاش
            می‌کنیم مسیر یادگیری را به **مسیر رشد شغلی** تبدیل کنیم.
          </p>
        </section>
        {/* چشم انداز */}
        <section className="space-y-5 text-sm xl:text-base text-secondary-700">
          <h3 className="font-semibold text-lg text-purple-800 mt-10">
            👁 چشم‌انداز ما (Vision)
          </h3>
          <p className="leading-6">
            تبدیل شدن به یکی از **مراجع تخصصی و تأثیرگذار آموزش مهارت‌محور در
            ایران** با تمرکز بر تربیت نیروی انسانی کارآزموده، مهارت‌محور، باهوش
            اجتماعی و آماده برای مشاغل نوظهور.
          </p>
          <p className="leading-6">
            ما چشم‌اندازی داریم که در آن، **آموزش عامل تغییر زندگی‌ست، نه صرفاً
            یک مرحله در آن.**
          </p>
        </section>
        {/*  ما اینجاییم، برای ساختن مسیر تو*/}
        <section className="space-y-5 text-sm xl:text-base text-secondary-700">
          <h3 className="font-semibold  text-lg text-purple-800 mt-10">
            ✨ ما اینجاییم، برای ساختن مسیر تو
          </h3>
          <p className="leading-6">
            آکادمی صرفاً یک برگزارکننده دوره نیست؛ ما یک **هم‌مسیر
            آموزشی-حرفه‌ای** برای کسانی هستیم که:
          </p>
          <ul className="space-y-3.5 text-secondary-500 font-medium">
            <li className="flex items-center gap-2">
              <PiCheckFatDuotone />
              می‌خواهند از صفر وارد یک شغل جدید شوند
            </li>
            <li className="flex items-center gap-2">
              <PiCheckFatDuotone />
              می‌خواهند مهارت خود را تقویت کنند
            </li>
            <li className="flex items-center gap-2">
              <PiCheckFatDuotone />
              یا به‌دنبال آموزش کاربردی، انسانی و نتیجه‌محور هستند
            </li>
          </ul>
          <p className="leading-6">
            اگر باور داری آموزش باید زندگی را تغییر دهد،
            <br />
            <strong className="text-purple-800 block py-5">
              {" "}
              **به آکادمی ما خوش آمدی.**
            </strong>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MainAboutUs;
