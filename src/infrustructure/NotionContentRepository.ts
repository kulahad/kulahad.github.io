import { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { IContentRepository } from "../application/IContentRepository";
import { Content } from "../domain/entities/Content";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export class NotionContentRepository implements IContentRepository {
  protected _notionToMD: NotionToMarkdown;

  public constructor() {
    this._notionToMD = new NotionToMarkdown({
      notionClient: new Client({
        auth: process.env.NOTION_INTEGRATION_KEY,
      }),
      config: {
        separateChildPage: true, // default: false
      },
    });
  }

  findAll(): Promise<Content[] | null> {
    throw new Error("Method not implemented.");
  }
  async find(id: number): Promise<Content | null> {
    this._notionToMD.setCustomTransformer("bookmark", (block) => {
      const { bookmark } = block as BookmarkBlockObjectResponse;
      console.log(
        "🚀 ~ NotionRepository ~ this.NotionToMD.setCustomTransformer ~ bookmark:",
        bookmark
      );
      return `<div>${bookmark.caption} <a href=${bookmark.url}>BookMark here</a></div>`;
    });
    console.log("HelloAhad");
    const mdBlocks = await this._notionToMD.pageToMarkdown(
      "df5251007ba44a71ad08532cfd1edad8"
    );
    const mdString = await this._notionToMD.toMarkdownString(mdBlocks);
    console.log("database", mdString);
    return new Content(1, "Notion works?", mdString.parent);
    throw new Error("Method not implemented.");
  }
  save(Content: Content): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  edit(Content: Content): Promise<Content | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
