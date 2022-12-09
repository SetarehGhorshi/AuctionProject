package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateHighestPerHundred = "create_highest_per_hundred"
	TypeMsgUpdateHighestPerHundred = "update_highest_per_hundred"
	TypeMsgDeleteHighestPerHundred = "delete_highest_per_hundred"
)

var _ sdk.Msg = &MsgCreateHighestPerHundred{}

func NewMsgCreateHighestPerHundred(creator string, value int32, period int32) *MsgCreateHighestPerHundred {
	return &MsgCreateHighestPerHundred{
		Creator: creator,
		Value:   value,
		Period:  period,
	}
}

func (msg *MsgCreateHighestPerHundred) Route() string {
	return RouterKey
}

func (msg *MsgCreateHighestPerHundred) Type() string {
	return TypeMsgCreateHighestPerHundred
}

func (msg *MsgCreateHighestPerHundred) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateHighestPerHundred) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateHighestPerHundred) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateHighestPerHundred{}

func NewMsgUpdateHighestPerHundred(creator string, id uint64, value int32, period int32) *MsgUpdateHighestPerHundred {
	return &MsgUpdateHighestPerHundred{
		Id:      id,
		Creator: creator,
		Value:   value,
		Period:  period,
	}
}

func (msg *MsgUpdateHighestPerHundred) Route() string {
	return RouterKey
}

func (msg *MsgUpdateHighestPerHundred) Type() string {
	return TypeMsgUpdateHighestPerHundred
}

func (msg *MsgUpdateHighestPerHundred) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateHighestPerHundred) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateHighestPerHundred) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteHighestPerHundred{}

func NewMsgDeleteHighestPerHundred(creator string, id uint64) *MsgDeleteHighestPerHundred {
	return &MsgDeleteHighestPerHundred{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteHighestPerHundred) Route() string {
	return RouterKey
}

func (msg *MsgDeleteHighestPerHundred) Type() string {
	return TypeMsgDeleteHighestPerHundred
}

func (msg *MsgDeleteHighestPerHundred) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteHighestPerHundred) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteHighestPerHundred) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
