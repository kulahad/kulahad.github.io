import { Content } from "../domain/entities/Content";
import { IUseCase } from "../shared/IUseCase";
import { IContentRepository } from "./IContentRepository";

interface IGetContentDto {
  id: number;
}

export class ContentDto {
  public constructor(
    public readonly title: string,
    public readonly data: string
  ) {}

  public static from(Content: Content): ContentDto {
    return new ContentDto(Content.title, Content.data);
  }
}

export class GetContentUseCase implements IUseCase<IGetContentDto, ContentDto> {
  public constructor(private readonly _contentRepository: IContentRepository) {}

  public async process(input: IGetContentDto): Promise<ContentDto> {
    var contentResult = await this._contentRepository.find(input.id);

    if (!contentResult) {
      throw new Error(`Content with id ${input.id} not found!`);
    }

    return ContentDto.from(contentResult);
  }
}
