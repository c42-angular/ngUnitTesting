import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {
    messageService = new MessageService();
  });

  it('should have no messages to start with', () => {
    expect(messageService.messages.length).toBe(0);
  });

  it('should have contain one message after an add operation', () => {
    messageService.add('test');

    expect(messageService.messages.length).toBe(1);
  });

  it('should have remove all messages when clear is called', () => {
    messageService.add('test');

    messageService.clear();

    expect(messageService.messages.length).toBe(0);
  });
});
