import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/DEIStablecoin/DEIStablecoin";
import { Holder, TransferTransaction } from "../generated/schema";

function createHolder(address: Address): void {
  let _holder = Holder.load(address.toHex());
  if (!_holder) {
    _holder = new Holder(address.toHex());
    _holder.address = address;
    _holder.save();
  }
}

export function handleTransfer(event: Transfer): void {
  let _from = event.params.from;
  let _to = event.params.to;
  let _value = event.params.value;

  createHolder(_from);
  createHolder(_to);

  let tx = new TransferTransaction(event.transaction.hash.toHex());
  tx.from = _from;
  tx.to = _to;
  tx.amount = _value;
  tx.save();
}
