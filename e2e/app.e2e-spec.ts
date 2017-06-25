import { BhansagharPage } from './app.po';

describe('bhansaghar App', () => {
  let page: BhansagharPage;

  beforeEach(() => {
    page = new BhansagharPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
