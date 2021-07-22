from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "fork_harvester fork_timelord_launcher fork_timelord fork_farmer fork_full_node fork_wallet".split(),
    "node": "fork_full_node".split(),
    "harvester": "fork_harvester".split(),
    "farmer": "fork_harvester fork_farmer fork_full_node fork_wallet".split(),
    "farmer-no-wallet": "fork_harvester fork_farmer fork_full_node".split(),
    "farmer-only": "fork_farmer".split(),
    "timelord": "fork_timelord_launcher fork_timelord fork_full_node".split(),
    "timelord-only": "fork_timelord".split(),
    "timelord-launcher-only": "fork_timelord_launcher".split(),
    "wallet": "fork_wallet fork_full_node".split(),
    "wallet-only": "fork_wallet".split(),
    "introducer": "fork_introducer".split(),
    "simulator": "fork_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
