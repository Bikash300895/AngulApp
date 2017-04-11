import { AuthOPage } from './app.po';

describe('auth-o App', () => {
  let page: AuthOPage;

  beforeEach(() => {
    page = new AuthOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
