import { articles, summaries } from '../mock/mock-articles';
import { Article } from '../models/article';
import { Summary } from '../models/summary';

export class ArticleService {

  getArticle(id: string): Promise<Article> {
    return Promise.resolve(articles.filter(x => x.id === id)[0]);
  }

  getSummaries(): Promise<Summary[]> {
    return Promise.resolve(summaries);
  }

}
