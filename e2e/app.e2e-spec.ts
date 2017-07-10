import { BookStorePage } from './app.po';

describe('book-store App', () => {
  let page: BookStorePage;

  beforeEach(() => {
    page = new BookStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
