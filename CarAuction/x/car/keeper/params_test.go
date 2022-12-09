package keeper_test

import (
	"testing"

	testkeeper "CarAuction/testutil/keeper"
	"CarAuction/x/car/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CarKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
