
export default
class LDB<T> {
  public constructor(private readonly name: string) { }

  public getKey() {
    let index = 1;
    while (true) {
      const key = `ldb-${this.name}-${index++}`;
      if (!localStorage.getItem(key)) return key;
    }
  }

  public addItem(item: T) {
    const key = this.getKey();
    localStorage.setItem(key, JSON.stringify({ ...item, __key: key }));
    (item as any).__key = key;
  }

  public removeItem(item: T) {
    localStorage.removeItem((item as any).__key);
  };

  public updateItem(item: T) {
    localStorage.setItem((item as any).__key, JSON.stringify(item));
  };

  public queryItem(filter = (item: T) => true): T[] {
    const keys = Object.keys(localStorage)
      .filter((key) => key.startsWith(`ldb-${this.name}-`));
    return keys.map((key) => JSON.parse(localStorage.getItem(key) as string))
      .filter(filter);
  }
}
