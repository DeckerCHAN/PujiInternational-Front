import {SlideItem} from '../models/slideitem';
import {ITEMS} from '../mock/mock-slideitems';

export class SlideItemsService {
  getItems(): Promise<SlideItem[]> {
    // TODO: Replace to remove version.
    return Promise.resolve(ITEMS);
  }

}
