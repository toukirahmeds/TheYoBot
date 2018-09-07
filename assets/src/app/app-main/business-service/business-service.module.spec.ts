import { BusinessServiceModule } from './business-service.module';

describe('BusinessServiceModule', () => {
  let businessServiceModule: BusinessServiceModule;

  beforeEach(() => {
    businessServiceModule = new BusinessServiceModule();
  });

  it('should create an instance', () => {
    expect(businessServiceModule).toBeTruthy();
  });
});
