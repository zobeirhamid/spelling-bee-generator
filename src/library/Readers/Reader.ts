import Writer from "@library/Writers/Writer";

abstract class Reader {
  protected iterator: Generator;

  protected abstract createIterator(): Generator<string>;

  public reset() {
    this.iterator = this.createIterator();
  }

  public readLine() {
    return this.iterator.next().value;
  }

  public abstract getWriter(): Writer;
}

export default Reader;
