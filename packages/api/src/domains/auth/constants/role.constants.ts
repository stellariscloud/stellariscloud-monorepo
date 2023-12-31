import type * as r from 'runtypes'

import { EnumType } from '../../../util/types.util'

export enum PlatformRole {
  /**
   * An unauthenticated user.
   */
  Anonymous = 'ANONYMOUS',

  /**
   * No platform level permissions (community user).
   */
  User = 'USER',

  /**
   * A system microservice, like a server worker
   */
  Service = 'SERVICE',
}

export const PlatformRoleType: r.Runtype<PlatformRole> = EnumType(PlatformRole)

export const PLATFORM_ROLES: Record<PlatformRole, number> = {
  [PlatformRole.Anonymous]: 0,
  [PlatformRole.User]: 1,
  [PlatformRole.Service]: 3,
}
