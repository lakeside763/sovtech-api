import ioredisMock from 'ioredis-mock';

jest.mock('ioredis', () => ioredisMock);