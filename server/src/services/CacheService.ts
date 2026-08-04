export class CacheService {

  private cache =
    new Map<string, unknown>();

  get<T>(key: string): T | undefined {

    return this.cache.get(key) as T;

  }


  set(
    key: string,
    value: unknown
  ) {

    this.cache.set(
      key,
      value
    );

  }


  delete(key: string) {

    this.cache.delete(key);

  }

}
