import './Promo.css';
import { gifts } from '../../utils/constans';

function Promo() {

  return (
    <section className="promo">
      <div className="promo__titles">
        <h1 className="promo__title">Зарабатывайте больше</h1>
        <h2 className="promo__subtitle" >с WELBEX</h2>
        <p className="promo__text">Развиваем и контролируем продажи за вас</p>
      </div>

      <div className="promo__about">
        <h2 className="promo__about-title"> В месте с <span className='promo__about-title-span'>бесплатной консультацией</span>  мы дарим:</h2>
        <ul className='promo__about-list'>
          {gifts.map((item) => (
            <li className='promo__about-item' key={item.id}>
              <h3 className='promo__about-subtitle'>{item.title}</h3>
              <p className='promo__about-text'>{item.text}</p>
            </li>))}
        </ul>
        <button className='promo__button'>Получить консультацию</button>
      </div>

    </section>
  );
}

export default Promo;