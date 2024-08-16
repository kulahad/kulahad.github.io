export interface IUseCase<TInput, TOutput> {
  process(input: TInput): Promise<TOutput>;
}
