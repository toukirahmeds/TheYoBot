import { YoutubeVideoModule } from './youtube-video.module';

describe('YoutubeVideoModule', () => {
  let youtubeVideoModule: YoutubeVideoModule;

  beforeEach(() => {
    youtubeVideoModule = new YoutubeVideoModule();
  });

  it('should create an instance', () => {
    expect(youtubeVideoModule).toBeTruthy();
  });
});
