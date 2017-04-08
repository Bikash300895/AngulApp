import { SposifyPage } from './app.po';

describe('sposify App', () => {
  let page: SposifyPage;

  beforeEach(() => {
    page = new SposifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
