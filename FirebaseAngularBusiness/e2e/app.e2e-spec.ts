import { FirebaseAngularBusinessPage } from './app.po';

describe('firebase-angular-business App', () => {
  let page: FirebaseAngularBusinessPage;

  beforeEach(() => {
    page = new FirebaseAngularBusinessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
