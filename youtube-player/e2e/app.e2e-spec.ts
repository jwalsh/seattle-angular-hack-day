import { YoutubePlayerPage } from './app.po';

describe('youtube-player App', function() {
  let page: YoutubePlayerPage;

  beforeEach(() => {
    page = new YoutubePlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
