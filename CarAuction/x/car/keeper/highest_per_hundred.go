package keeper

import (
	"encoding/binary"

	"CarAuction/x/car/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetHighestPerHundredCount get the total number of highestPerHundred
func (k Keeper) GetHighestPerHundredCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.HighestPerHundredCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetHighestPerHundredCount set the total number of highestPerHundred
func (k Keeper) SetHighestPerHundredCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.HighestPerHundredCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendHighestPerHundred appends a highestPerHundred in the store with a new id and update the count
func (k Keeper) AppendHighestPerHundred(
	ctx sdk.Context,
	highestPerHundred types.HighestPerHundred,
) uint64 {
	// Create the highestPerHundred
	count := k.GetHighestPerHundredCount(ctx)

	// Set the ID of the appended value
	highestPerHundred.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HighestPerHundredKey))
	appendedValue := k.cdc.MustMarshal(&highestPerHundred)
	store.Set(GetHighestPerHundredIDBytes(highestPerHundred.Id), appendedValue)

	// Update highestPerHundred count
	k.SetHighestPerHundredCount(ctx, count+1)

	return count
}

// SetHighestPerHundred set a specific highestPerHundred in the store
func (k Keeper) SetHighestPerHundred(ctx sdk.Context, highestPerHundred types.HighestPerHundred) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HighestPerHundredKey))
	b := k.cdc.MustMarshal(&highestPerHundred)
	store.Set(GetHighestPerHundredIDBytes(highestPerHundred.Id), b)
}

// GetHighestPerHundred returns a highestPerHundred from its id
func (k Keeper) GetHighestPerHundred(ctx sdk.Context, id uint64) (val types.HighestPerHundred, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HighestPerHundredKey))
	b := store.Get(GetHighestPerHundredIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHighestPerHundred removes a highestPerHundred from the store
func (k Keeper) RemoveHighestPerHundred(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HighestPerHundredKey))
	store.Delete(GetHighestPerHundredIDBytes(id))
}

// GetAllHighestPerHundred returns all highestPerHundred
func (k Keeper) GetAllHighestPerHundred(ctx sdk.Context) (list []types.HighestPerHundred) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HighestPerHundredKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HighestPerHundred
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetHighestPerHundredIDBytes returns the byte representation of the ID
func GetHighestPerHundredIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetHighestPerHundredIDFromBytes returns ID in uint64 format from a byte array
func GetHighestPerHundredIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
