import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    const article = new Article(
      1,
      'Article 1',
      'Description de l\'article 1',
      10.99,
      100,
      20,
      200,
      'Categorie 1',
      new Date()
    );
    
    expect(article).toBeTruthy();
  });
});
