package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"CarAuction/x/car/types"
)

func TestHighestPerHundredMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateHighestPerHundred(ctx, &types.MsgCreateHighestPerHundred{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestHighestPerHundredMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateHighestPerHundred
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateHighestPerHundred{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateHighestPerHundred{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateHighestPerHundred{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateHighestPerHundred(ctx, &types.MsgCreateHighestPerHundred{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateHighestPerHundred(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestHighestPerHundredMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteHighestPerHundred
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteHighestPerHundred{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteHighestPerHundred{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteHighestPerHundred{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateHighestPerHundred(ctx, &types.MsgCreateHighestPerHundred{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteHighestPerHundred(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
