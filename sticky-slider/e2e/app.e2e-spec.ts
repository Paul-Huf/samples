import { StickySliderPage } from './app.po';

describe('sticky-slider App', function() {
  let page: StickySliderPage;

  beforeEach(() => {
    page = new StickySliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
