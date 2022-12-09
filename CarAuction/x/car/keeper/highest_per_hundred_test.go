package keeper_test

import (
	"testing"

	keepertest "CarAuction/testutil/keeper"
	"CarAuction/testutil/nullify"
	"CarAuction/x/car/keeper"
	"CarAuction/x/car/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNHighestPerHundred(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.HighestPerHundred {
	items := make([]types.HighestPerHundred, n)
	for i := range items {
		items[i].Id = keeper.AppendHighestPerHundred(ctx, items[i])
	}
	return items
}

func TestHighestPerHundredGet(t *testing.T) {
	keeper, ctx := keepertest.CarKeeper(t)
	items := createNHighestPerHundred(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetHighestPerHundred(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestHighestPerHundredRemove(t *testing.T) {
	keeper, ctx := keepertest.CarKeeper(t)
	items := createNHighestPerHundred(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHighestPerHundred(ctx, item.Id)
		_, found := keeper.GetHighestPerHundred(ctx, item.Id)
		require.False(t, found)
	}
}

func TestHighestPerHundredGetAll(t *testing.T) {
	keeper, ctx := keepertest.CarKeeper(t)
	items := createNHighestPerHundred(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHighestPerHundred(ctx)),
	)
}

func TestHighestPerHundredCount(t *testing.T) {
	keeper, ctx := keepertest.CarKeeper(t)
	items := createNHighestPerHundred(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetHighestPerHundredCount(ctx))
}
