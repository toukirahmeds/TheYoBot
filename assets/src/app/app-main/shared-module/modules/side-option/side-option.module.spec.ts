import { SideOptionModule } from './side-option.module';

describe('SideOptionModule', () => {
  let sideOptionModule: SideOptionModule;

  beforeEach(() => {
    sideOptionModule = new SideOptionModule();
  });

  it('should create an instance', () => {
    expect(sideOptionModule).toBeTruthy();
  });
});
