type Callback = () => void;

export class Lock {
  private lock: Promise<void>;

  public constructor() {
    this.lock = null;
  }

  public async acquire(): Promise<Callback> {
    let result: Callback;

    if (this.lock === null)
      this.lock = new Promise((resolve) => {
        result = () => {
          resolve();
          this.lock = null;
        };
      });
    else {
      await this.lock;

      return this.acquire();
    }

    return result;
  }
}
