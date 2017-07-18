import { MyPostAppPage } from './app.po';

describe('my-post-app App', () => {
  let page: MyPostAppPage;

  beforeEach(() => {
    page = new MyPostAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
