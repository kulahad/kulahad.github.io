import { Content } from "../domain/entities/Content";

export interface IContentRepository {
  findAll(): Promise<Content[] | null>;
  find(id: number): Promise<Content | null>;
  save(Content: Content): Promise<boolean>;
  edit(Content: Content): Promise<Content | null>;
  delete(id: number): Promise<boolean>;
}
