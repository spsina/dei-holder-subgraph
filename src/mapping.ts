import { BigInt } from "@graphprotocol/graph-ts"
import {
  DEIStablecoin,
  Approval,
  CollateralRatioRefreshed,
  CollateralRatioToggled,
  DEIBurned,
  DEIMinted,
  DEIStepSet,
  DEUSAddressSet,
  DIPSet,
  GrowthRatioBandSet,
  NameAndSymbolSet,
  OracleSet,
  PoolAdded,
  PoolRemoved,
  PriceBandSet,
  RefreshCooldownSet,
  ReserveTrackerSet,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  UseGrowthRatioSet
} from "../generated/DEIStablecoin/DEIStablecoin"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.COLLATERAL_RATIO_PAUSER(...)
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.DEI_bottom_band(...)
  // - contract.DEI_top_band(...)
  // - contract.DIP(...)
  // - contract.DOMAIN_SEPARATOR(...)
  // - contract.GR_bottom_band(...)
  // - contract.GR_top_band(...)
  // - contract.TRUSTY_ROLE(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.collateral_ratio_paused(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.dei_info(...)
  // - contract.dei_pools(...)
  // - contract.dei_pools_array(...)
  // - contract.dei_step(...)
  // - contract.deus_address(...)
  // - contract.genesis_supply(...)
  // - contract.getChainID(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.globalCollateralValue(...)
  // - contract.global_collateral_ratio(...)
  // - contract.growth_ratio(...)
  // - contract.hasRole(...)
  // - contract.increaseAllowance(...)
  // - contract.last_call_time(...)
  // - contract.name(...)
  // - contract.nonces(...)
  // - contract.oracle(...)
  // - contract.refresh_cooldown(...)
  // - contract.reserve_tracker_address(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.use_growth_ratio(...)
  // - contract.verify_price(...)
}

export function handleCollateralRatioRefreshed(
  event: CollateralRatioRefreshed
): void {}

export function handleCollateralRatioToggled(
  event: CollateralRatioToggled
): void {}

export function handleDEIBurned(event: DEIBurned): void {}

export function handleDEIMinted(event: DEIMinted): void {}

export function handleDEIStepSet(event: DEIStepSet): void {}

export function handleDEUSAddressSet(event: DEUSAddressSet): void {}

export function handleDIPSet(event: DIPSet): void {}

export function handleGrowthRatioBandSet(event: GrowthRatioBandSet): void {}

export function handleNameAndSymbolSet(event: NameAndSymbolSet): void {}

export function handleOracleSet(event: OracleSet): void {}

export function handlePoolAdded(event: PoolAdded): void {}

export function handlePoolRemoved(event: PoolRemoved): void {}

export function handlePriceBandSet(event: PriceBandSet): void {}

export function handleRefreshCooldownSet(event: RefreshCooldownSet): void {}

export function handleReserveTrackerSet(event: ReserveTrackerSet): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUseGrowthRatioSet(event: UseGrowthRatioSet): void {}
