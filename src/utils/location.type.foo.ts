import Planet from '../assets/png/type/Planet.png'
import Planet2 from '../assets/png/type/planet-earth.png'
import Dream from '../assets/png/type/Dream.png'
import TV from '../assets/png/type/TV.png'
import Box from '../assets/png/type/Box.png'
import Cluster from '../assets/png/type/Cluster.png'
import AcidPlant from '../assets/png/type/Acid Plant.png'
import Asteroid from '../assets/png/type/Asteroid.png'
import Consciousness from '../assets/png/type/Consciousness.png'
import Daycare from '../assets/png/type/Daycare.png'
import Base from '../assets/png/type/Base.png'
import Game from '../assets/png/type/Game.png'
import Hell from '../assets/png/type/Hell.png'
import ElementalRings from '../assets/png/type/Elemental Rings.png'
import Human from '../assets/png/type/Human.png'
import Dimension from '../assets/png/type/Dimension.png'
import Reality from '../assets/png/type/Reality.png'
import unknown from '../assets/png/type/unknown.png'
import Nightmare from '../assets/png/type/Nightmare.png'
import Arcade from '../assets/png/type/Arcade.png'
import Quadrant from '../assets/png/type/Quadrant.png'
import Spa from '../assets/png/type/Spa.png'
import Menagerie from '../assets/png/type/Menagerie.png'
import ArtificiallyGeneratedWorld from '../assets/png/type/Artificially generated world.png'
import Country from '../assets/png/type/Country.png'
import Convention from '../assets/png/type/Convention.png'
import Teenyverse from '../assets/png/type/Teenyverse.png'
import Mount from '../assets/png/type/Mount.png'
import PoliceDepartment from '../assets/png/type/Police Department.png'
import Customs from '../assets/png/type/Customs.png'
import Diegesis from '../assets/png/type/Diegesis.png'
import DeathStar from '../assets/png/type/Death Star.png'
import SpaceStation from '../assets/png/type/Space station.png'
import DwarfPlanet from '../assets/png/type/Dwarf planet.png'
import Spacecraft from '../assets/png/type/Spacecraft.png'
import Resort from '../assets/png/type/Resort.png'
import Woods from '../assets/png/type/Woods.png'
import NonDiegeticAlternativeReality from '../assets/png/type/Non-Diegetic Alternative Reality.png'
import Memory from '../assets/png/type/Memory.png'
import Liquid from '../assets/png/type/Liquid.png'
import FantasyTown from '../assets/png/type/Fantasy town.png'
import Machine from '../assets/png/type/Machine.png'
import Microverse from '../assets/png/type/Microverse.png'
import Quasar from '../assets/png/type/Quasar.png'
import Miniverse from '../assets/png/type/Miniverse.png'
import Space from '../assets/png/type/Space.png'
import defaulticon from '../assets/png/type/default.png'

export const locationTypeFoo = (type: string) => {
    type = type.replaceAll(' ', '').toLowerCase();
    switch (type) {
        case 'quasar':
            return Quasar;
        // break;
        case 'microverse':
            return Microverse;
        // break;
        case 'machine':
            return Machine;
        // break;
        case 'fantasytown':
            return FantasyTown;
        // break;
        case 'liquid':
            return Liquid;
        // break;
        case 'memory':
            return Memory;
        // break;
        case 'non-diegeticalternativereality':
            return NonDiegeticAlternativeReality;
        // break;
        case 'woods':
            return Woods;
        // break;
        case 'resort':
            return Resort;
        // break;
        case 'spacecraft':
            return Spacecraft;
        // break;
        case 'dwarfplanet (celestial dwarf)':
            return DwarfPlanet;
        // break;
        case 'spacestation':
            return SpaceStation;
        // break;
        case 'deathstar':
            return DeathStar;
        // break;
        case 'diegesis':
            return Diegesis;
        // break;
        case 'customs':
            return Customs;
        // break;
        case 'policedepartment':
            return PoliceDepartment;
        // break;
        case 'mount':
            return Mount;
        // break;
        case 'teenyverse':
            return Teenyverse;
        // break;
        case 'country':
            return Country;
        // break;
        case 'convention':
            return Convention;
        // break;
        case 'artificiallygeneratedworld':
            return ArtificiallyGeneratedWorld;
        // break;
        case 'menagerie':
            return Menagerie;
        // break;
        case 'spa':
            return Spa;
        // break;
        case 'quadrant':
            return Quadrant;
        // break;
        case 'arcade':
            return Arcade;
        // break;
        case 'nightmare':
            return Nightmare;
        // break;
        case 'unknown':
            return unknown;
        // break;
        case 'reality':
            return Reality;
        // break;
        case 'dimension':
            return Dimension;
        // break;
        case 'human':
            return Human;
        // break;
        case 'elementalrings':
            return ElementalRings;
        // break;
        case 'hell':
            return Hell;
        // break;
        case 'game':
            return Game;
        // break;
        case 'base':
            return Base;
        // break;
        case 'daycare':
            return Daycare;
        // break;
        case 'consciousness':
            return Consciousness;
        // break;
        case 'asteroid':
            return Asteroid;
        // break;
        case 'acidplant':
            return AcidPlant;
        // break;
        case 'cluster':
            return Cluster;
        // break;
        case 'box':
            return Box;
        // break;
        case 'tv':
            return TV;
        // break;
        case 'dream':
            return Dream;
        // break;
        case 'planet':
            return Planet2;
        // break;
        case 'miniverse':
            return Miniverse;
        // break;
        case 'space':
            return Space;
        // break;
        default:
            return defaulticon

    }
};

