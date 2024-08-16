import { Content } from "../domain/entities/Content";
import { IUseCase } from "../shared/IUseCase";
import { IContentRepository } from "./IContentRepository";

export class ContentDto {
  public constructor(
    public readonly title: string,
    public readonly data: string
  ) {}

  public static from(Content: Content[]): ContentDto[] {
    let contentDTOArray: ContentDto[] = [];

    Content.forEach((item) => {
      contentDTOArray.push(new ContentDto(item.title, item.data));
    });
    return contentDTOArray;
  }
}

export class GetContentListUseCase implements IUseCase<null, ContentDto[]> {
  public constructor(private readonly _contentRepository: IContentRepository) {}

  public async process(): Promise<ContentDto[]> {
    var contentResult = await this._contentRepository.findAll();

    if (!contentResult) {
      throw new Error(`Content not found!`);
    }

    return ContentDto.from(contentResult);
  }
}
