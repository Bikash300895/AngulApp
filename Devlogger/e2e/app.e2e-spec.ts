import { DevloggerPage } from './app.po';

describe('devlogger App', () => {
  let page: DevloggerPage;

  beforeEach(() => {
    page = new DevloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
