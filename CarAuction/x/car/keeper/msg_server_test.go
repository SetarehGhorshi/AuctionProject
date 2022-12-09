package keeper_test

import (
	"context"
	"testing"

	keepertest "CarAuction/testutil/keeper"
	"CarAuction/x/car/keeper"
	"CarAuction/x/car/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CarKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
