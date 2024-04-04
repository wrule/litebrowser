
export
interface LDBItem {
  __key: string;
  [name: string]: any;
}

export default
class LDB<T extends LDBItem> {
  public constructor(
    private readonly name: string,
  ) { }

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
  }

  public removeItem(item: T) {
    localStorage.removeItem(item.__key);
  };

  public updateItem(item: T) {
    localStorage.setItem(item.__key, JSON.stringify(item));
  };

  public queryItem(filter = (item: T) => true): T[] {
    const keys = Object.keys(localStorage)
      .filter((key) => key.startsWith(`ldb-${name}-`));
    return keys.map((key) => JSON.parse(localStorage.getItem(key) as string))
      .filter(filter);
  }
}
