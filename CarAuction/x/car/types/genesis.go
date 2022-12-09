package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BidsList:              []Bids{},
		HighestPerHundredList: []HighestPerHundred{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in bids
	bidsIndexMap := make(map[string]struct{})

	for _, elem := range gs.BidsList {
		index := string(BidsKey(elem.Index))
		if _, ok := bidsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for bids")
		}
		bidsIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in highestPerHundred
	highestPerHundredIdMap := make(map[uint64]bool)
	highestPerHundredCount := gs.GetHighestPerHundredCount()
	for _, elem := range gs.HighestPerHundredList {
		if _, ok := highestPerHundredIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for highestPerHundred")
		}
		if elem.Id >= highestPerHundredCount {
			return fmt.Errorf("highestPerHundred id should be lower or equal than the last id")
		}
		highestPerHundredIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
