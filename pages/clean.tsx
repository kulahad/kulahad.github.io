import { GetContentListUseCase } from "../src/application/GetContentListUseCase";
import {
  ContentDto,
  GetContentUseCase,
} from "../src/application/GetContentUseCase";
import { InMemoryContentRepository } from "../src/infrustructure/InMemoryContentRepository";
import { NotionContentRepository } from "../src/infrustructure/NotionContentRepository";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const remarkGfm = require("remark-gfm");

export default function Home({
  content,
  allContent,
}: {
  content: string;
  allContent: string;
}) {
  console.log("🚀 ~ Home ~ content:", content);
  const test: ContentDto = ContentDto.from(JSON.parse(content));
  const testArray: ContentDto[] = JSON.parse(allContent);

  console.log("🚀 ~ Home ~ test:", test);
  return (
    <>
      <h1>{test.title}</h1>
      <div className="w-3/4 mx-auto">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {test.data}
        </Markdown>
      </div>

      <div className="w-full flex flex-col text-justify font-mono text-lg">
        {testArray.map((item, i) => {
          console.log("🚀 ~ {testArray.forEach ~ item:", item);
          return (
            <div
              key={i}
              className="mx-auto my-3 bg-red-200 p-10 hover:bg-green-500 hover:text-4xl"
              onClick={() => alert(item.data)}
            >
              <h2>{item.title}</h2>
              <p>{item.data}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const repo = new InMemoryContentRepository();
  const repoNotion = new NotionContentRepository();
  const usecase = new GetContentUseCase(repoNotion);
  const getAll = new GetContentListUseCase(repo);

  var content = await usecase.process({ id: 1 });
  var allContent = await getAll.process();
  // console.log("🚀 ~ getStaticProps ~ allContent:", allContent);

  return {
    props: {
      content: JSON.stringify(content),
      allContent: JSON.stringify(allContent),
      //   page,
    },
  };
}
