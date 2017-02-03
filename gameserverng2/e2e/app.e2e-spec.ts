import { Gameserverng2Page } from './app.po';

describe('gameserverng2 App', function() {
  let page: Gameserverng2Page;

  beforeEach(() => {
    page = new Gameserverng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
