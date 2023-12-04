import { Lock } from './';

describe('lock', () => {
  it('acquire test', async () => {
    const lock = new Lock();

    const release = await lock.acquire();

    let nextRelease: Awaited<ReturnType<typeof lock.acquire>> | null = null;

    lock.acquire().then((r) => (nextRelease = r));

    setTimeout(() => {
      expect(nextRelease).toBeNull();

      release();
    }, 20);
  });

  it('release test', async () => {
    const lock = new Lock();

    const release = await lock.acquire();

    let nextRelease: Awaited<ReturnType<typeof lock.acquire>> | null = null;

    lock.acquire().then((r) => (nextRelease = r));

    release();

    setTimeout(() => {
      expect(nextRelease).not.toBeNull();
    }, 20);
  });
});
