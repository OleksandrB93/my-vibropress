import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './Beton4.styled';

export default function Beton4() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Конвеєрне обладнання</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          <strong>Стрічковий похилий транспортер</strong> призначений для
          переміщення сипучих вантажів в технологічному ланцюгу.
        </ProductionText>
        <ProductionText>
          Z/Г/L-подібні стрічкові транспортери використовуються в разі, якщо
          потрібно скоротити площу виробництва без шкоди технологічному процесу.
        </ProductionText>
        <ProductionText>
          Стрічковий транспортер являє собою зварну конструкцію з металу, на
          верхньому кінці якої розташований привідний барабан, що приводиться в
          дію електродвигуном через черв'ячний одноступеневий редуктор. На
          нижньому кінці транспортера розташований натяжний барабан. Барабани
          огинає нескінченна конвеєрна стрічка, яка спирається на верхні опорні
          ролики (V-подібні) й плоскі нижні роликові опори. Транспортерна
          стрічка може бути пласкою або з шевронами (рифлями).
        </ProductionText>
        <ProductionText>
          Стійки виготовляються різної висоти, в залежності від застосування
          конвеєра. Кут нахилу вибирається при проектуванні враховуючи граничні
          кути природного укосу.
        </ProductionText>
        <ProductionText>
          <strong>Скіп</strong> — підйомний саморозвантажуваний короб для сипких
          вантажів, що рухається за допомогою канатів по рейкових або інших
          напрямних пристроях скіпового підйомника. Застосовується для
          підіймання інертних матеріалів до проміжного бункеру або безпосередньо
          до бетонозмішувача.
        </ProductionText>
        <ProductionText>
          За способом розвантаження виготовляємо скіпи, які розвантажуються
          через дно і скіпи, які перекидаються.
        </ProductionText>
        <ProductionText>
          <strong>Шнековий транспортер</strong> призначений для безперервного і
          рівномірного транспортування, дозування цементу (інших інертних
          сипучих матеріаів) в різних технологічних процесах, а також для подачі
          цементу у вагові дозатори, змішувачі та інші пристрої.
        </ProductionText>
        <ProductionText>
          Складається шнековий транспортер з приводу, що обертає гвинт (шнек),
          привідного вала з закріпленими на ньому витками транспортуючого
          гвинта, в трубі, завантажувального і розвантажувального вікон. Привід
          транспортера здійснюється від мотора-редуктора.
        </ProductionText>
        <ProductionText>
          Залежно від застосування можливі декілька варіантів діаметра
          зовнішньої труби. Максимальна довжина суцільного шнеку 3 м. (довжини
          до 6 м. розбиваються на дві частини, 9-12 м. на три-чотири).
          Вхід/вихід конусний, циліндричний, кубічний.
        </ProductionText>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton4/46.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton4/42.jpg'
            }
            alt="Бетонозмішувач "
          />
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton4/43.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>

        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton4/44.jpg'
            }
            alt="Бетонозмішувач "
          />
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton4/45.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
