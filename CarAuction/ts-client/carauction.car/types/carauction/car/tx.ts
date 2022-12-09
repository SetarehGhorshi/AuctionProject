/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "carauction.car";

export interface MsgPlaceBid {
  creator: string;
  bidValue: number;
}

export interface MsgPlaceBidResponse {
}

export interface MsgCreateBids {
  creator: string;
  index: string;
  bid: number;
  bidder: string;
}

export interface MsgCreateBidsResponse {
}

export interface MsgUpdateBids {
  creator: string;
  index: string;
  bid: number;
  bidder: string;
}

export interface MsgUpdateBidsResponse {
}

export interface MsgDeleteBids {
  creator: string;
  index: string;
}

export interface MsgDeleteBidsResponse {
}

export interface MsgCreateHighestPerHundred {
  creator: string;
  value: number;
  period: number;
}

export interface MsgCreateHighestPerHundredResponse {
  id: number;
}

export interface MsgUpdateHighestPerHundred {
  creator: string;
  id: number;
  value: number;
  period: number;
}

export interface MsgUpdateHighestPerHundredResponse {
}

export interface MsgDeleteHighestPerHundred {
  creator: string;
  id: number;
}

export interface MsgDeleteHighestPerHundredResponse {
}

function createBaseMsgPlaceBid(): MsgPlaceBid {
  return { creator: "", bidValue: 0 };
}

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bidValue !== 0) {
      writer.uint32(16).int32(message.bidValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bidValue = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bidValue: isSet(object.bidValue) ? Number(object.bidValue) : 0,
    };
  },

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bidValue !== undefined && (obj.bidValue = Math.round(message.bidValue));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBid>, I>>(object: I): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.creator = object.creator ?? "";
    message.bidValue = object.bidValue ?? 0;
    return message;
  },
};

function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}

export const MsgPlaceBidResponse = {
  encode(_: MsgPlaceBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();
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

  fromJSON(_: any): MsgPlaceBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBidResponse>, I>>(_: I): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
};

function createBaseMsgCreateBids(): MsgCreateBids {
  return { creator: "", index: "", bid: 0, bidder: "" };
}

export const MsgCreateBids = {
  encode(message: MsgCreateBids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.bid !== 0) {
      writer.uint32(24).int32(message.bid);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBids {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.bid = reader.int32();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBids {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      bid: isSet(object.bid) ? Number(object.bid) : 0,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
    };
  },

  toJSON(message: MsgCreateBids): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.bid !== undefined && (obj.bid = Math.round(message.bid));
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBids>, I>>(object: I): MsgCreateBids {
    const message = createBaseMsgCreateBids();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.bid = object.bid ?? 0;
    message.bidder = object.bidder ?? "";
    return message;
  },
};

function createBaseMsgCreateBidsResponse(): MsgCreateBidsResponse {
  return {};
}

export const MsgCreateBidsResponse = {
  encode(_: MsgCreateBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidsResponse();
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

  fromJSON(_: any): MsgCreateBidsResponse {
    return {};
  },

  toJSON(_: MsgCreateBidsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBidsResponse>, I>>(_: I): MsgCreateBidsResponse {
    const message = createBaseMsgCreateBidsResponse();
    return message;
  },
};

function createBaseMsgUpdateBids(): MsgUpdateBids {
  return { creator: "", index: "", bid: 0, bidder: "" };
}

export const MsgUpdateBids = {
  encode(message: MsgUpdateBids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.bid !== 0) {
      writer.uint32(24).int32(message.bid);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBids {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.bid = reader.int32();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBids {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
      bid: isSet(object.bid) ? Number(object.bid) : 0,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
    };
  },

  toJSON(message: MsgUpdateBids): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.bid !== undefined && (obj.bid = Math.round(message.bid));
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBids>, I>>(object: I): MsgUpdateBids {
    const message = createBaseMsgUpdateBids();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    message.bid = object.bid ?? 0;
    message.bidder = object.bidder ?? "";
    return message;
  },
};

function createBaseMsgUpdateBidsResponse(): MsgUpdateBidsResponse {
  return {};
}

export const MsgUpdateBidsResponse = {
  encode(_: MsgUpdateBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBidsResponse();
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

  fromJSON(_: any): MsgUpdateBidsResponse {
    return {};
  },

  toJSON(_: MsgUpdateBidsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBidsResponse>, I>>(_: I): MsgUpdateBidsResponse {
    const message = createBaseMsgUpdateBidsResponse();
    return message;
  },
};

function createBaseMsgDeleteBids(): MsgDeleteBids {
  return { creator: "", index: "" };
}

export const MsgDeleteBids = {
  encode(message: MsgDeleteBids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBids {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBids {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: MsgDeleteBids): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBids>, I>>(object: I): MsgDeleteBids {
    const message = createBaseMsgDeleteBids();
    message.creator = object.creator ?? "";
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseMsgDeleteBidsResponse(): MsgDeleteBidsResponse {
  return {};
}

export const MsgDeleteBidsResponse = {
  encode(_: MsgDeleteBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBidsResponse();
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

  fromJSON(_: any): MsgDeleteBidsResponse {
    return {};
  },

  toJSON(_: MsgDeleteBidsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBidsResponse>, I>>(_: I): MsgDeleteBidsResponse {
    const message = createBaseMsgDeleteBidsResponse();
    return message;
  },
};

function createBaseMsgCreateHighestPerHundred(): MsgCreateHighestPerHundred {
  return { creator: "", value: 0, period: 0 };
}

export const MsgCreateHighestPerHundred = {
  encode(message: MsgCreateHighestPerHundred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.period !== 0) {
      writer.uint32(24).int32(message.period);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHighestPerHundred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHighestPerHundred();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        case 3:
          message.period = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHighestPerHundred {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
      period: isSet(object.period) ? Number(object.period) : 0,
    };
  },

  toJSON(message: MsgCreateHighestPerHundred): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.period !== undefined && (obj.period = Math.round(message.period));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateHighestPerHundred>, I>>(object: I): MsgCreateHighestPerHundred {
    const message = createBaseMsgCreateHighestPerHundred();
    message.creator = object.creator ?? "";
    message.value = object.value ?? 0;
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseMsgCreateHighestPerHundredResponse(): MsgCreateHighestPerHundredResponse {
  return { id: 0 };
}

export const MsgCreateHighestPerHundredResponse = {
  encode(message: MsgCreateHighestPerHundredResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHighestPerHundredResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHighestPerHundredResponse();
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

  fromJSON(object: any): MsgCreateHighestPerHundredResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateHighestPerHundredResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateHighestPerHundredResponse>, I>>(
    object: I,
  ): MsgCreateHighestPerHundredResponse {
    const message = createBaseMsgCreateHighestPerHundredResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateHighestPerHundred(): MsgUpdateHighestPerHundred {
  return { creator: "", id: 0, value: 0, period: 0 };
}

export const MsgUpdateHighestPerHundred = {
  encode(message: MsgUpdateHighestPerHundred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    if (message.period !== 0) {
      writer.uint32(32).int32(message.period);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHighestPerHundred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHighestPerHundred();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.value = reader.int32();
          break;
        case 4:
          message.period = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateHighestPerHundred {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      period: isSet(object.period) ? Number(object.period) : 0,
    };
  },

  toJSON(message: MsgUpdateHighestPerHundred): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.period !== undefined && (obj.period = Math.round(message.period));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateHighestPerHundred>, I>>(object: I): MsgUpdateHighestPerHundred {
    const message = createBaseMsgUpdateHighestPerHundred();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.value = object.value ?? 0;
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseMsgUpdateHighestPerHundredResponse(): MsgUpdateHighestPerHundredResponse {
  return {};
}

export const MsgUpdateHighestPerHundredResponse = {
  encode(_: MsgUpdateHighestPerHundredResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHighestPerHundredResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHighestPerHundredResponse();
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

  fromJSON(_: any): MsgUpdateHighestPerHundredResponse {
    return {};
  },

  toJSON(_: MsgUpdateHighestPerHundredResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateHighestPerHundredResponse>, I>>(
    _: I,
  ): MsgUpdateHighestPerHundredResponse {
    const message = createBaseMsgUpdateHighestPerHundredResponse();
    return message;
  },
};

function createBaseMsgDeleteHighestPerHundred(): MsgDeleteHighestPerHundred {
  return { creator: "", id: 0 };
}

export const MsgDeleteHighestPerHundred = {
  encode(message: MsgDeleteHighestPerHundred, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteHighestPerHundred {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteHighestPerHundred();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteHighestPerHundred {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteHighestPerHundred): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteHighestPerHundred>, I>>(object: I): MsgDeleteHighestPerHundred {
    const message = createBaseMsgDeleteHighestPerHundred();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteHighestPerHundredResponse(): MsgDeleteHighestPerHundredResponse {
  return {};
}

export const MsgDeleteHighestPerHundredResponse = {
  encode(_: MsgDeleteHighestPerHundredResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteHighestPerHundredResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteHighestPerHundredResponse();
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

  fromJSON(_: any): MsgDeleteHighestPerHundredResponse {
    return {};
  },

  toJSON(_: MsgDeleteHighestPerHundredResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteHighestPerHundredResponse>, I>>(
    _: I,
  ): MsgDeleteHighestPerHundredResponse {
    const message = createBaseMsgDeleteHighestPerHundredResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
  CreateBids(request: MsgCreateBids): Promise<MsgCreateBidsResponse>;
  UpdateBids(request: MsgUpdateBids): Promise<MsgUpdateBidsResponse>;
  DeleteBids(request: MsgDeleteBids): Promise<MsgDeleteBidsResponse>;
  CreateHighestPerHundred(request: MsgCreateHighestPerHundred): Promise<MsgCreateHighestPerHundredResponse>;
  UpdateHighestPerHundred(request: MsgUpdateHighestPerHundred): Promise<MsgUpdateHighestPerHundredResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteHighestPerHundred(request: MsgDeleteHighestPerHundred): Promise<MsgDeleteHighestPerHundredResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PlaceBid = this.PlaceBid.bind(this);
    this.CreateBids = this.CreateBids.bind(this);
    this.UpdateBids = this.UpdateBids.bind(this);
    this.DeleteBids = this.DeleteBids.bind(this);
    this.CreateHighestPerHundred = this.CreateHighestPerHundred.bind(this);
    this.UpdateHighestPerHundred = this.UpdateHighestPerHundred.bind(this);
    this.DeleteHighestPerHundred = this.DeleteHighestPerHundred.bind(this);
  }
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "PlaceBid", data);
    return promise.then((data) => MsgPlaceBidResponse.decode(new _m0.Reader(data)));
  }

  CreateBids(request: MsgCreateBids): Promise<MsgCreateBidsResponse> {
    const data = MsgCreateBids.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "CreateBids", data);
    return promise.then((data) => MsgCreateBidsResponse.decode(new _m0.Reader(data)));
  }

  UpdateBids(request: MsgUpdateBids): Promise<MsgUpdateBidsResponse> {
    const data = MsgUpdateBids.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "UpdateBids", data);
    return promise.then((data) => MsgUpdateBidsResponse.decode(new _m0.Reader(data)));
  }

  DeleteBids(request: MsgDeleteBids): Promise<MsgDeleteBidsResponse> {
    const data = MsgDeleteBids.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "DeleteBids", data);
    return promise.then((data) => MsgDeleteBidsResponse.decode(new _m0.Reader(data)));
  }

  CreateHighestPerHundred(request: MsgCreateHighestPerHundred): Promise<MsgCreateHighestPerHundredResponse> {
    const data = MsgCreateHighestPerHundred.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "CreateHighestPerHundred", data);
    return promise.then((data) => MsgCreateHighestPerHundredResponse.decode(new _m0.Reader(data)));
  }

  UpdateHighestPerHundred(request: MsgUpdateHighestPerHundred): Promise<MsgUpdateHighestPerHundredResponse> {
    const data = MsgUpdateHighestPerHundred.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "UpdateHighestPerHundred", data);
    return promise.then((data) => MsgUpdateHighestPerHundredResponse.decode(new _m0.Reader(data)));
  }

  DeleteHighestPerHundred(request: MsgDeleteHighestPerHundred): Promise<MsgDeleteHighestPerHundredResponse> {
    const data = MsgDeleteHighestPerHundred.encode(request).finish();
    const promise = this.rpc.request("carauction.car.Msg", "DeleteHighestPerHundred", data);
    return promise.then((data) => MsgDeleteHighestPerHundredResponse.decode(new _m0.Reader(data)));
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
