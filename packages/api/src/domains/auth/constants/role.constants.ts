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
  Authenticated = 'AUTHENTICATED',

  /**
   * Full read and write access to platform resources. Can also manage other
   * user platform permissions.
   */
  Admin = 'ADMIN',
}

export const PlatformRoleType: r.Runtype<PlatformRole> = EnumType(PlatformRole)

export const PLATFORM_ROLES: Record<PlatformRole, number> = {
  [PlatformRole.Anonymous]: 0,
  [PlatformRole.Authenticated]: 1,
  [PlatformRole.Admin]: 2,
}
