import { VerifyEmailPage } from './app.po';

describe('verify-email App', function() {
  let page: VerifyEmailPage;

  beforeEach(() => {
    page = new VerifyEmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
