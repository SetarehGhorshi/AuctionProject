/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Bids } from "./bids";
import { HighestPerHundred } from "./highest_per_hundred";
import { Params } from "./params";

export const protobufPackage = "carauction.car";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBidsRequest {
  index: string;
}

export interface QueryGetBidsResponse {
  bids: Bids | undefined;
}

export interface QueryAllBidsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBidsResponse {
  bids: Bids[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHighestPerHundredRequest {
  id: number;
}

export interface QueryGetHighestPerHundredResponse {
  HighestPerHundred: HighestPerHundred | undefined;
}

export interface QueryAllHighestPerHundredRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHighestPerHundredResponse {
  HighestPerHundred: HighestPerHundred[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBidsRequest(): QueryGetBidsRequest {
  return { index: "" };
}

export const QueryGetBidsRequest = {
  encode(message: QueryGetBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBidsRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetBidsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBidsRequest>, I>>(object: I): QueryGetBidsRequest {
    const message = createBaseQueryGetBidsRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetBidsResponse(): QueryGetBidsResponse {
  return { bids: undefined };
}

export const QueryGetBidsResponse = {
  encode(message: QueryGetBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bids !== undefined) {
      Bids.encode(message.bids, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids = Bids.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBidsResponse {
    return { bids: isSet(object.bids) ? Bids.fromJSON(object.bids) : undefined };
  },

  toJSON(message: QueryGetBidsResponse): unknown {
    const obj: any = {};
    message.bids !== undefined && (obj.bids = message.bids ? Bids.toJSON(message.bids) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBidsResponse>, I>>(object: I): QueryGetBidsResponse {
    const message = createBaseQueryGetBidsResponse();
    message.bids = (object.bids !== undefined && object.bids !== null) ? Bids.fromPartial(object.bids) : undefined;
    return message;
  },
};

function createBaseQueryAllBidsRequest(): QueryAllBidsRequest {
  return { pagination: undefined };
}

export const QueryAllBidsRequest = {
  encode(message: QueryAllBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBidsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBidsRequest>, I>>(object: I): QueryAllBidsRequest {
    const message = createBaseQueryAllBidsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBidsResponse(): QueryAllBidsResponse {
  return { bids: [], pagination: undefined };
}

export const QueryAllBidsResponse = {
  encode(message: QueryAllBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bids) {
      Bids.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bids.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bids.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBidsResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) => e ? Bids.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBidsResponse>, I>>(object: I): QueryAllBidsResponse {
    const message = createBaseQueryAllBidsResponse();
    message.bids = object.bids?.map((e) => Bids.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHighestPerHundredRequest(): QueryGetHighestPerHundredRequest {
  return { id: 0 };
}

export const QueryGetHighestPerHundredRequest = {
  encode(message: QueryGetHighestPerHundredRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHighestPerHundredRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHighestPerHundredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHighestPerHundredRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetHighestPerHundredRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHighestPerHundredRequest>, I>>(
    object: I,
  ): QueryGetHighestPerHundredRequest {
    const message = createBaseQueryGetHighestPerHundredRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetHighestPerHundredResponse(): QueryGetHighestPerHundredResponse {
  return { HighestPerHundred: undefined };
}

export const QueryGetHighestPerHundredResponse = {
  encode(message: QueryGetHighestPerHundredResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HighestPerHundred !== undefined) {
      HighestPerHundred.encode(message.HighestPerHundred, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHighestPerHundredResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHighestPerHundredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.HighestPerHundred = HighestPerHundred.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHighestPerHundredResponse {
    return {
      HighestPerHundred: isSet(object.HighestPerHundred)
        ? HighestPerHundred.fromJSON(object.HighestPerHundred)
        : undefined,
    };
  },

  toJSON(message: QueryGetHighestPerHundredResponse): unknown {
    const obj: any = {};
    message.HighestPerHundred !== undefined && (obj.HighestPerHundred = message.HighestPerHundred
      ? HighestPerHundred.toJSON(message.HighestPerHundred)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHighestPerHundredResponse>, I>>(
    object: I,
  ): QueryGetHighestPerHundredResponse {
    const message = createBaseQueryGetHighestPerHundredResponse();
    message.HighestPerHundred = (object.HighestPerHundred !== undefined && object.HighestPerHundred !== null)
      ? HighestPerHundred.fromPartial(object.HighestPerHundred)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHighestPerHundredRequest(): QueryAllHighestPerHundredRequest {
  return { pagination: undefined };
}

export const QueryAllHighestPerHundredRequest = {
  encode(message: QueryAllHighestPerHundredRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHighestPerHundredRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHighestPerHundredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHighestPerHundredRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHighestPerHundredRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHighestPerHundredRequest>, I>>(
    object: I,
  ): QueryAllHighestPerHundredRequest {
    const message = createBaseQueryAllHighestPerHundredRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHighestPerHundredResponse(): QueryAllHighestPerHundredResponse {
  return { HighestPerHundred: [], pagination: undefined };
}

export const QueryAllHighestPerHundredResponse = {
  encode(message: QueryAllHighestPerHundredResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.HighestPerHundred) {
      HighestPerHundred.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHighestPerHundredResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHighestPerHundredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.HighestPerHundred.push(HighestPerHundred.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHighestPerHundredResponse {
    return {
      HighestPerHundred: Array.isArray(object?.HighestPerHundred)
        ? object.HighestPerHundred.map((e: any) => HighestPerHundred.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHighestPerHundredResponse): unknown {
    const obj: any = {};
    if (message.HighestPerHundred) {
      obj.HighestPerHundred = message.HighestPerHundred.map((e) => e ? HighestPerHundred.toJSON(e) : undefined);
    } else {
      obj.HighestPerHundred = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHighestPerHundredResponse>, I>>(
    object: I,
  ): QueryAllHighestPerHundredResponse {
    const message = createBaseQueryAllHighestPerHundredResponse();
    message.HighestPerHundred = object.HighestPerHundred?.map((e) => HighestPerHundred.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Bids by index. */
  Bids(request: QueryGetBidsRequest): Promise<QueryGetBidsResponse>;
  /** Queries a list of Bids items. */
  BidsAll(request: QueryAllBidsRequest): Promise<QueryAllBidsResponse>;
  /** Queries a HighestPerHundred by id. */
  HighestPerHundred(request: QueryGetHighestPerHundredRequest): Promise<QueryGetHighestPerHundredResponse>;
  /** Queries a list of HighestPerHundred items. */
  HighestPerHundredAll(request: QueryAllHighestPerHundredRequest): Promise<QueryAllHighestPerHundredResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Bids = this.Bids.bind(this);
    this.BidsAll = this.BidsAll.bind(this);
    this.HighestPerHundred = this.HighestPerHundred.bind(this);
    this.HighestPerHundredAll = this.HighestPerHundredAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Bids(request: QueryGetBidsRequest): Promise<QueryGetBidsResponse> {
    const data = QueryGetBidsRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Query", "Bids", data);
    return promise.then((data) => QueryGetBidsResponse.decode(new _m0.Reader(data)));
  }

  BidsAll(request: QueryAllBidsRequest): Promise<QueryAllBidsResponse> {
    const data = QueryAllBidsRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Query", "BidsAll", data);
    return promise.then((data) => QueryAllBidsResponse.decode(new _m0.Reader(data)));
  }

  HighestPerHundred(request: QueryGetHighestPerHundredRequest): Promise<QueryGetHighestPerHundredResponse> {
    const data = QueryGetHighestPerHundredRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Query", "HighestPerHundred", data);
    return promise.then((data) => QueryGetHighestPerHundredResponse.decode(new _m0.Reader(data)));
  }

  HighestPerHundredAll(request: QueryAllHighestPerHundredRequest): Promise<QueryAllHighestPerHundredResponse> {
    const data = QueryAllHighestPerHundredRequest.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Query", "HighestPerHundredAll", data);
    return promise.then((data) => QueryAllHighestPerHundredResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
