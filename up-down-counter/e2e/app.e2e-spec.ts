import { UpDownCounterPage } from './app.po';

describe('up-down-counter App', function() {
  let page: UpDownCounterPage;

  beforeEach(() => {
    page = new UpDownCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
