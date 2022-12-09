package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBids = "create_bids"
	TypeMsgUpdateBids = "update_bids"
	TypeMsgDeleteBids = "delete_bids"
)

var _ sdk.Msg = &MsgCreateBids{}

func NewMsgCreateBids(
	creator string,
	index string,
	bid int32,
	bidder string,

) *MsgCreateBids {
	return &MsgCreateBids{
		Creator: creator,
		Index:   index,
		Bid:     bid,
		Bidder:  bidder,
	}
}

func (msg *MsgCreateBids) Route() string {
	return RouterKey
}

func (msg *MsgCreateBids) Type() string {
	return TypeMsgCreateBids
}

func (msg *MsgCreateBids) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBids) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBids) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBids{}

func NewMsgUpdateBids(
	creator string,
	index string,
	bid int32,
	bidder string,

) *MsgUpdateBids {
	return &MsgUpdateBids{
		Creator: creator,
		Index:   index,
		Bid:     bid,
		Bidder:  bidder,
	}
}

func (msg *MsgUpdateBids) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBids) Type() string {
	return TypeMsgUpdateBids
}

func (msg *MsgUpdateBids) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBids) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBids) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBids{}

func NewMsgDeleteBids(
	creator string,
	index string,

) *MsgDeleteBids {
	return &MsgDeleteBids{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBids) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBids) Type() string {
	return TypeMsgDeleteBids
}

func (msg *MsgDeleteBids) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBids) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBids) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
