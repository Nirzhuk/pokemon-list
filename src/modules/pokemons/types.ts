import { APIURLReference } from "../app/types";

export interface Ability {
    ability: APIURLReference;
    is_hidden: boolean;
    slot: number;
}

export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: never; //Not useful types for the test
    versions?: never; //Not useful types for the test
    animated?: Sprites;
}


export interface GameIndex {
    game_index: number;
    version: APIURLReference;
}

export interface HeldItem {
    item: APIURLReference;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity: number;
    version: APIURLReference;
}

export interface Move {
    move: APIURLReference;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: APIURLReference;
    version_group: APIURLReference;
}
export interface Stat {
    base_stat: number;
    effort: number;
    stat: APIURLReference;
}

export interface Type {
    slot: number;
    type: APIURLReference;
}


export interface Form {
    form_name: string;
    form_names: string[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: false;
    name: string;
    names: string[];
    order: number;
    pokemon: APIURLReference;
    sprites: Sprites;
    types: Type[];
    version_group: APIURLReference;
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: APIURLReference[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: APIURLReference;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}