/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Bids } from "./bids";
import { HighestPerHundred } from "./highest_per_hundred";
import { Params } from "./params";

export const protobufPackage = "carauction.car";

/** GenesisState defines the car module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  bidsList: Bids[];
  highestPerHundredList: HighestPerHundred[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  highestPerHundredCount: number;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, bidsList: [], highestPerHundredList: [], highestPerHundredCount: 0 };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bidsList) {
      Bids.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.highestPerHundredList) {
      HighestPerHundred.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.highestPerHundredCount !== 0) {
      writer.uint32(32).uint64(message.highestPerHundredCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.bidsList.push(Bids.decode(reader, reader.uint32()));
          break;
        case 3:
          message.highestPerHundredList.push(HighestPerHundred.decode(reader, reader.uint32()));
          break;
        case 4:
          message.highestPerHundredCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bidsList: Array.isArray(object?.bidsList) ? object.bidsList.map((e: any) => Bids.fromJSON(e)) : [],
      highestPerHundredList: Array.isArray(object?.highestPerHundredList)
        ? object.highestPerHundredList.map((e: any) => HighestPerHundred.fromJSON(e))
        : [],
      highestPerHundredCount: isSet(object.highestPerHundredCount) ? Number(object.highestPerHundredCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bidsList) {
      obj.bidsList = message.bidsList.map((e) => e ? Bids.toJSON(e) : undefined);
    } else {
      obj.bidsList = [];
    }
    if (message.highestPerHundredList) {
      obj.highestPerHundredList = message.highestPerHundredList.map((e) => e ? HighestPerHundred.toJSON(e) : undefined);
    } else {
      obj.highestPerHundredList = [];
    }
    message.highestPerHundredCount !== undefined
      && (obj.highestPerHundredCount = Math.round(message.highestPerHundredCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.bidsList = object.bidsList?.map((e) => Bids.fromPartial(e)) || [];
    message.highestPerHundredList = object.highestPerHundredList?.map((e) => HighestPerHundred.fromPartial(e)) || [];
    message.highestPerHundredCount = object.highestPerHundredCount ?? 0;
    return message;
  },
};

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
