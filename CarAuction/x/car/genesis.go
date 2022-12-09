package car

import (
	"CarAuction/x/car/keeper"
	"CarAuction/x/car/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the bids
	for _, elem := range genState.BidsList {
		k.SetBids(ctx, elem)
	}
	// Set all the highestPerHundred
	for _, elem := range genState.HighestPerHundredList {
		k.SetHighestPerHundred(ctx, elem)
	}

	// Set highestPerHundred count
	k.SetHighestPerHundredCount(ctx, genState.HighestPerHundredCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BidsList = k.GetAllBids(ctx)
	genesis.HighestPerHundredList = k.GetAllHighestPerHundred(ctx)
	genesis.HighestPerHundredCount = k.GetHighestPerHundredCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
