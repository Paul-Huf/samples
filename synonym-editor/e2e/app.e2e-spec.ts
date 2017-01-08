import { SynonymEditorPage } from './app.po';

describe('synonym-editor App', function() {
  let page: SynonymEditorPage;

  beforeEach(() => {
    page = new SynonymEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
