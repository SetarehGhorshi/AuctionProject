package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgPlaceBid{}, "car/PlaceBid", nil)
	cdc.RegisterConcrete(&MsgCreateBids{}, "car/CreateBids", nil)
	cdc.RegisterConcrete(&MsgUpdateBids{}, "car/UpdateBids", nil)
	cdc.RegisterConcrete(&MsgDeleteBids{}, "car/DeleteBids", nil)
	cdc.RegisterConcrete(&MsgCreateHighestPerHundred{}, "car/CreateHighestPerHundred", nil)
	cdc.RegisterConcrete(&MsgUpdateHighestPerHundred{}, "car/UpdateHighestPerHundred", nil)
	cdc.RegisterConcrete(&MsgDeleteHighestPerHundred{}, "car/DeleteHighestPerHundred", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPlaceBid{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBids{},
		&MsgUpdateBids{},
		&MsgDeleteBids{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateHighestPerHundred{},
		&MsgUpdateHighestPerHundred{},
		&MsgDeleteHighestPerHundred{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
