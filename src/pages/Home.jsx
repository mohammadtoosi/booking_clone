import React from "react";

import Layout from "../components/Layout/Layout";

import TourCardTabs from "../components/TourCardTabs";
import Swiper from "../components/Swiper/Swiper";
import SwiperSlide from "../components/Swiper/SwiperSlide";
import AirTicketCard from "../components/Card/AirTicketCard";
import BlogCard from "../components/Card/BlogCard";
import AdvancedSearch from "../components/AdvancedSearch";

import c1 from "../assets/city/1.jpg";
import c2 from "../assets/city/2.jpg";
import c3 from "../assets/city/3.jpg";
import c4 from "../assets/city/4.jpg";
import c5 from "../assets/city/5.jpg";

import lux from "../assets/lux.jpg";

const Home = () => {
    return (
        <div>
            <Layout>
                <div className="lux-bg position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="">
                                <AdvancedSearch />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="text-center mt-5">
                            <p className="h6">سفر خودت رو بساز</p>
                            <p className="h4">
                                تورهای مسافرتی به مقاصد داخلی و خارجی
                            </p>
                            <TourCardTabs />
                        </div>
                        <div style={{ marginTop: "100px" }}>
                            <div className="mb-4">
                                <p className="h5">بلیط هواپیما داخلی</p>
                            </div>
                            <Swiper slidesPerView={5}>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        بلیط هواپیما تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c2}>
                                        بلیط هواپیما شیراز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c4}>
                                        بلیط هواپیما قشم
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div style={{ marginTop: "100px" }}>
                            <div className="mb-4">
                                <p className="h5">بلیط هواپیما خارجی</p>
                            </div>
                            <Swiper slidesPerView={5}>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        بلیط هواپیما تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c2}>
                                        بلیط هواپیما شیراز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c4}>
                                        بلیط هواپیما قشم
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div style={{ marginTop: "100px" }}>
                            <div className="row">
                                <div className="mb-4">
                                    <p className="h5">مجله گردشگری</p>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                    <BlogCard
                                        image={c3}
                                        title="۲۰تا از جاهای دیدنی اصفهان"
                                    >
                                        پاریس از آن دست شهرهای پربازدید و محبوبی
                                        است که تکراری نمی‌شود و هر جهانگردی
                                        حداقل یک بار گذرش به آن افتاده است.بنا
                                        بر آمار و ارقام، سفر پاریس در سال ۲۰۲۰
                                        میلادی هم جزو مقاصد برتر در قاره اروپا و
                                        و جهان بوده است.
                                    </BlogCard>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                    <BlogCard
                                        image={c2}
                                        title="۲۰تا از جاهای دیدنی اصفهان"
                                    >
                                        پاریس از آن دست شهرهای پربازدید و محبوبی
                                        است که تکراری نمی‌شود و هر جهانگردی
                                        حداقل یک بار گذرش به آن افتاده است.بنا
                                        بر آمار و ارقام، سفر پاریس در سال ۲۰۲۰
                                        میلادی هم جزو مقاصد برتر در قاره اروپا و
                                        و جهان بوده است.
                                    </BlogCard>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                                    <BlogCard
                                        image={c5}
                                        title="۲۰تا از جاهای دیدنی اصفهان"
                                    >
                                        پاریس از آن دست شهرهای پربازدید و محبوبی
                                        است که تکراری نمی‌شود و هر جهانگردی
                                        حداقل یک بار گذرش به آن افتاده است.بنا
                                        بر آمار و ارقام، سفر پاریس در سال ۲۰۲۰
                                        میلادی هم جزو مقاصد برتر در قاره اروپا و
                                        و جهان بوده است.
                                    </BlogCard>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "100px" }}>
                            <div className="mb-4">
                                <p className="h5">رزرو هتل داخلی</p>
                            </div>
                            <Swiper slidesPerView={5}>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        بلیط هواپیما تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c2}>
                                        بلیط هواپیما شیراز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c4}>
                                        بلیط هواپیما قشم
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div style={{ marginTop: "100px" }}>
                            <div className="mb-4">
                                <p className="h5">رزرو هتل خارجی</p>
                            </div>
                            <Swiper slidesPerView={5}>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        بلیط هواپیما تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c2}>
                                        بلیط هواپیما شیراز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c4}>
                                        بلیط هواپیما قشم
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c3}>
                                        بلیط هواپیما تبریز
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c5}>
                                        بلیط هواپیما اصفهان
                                    </AirTicketCard>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AirTicketCard image={c1}>
                                        تهران
                                    </AirTicketCard>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
