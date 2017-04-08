import { GithubProfileFinderPage } from './app.po';

describe('github-profile-finder App', () => {
  let page: GithubProfileFinderPage;

  beforeEach(() => {
    page = new GithubProfileFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
