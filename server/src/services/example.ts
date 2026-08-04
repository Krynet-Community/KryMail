export class ExampleService {

  async create(input: {
    name: string;
  }) {

    return {
      id: crypto.randomUUID(),
      ...input
    };

  }

}
