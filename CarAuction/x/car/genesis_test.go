package car_test

import (
	"testing"

	keepertest "CarAuction/testutil/keeper"
	"CarAuction/testutil/nullify"
	"CarAuction/x/car"
	"CarAuction/x/car/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BidsList: []types.Bids{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		HighestPerHundredList: []types.HighestPerHundred{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		HighestPerHundredCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CarKeeper(t)
	car.InitGenesis(ctx, *k, genesisState)
	got := car.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BidsList, got.BidsList)
	require.ElementsMatch(t, genesisState.HighestPerHundredList, got.HighestPerHundredList)
	require.Equal(t, genesisState.HighestPerHundredCount, got.HighestPerHundredCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
