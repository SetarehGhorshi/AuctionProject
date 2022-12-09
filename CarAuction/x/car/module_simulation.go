package car

import (
	"math/rand"

	"CarAuction/testutil/sample"
	carsimulation "CarAuction/x/car/simulation"
	"CarAuction/x/car/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = carsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgPlaceBid = "op_weight_msg_place_bid"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPlaceBid int = 100

	opWeightMsgCreateBids = "op_weight_msg_bids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBids int = 100

	opWeightMsgUpdateBids = "op_weight_msg_bids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBids int = 100

	opWeightMsgDeleteBids = "op_weight_msg_bids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBids int = 100

	opWeightMsgCreateHighestPerHundred = "op_weight_msg_highest_per_hundred"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateHighestPerHundred int = 100

	opWeightMsgUpdateHighestPerHundred = "op_weight_msg_highest_per_hundred"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateHighestPerHundred int = 100

	opWeightMsgDeleteHighestPerHundred = "op_weight_msg_highest_per_hundred"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteHighestPerHundred int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	carGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BidsList: []types.Bids{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		HighestPerHundredList: []types.HighestPerHundred{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		HighestPerHundredCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&carGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgPlaceBid int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPlaceBid, &weightMsgPlaceBid, nil,
		func(_ *rand.Rand) {
			weightMsgPlaceBid = defaultWeightMsgPlaceBid
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPlaceBid,
		carsimulation.SimulateMsgPlaceBid(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateBids int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBids, &weightMsgCreateBids, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBids = defaultWeightMsgCreateBids
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBids,
		carsimulation.SimulateMsgCreateBids(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBids int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBids, &weightMsgUpdateBids, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBids = defaultWeightMsgUpdateBids
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBids,
		carsimulation.SimulateMsgUpdateBids(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBids int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBids, &weightMsgDeleteBids, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBids = defaultWeightMsgDeleteBids
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBids,
		carsimulation.SimulateMsgDeleteBids(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateHighestPerHundred int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateHighestPerHundred, &weightMsgCreateHighestPerHundred, nil,
		func(_ *rand.Rand) {
			weightMsgCreateHighestPerHundred = defaultWeightMsgCreateHighestPerHundred
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateHighestPerHundred,
		carsimulation.SimulateMsgCreateHighestPerHundred(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateHighestPerHundred int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateHighestPerHundred, &weightMsgUpdateHighestPerHundred, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateHighestPerHundred = defaultWeightMsgUpdateHighestPerHundred
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateHighestPerHundred,
		carsimulation.SimulateMsgUpdateHighestPerHundred(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteHighestPerHundred int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteHighestPerHundred, &weightMsgDeleteHighestPerHundred, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteHighestPerHundred = defaultWeightMsgDeleteHighestPerHundred
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteHighestPerHundred,
		carsimulation.SimulateMsgDeleteHighestPerHundred(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
