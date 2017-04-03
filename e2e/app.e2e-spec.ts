import { AngulAppPage } from './app.po';

describe('angul-app App', () => {
  let page: AngulAppPage;

  beforeEach(() => {
    page = new AngulAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
