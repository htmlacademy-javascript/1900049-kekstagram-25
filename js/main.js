/* Task 1 */
const getRand = (min, max) => {
  if (min > max) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRand(2, 5);

/* Task 2 */

const getStringLength = (str, maxLength) => str.length <= maxLength;
const strParam = 'sgsdfgsdfgsdfgsfg';
const maxLengthParam = 20;
getStringLength(strParam, maxLengthParam);

const TOTAL_POSTS = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Йелоупукке Красноносый',
  'Лиса Патрикеевна',
  'Вольдемар Изящный',
  'Розетка Электричкина',
  'Рюкзак Знаниевич',
];

const DESCRIPTIONS = [
  'Придумай подпись',
  'Я художник, я так вижу',
  'Снято на ведро',
  'Комменты, лайки туда-->',
  'Не стучите, сам открою',
];

const shuffleArray = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const getComments = () => {
  const commentIds = shuffleArray(
    Array.from({ length: 200 }, (element, index) => index + 1)
  );

  return Array.from({ length: getRand(0, 5) }).map((element, index) => ({
    id: commentIds[index],
    avatar: `img/avatar-${getRand(1, 6)}.svg`,
    message: COMMENTS[getRand(0, COMMENTS.length)],
    name: NAMES[getRand(0, NAMES.length)],
  }));
};

const generateKeks = (keksId) => ({
  id: keksId,
  url: `photos/${keksId}.jpg`,
  description: DESCRIPTIONS[getRand(0, DESCRIPTIONS.length)],
  likes: getRand(15, 200),
  comments: getComments(),
});

const getKeks = () =>
  Array.from({ length: TOTAL_POSTS }, (element, index) => index + 1).map(
    generateKeks
  );

getKeks();
