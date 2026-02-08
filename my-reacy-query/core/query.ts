import { type QueryState } from "../types/query";

interface IQuery {
  queryKey: string;
  queryHash: string;
  state: QueryState;

  request: undefined | (() => Promise<void>);

  fetch: () => () => Promise<void>;
}

export class Query implements IQuery {
  state: QueryState;
  queryKey: string;
  queryHash: string;
  request: undefined | (() => Promise<void>);

  constructor(config: { queryKey: string; queryHash: string }) {
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.state = {
      data: undefined,
      isError: false,
      isLoading: true,
    };
  }

  fetch = () => {
    if (!this.request) {
      this.request = async () => {};
    }

    return this.request;
  };
}
