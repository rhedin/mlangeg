import { TestBed, inject } from '@angular/core/testing';

import { TalkToDocsService } from './talk-to-docs.service';

describe('TalkToDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalkToDocsService]
    });
  });

  it('should be created', inject([TalkToDocsService], (service: TalkToDocsService) => {
    expect(service).toBeTruthy();
  }));
});
