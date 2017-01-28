import { YourCoolAppPage } from './app.po';

describe('your-cool-app App', function() {
  let page: YourCoolAppPage;

  beforeEach(() => {
    page = new YourCoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('myapp works!');
  });
});
