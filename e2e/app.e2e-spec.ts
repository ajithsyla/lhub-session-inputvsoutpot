import { LhubdemoinputvsoutputPage } from './app.po';

describe('lhubdemoinputvsoutput App', () => {
  let page: LhubdemoinputvsoutputPage;

  beforeEach(() => {
    page = new LhubdemoinputvsoutputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
