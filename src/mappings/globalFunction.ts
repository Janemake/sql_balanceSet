import {SubstrateBlock, SubstrateEvent} from "@subql/types";

//import {Balance} from "@polkadot/types/interfaces";

export function eventId(event: SubstrateEvent): string {
    return `${blockNumber(event)}-${event.idx}`
}

export function eventIdFromBlockAndIdx(blockNumber: string, eventIdx: string) {
    return `${blockNumber}-${eventIdx}`
}

export function blockNumber(event: SubstrateEvent): number {
    return event.block.block.header.number.toNumber()
}

export function timestamp(block: SubstrateBlock): Date {
    return block.timestamp
}


