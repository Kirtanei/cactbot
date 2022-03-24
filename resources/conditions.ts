// For consistency with Responses, Conditions
// are also functions.

import { RaidbossData as Data } from '../types/data';
import { TargetedMatches } from '../types/trigger';
import { Static } from './static';

export default {
  targetIsYou(): (data: Data, matches: TargetedMatches) => boolean {
    return (data: Data, matches: TargetedMatches) => data.me === matches?.target;
  },
  targetIsNotYou(): (data: Data, matches: TargetedMatches) => boolean {
    return (data: Data, matches: TargetedMatches) => data.me !== matches?.target;
  },
  caresAboutAOE(): (data: Data) => boolean {
    return (data: Data) =>
      data.role === 'tank' || data.role === 'healer' || data.CanAddle() || data.job === 'BLU';
  },
  caresAboutMagical(): (data: Data) => boolean {
    return (data: Data) =>
      data.role === 'tank' || data.role === 'healer' || data.CanAddle() || data.job === 'BLU';
  },
  caresAboutPhysical(): (data: Data) => boolean {
    return (data: Data) =>
      data.role === 'tank' || data.role === 'healer' || data.CanFeint() || data.job === 'BLU';
  },
  caresAboutPhys(): (data: Data) => boolean {
    return (data: Data) =>
      data.role === 'tank' || data.role === 'healer' || data.CanFeint() || data.job === 'BLU';
  },
  isEnabled(staticGroup: Static, encounter: string, mechanic: string): (data: Data) => boolean {
    return (data: Data) =>
      staticGroup.encounters.find(enc => enc.name === encounter)!.
        mechanics.find(mec => mec.name === mechanic)!.
        enabled.includes(data.me);
  },
};
