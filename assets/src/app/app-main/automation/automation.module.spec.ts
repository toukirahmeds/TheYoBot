import { AutomationModule } from './automation.module';

describe('AutomationModule', () => {
  let automationModule: AutomationModule;

  beforeEach(() => {
    automationModule = new AutomationModule();
  });

  it('should create an instance', () => {
    expect(automationModule).toBeTruthy();
  });
});
