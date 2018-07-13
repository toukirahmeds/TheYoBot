import { InstagramPostModule } from './instagram-post.module';

describe('InstagramPostModule', () => {
  let instagramPostModule: InstagramPostModule;

  beforeEach(() => {
    instagramPostModule = new InstagramPostModule();
  });

  it('should create an instance', () => {
    expect(instagramPostModule).toBeTruthy();
  });
});
