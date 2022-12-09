package types_test

import (
	"testing"

	"CarAuction/x/car/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated bids",
			genState: &types.GenesisState{
				BidsList: []types.Bids{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated highestPerHundred",
			genState: &types.GenesisState{
				HighestPerHundredList: []types.HighestPerHundred{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid highestPerHundred count",
			genState: &types.GenesisState{
				HighestPerHundredList: []types.HighestPerHundred{
					{
						Id: 1,
					},
				},
				HighestPerHundredCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
