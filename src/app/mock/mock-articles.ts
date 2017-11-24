import { Article } from '../models/article';
import { Summary } from '../models/summary';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Article 1',
    subTitle: 'I am article 1!',
    content: `I am __article 1__!`,
    postDate: '2001/5/1',
    bg: 'https://wowsp-wows-sg.wgcdn.co/dcont/gskins_installed/Kidd2/images/Kidd.jpg'
  },
  {
    id: '2',
    title: 'Article 2',
    subTitle: 'I am article 2!',
    content: `I am __article 2__!`,
    postDate: '2001/5/2',
    bg: 'https://worldofwarships.asia/static/21fda423a82/assets/8066215fe428d79802c75b8b9cc2c8a5.jpg'
  },
];

export const summaries: Summary[] = [
  {
    id: '1',
    title: 'Article 1',
    subTitle: 'I am article 1!',
    summary: 'sample summary 1',
    postDate: '2001/5/1',
  },
  {
    id: '2',
    title: 'Article 2',
    subTitle: 'I am article 2!',
    summary: 'I am summary of article 2!',
    postDate: '2001/5/2'
  },
];
