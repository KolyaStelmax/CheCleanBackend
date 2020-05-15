const knex = require('knex');

/**
 * @param {knex} knex
 */
exports.seed = function(knex) {
  return knex('cases').del()
    .then(function () {
      const seedCases = [
        {
          details: 'КИЇВ. 26 квітня. УНН. На сьогодні Російська Федерація незаконно утримує чи ув’язнює з політичних мотивів близько 120 незгодних громадян України. Про це повідомляє УНН з посиланням на пресслужбу МЗС.',
          location : "49.4063358, 32.0539413",
          address: 'Черепашка, В’ячеслава Чорновола вулиця, Хімселище, Черкаси, Придніпровський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Israel_3_002.Trash.jpg',
        },
        {
          details: 'КИЇВ. 26 квітня. УНН. На сьогодні Російська Федерація незаконно утримує чи ув’язнює з політичних мотивів близько 120 незгодних громадян України. Про це повідомляє УНН з посиланням на пресслужбу МЗС.',
          location : "49.4063358, 32.0539413",
          address: 'Черепашка, В’ячеслава Чорновола вулиця, Хімселище, Черкаси, Придніпровський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Israel_3_002.Trash.jpg',
          status: 0,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '10 DAYS'`)),
        },
        {
          details: 'Жашківчанин отримав допомогу для розвитку торгівлі сільськогосподарською продукцією',
          location : "49.408355, 32.052855",
          address: '31, Чиковані вулиця, Хімселище, Черкаси, Придніпровський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://ubr.ua/img/article/38789/65_main.jpeg',
          status: 1,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '10 DAYS'`)),
        },
        {
          details: 'Кафе та ресторани дозволили відкрити на Черкащині',
          location : "49.410995, 32.056960",
          address: '158/1, В’ячеслава Чорновола вулиця, Митниця-1, Митниця, Черкаси, Придніпровський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Israel_3_002.Trash.jpg',
          status: 0,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '10 HOURS'`)),
        },
        {
          details: 'На сайті Президента України з\'явилася петиція в підтримку мера Черкас',
          location : "49.414276, 32.068944",
          address: 'Територіальний центр по обслуговуванню одиноких непрацездатних громадян, Гвардійська вулиця, Хімселище, Черкаси, Придніпровський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://www.fresher.ru/manager_content/01-2018/musorka-na-poberezhe-temzy/1.jpg',
          status: 1,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '2 HOURS'`)),
        },
        {
          details: 'Боднар вважає, що до вимог висловити йому недовіру причетний один із нардепів',
          location : "49.451142, 32.062822",
          address: 'Гагаріна вулиця, Поділ, Казбет, Черкаси, Соснівський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Israel_3_002.Trash.jpg',
          status: 0,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '2 MONTHS'`)),
        },
        {
          details: 'Не можна кинути за ґрати всю країну, не зміг Янукович і не зможе ніхто”, – на сайті Президента з’явилась петиція на захист мера Черкас',
          location : "49.450326, 32.067893",
          address: 'Рів\'єра, Гагаріна вулиця, Митниця-2, Казбет, Черкаси, Соснівський район, Черкаська міська рада, Черкаська область, 18000-18499, Україна',
          image_url: 'https://salsknews.ru/wp-content/uploads/2019/06/%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BA%D0%B0-1-1200x545_c.jpg',
          status: 1,
          created_at: knex.select(knex.raw(`NOW() - INTERVAL '2 MONTHS'`)),
        },
      ];

      return knex('cases').insert([
        ...seedCases,
        ...seedCases,
        ...seedCases,
        ...seedCases,
        ...seedCases,
      ]);
    });
};
