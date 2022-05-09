import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import * as endPoints from '../../../config/endPoints';
import './CardAdvert.sass';

const CardAdvert = ({ id, name, description, price, images }) => {

  return (
    <div className="cards-pet__card card-advert">
      <div className="card-advert__slider">
        <Swiper
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="card-advert__swiper"
        > 
          {images?.map((img, index) => {
            return (
              <SwiperSlide key={`img${index}`}>
                <img src={endPoints.getImagePet(img)} alt={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ul className="card-advert__info">
        <li>{name}</li>
        <li>
          <span>Описание:</span> {description}
        </li>
        <li>
          <span>{price ? `Цена: ${price}` : 'Бесплатно'}</span> 
        </li>
        <li>
          <button>
            <Link to={`/posts/${id}`}>ПОДРОБНЕЕ</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardAdvert;
