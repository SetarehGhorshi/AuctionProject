package types

import (
	"testing"

	"CarAuction/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateHighestPerHundred_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateHighestPerHundred
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateHighestPerHundred{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateHighestPerHundred{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateHighestPerHundred_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateHighestPerHundred
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateHighestPerHundred{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateHighestPerHundred{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteHighestPerHundred_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteHighestPerHundred
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteHighestPerHundred{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteHighestPerHundred{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
