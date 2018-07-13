import { MyBusinessModule } from './my-business.module';

describe('MyBusinessModule', () => {
  let myBusinessModule: MyBusinessModule;

  beforeEach(() => {
    myBusinessModule = new MyBusinessModule();
  });

  it('should create an instance', () => {
    expect(myBusinessModule).toBeTruthy();
  });
});
