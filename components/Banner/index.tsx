import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.css';
import { Autoplay } from 'swiper';


export const Banner = () => {

    return (
        <div className={styles.container}>

            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.slide}><div className={styles.slideImg}><img src='/tmp/banner1.png' alt=''/></div></SwiperSlide>
                <SwiperSlide className={styles.slide}><div className={styles.slideImg}><img src='/tmp/banner2.png' alt=''/></div></SwiperSlide>
            </Swiper>

        </div>
    );

}