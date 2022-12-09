/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.car";

export interface Bids {
  index: string;
  bid: number;
  bidder: string;
  creator: string;
}

function createBaseBids(): Bids {
  return { index: "", bid: 0, bidder: "", creator: "" };
}

export const Bids = {
  encode(message: Bids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.bid !== 0) {
      writer.uint32(16).int32(message.bid);
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bids {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.bid = reader.int32();
          break;
        case 3:
          message.bidder = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bids {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      bid: isSet(object.bid) ? Number(object.bid) : 0,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Bids): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.bid !== undefined && (obj.bid = Math.round(message.bid));
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bids>, I>>(object: I): Bids {
    const message = createBaseBids();
    message.index = object.index ?? "";
    message.bid = object.bid ?? 0;
    message.bidder = object.bidder ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
