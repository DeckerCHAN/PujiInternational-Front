import { ITEMS } from '../mock/mock-articles';
import { Article } from '../models/article';

export class ArticleService {

  getArticle(id: string): Promise<Article> {
    return Promise.resolve(ITEMS.filter(x => x.id === id)[0]);
  }

}
