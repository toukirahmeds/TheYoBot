import { FbPostModule } from './fb-post.module';

describe('FbPostModule', () => {
  let fbPostModule: FbPostModule;

  beforeEach(() => {
    fbPostModule = new FbPostModule();
  });

  it('should create an instance', () => {
    expect(fbPostModule).toBeTruthy();
  });
});
