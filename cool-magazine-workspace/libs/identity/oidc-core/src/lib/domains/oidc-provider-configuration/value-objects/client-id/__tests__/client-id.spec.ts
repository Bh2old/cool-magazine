import { ClientId } from '../client-id.value-object';

describe('ClientId', () => {
  describe('create', () => {
    test('should return instance of ClientId', () => {
      expect(ClientId.create('ClientId')).toBeInstanceOf(ClientId);
    });
  });
});
