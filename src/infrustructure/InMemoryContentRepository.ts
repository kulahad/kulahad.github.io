import { IContentRepository } from "../application/IContentRepository";
import { Content } from "../domain/entities/Content";

export class InMemoryContentRepository implements IContentRepository {
  private readonly _contentArray: Content[] = [
    { id: 0, data: " sds", title: "test" },
    { id: 1, data: " sds1", title: "test1" },
    { id: 2, data: " sds2", title: "test2" },
  ];

  public async findAll(): Promise<Content[] | null> {
    return this._contentArray;
  }

  public async find(id: number): Promise<Content | null> {
    return this._contentArray.find((content) => content.id == id) ?? null;
  }
  public async save(Content: Content): Promise<boolean> {
    this._contentArray.push(Content);
    return true;
  }
  public async edit(Content: Content): Promise<Content | null> {
    var oldData = this._contentArray.find((x) => x.id === Content.id);
    return oldData ?? null;
  }
  public async delete(id: number): Promise<boolean> {
    var oldData = this._contentArray.find((x) => x.id === id);
    return true;
  }
}
