import { ServiceErrorCode } from '../../../constants/error-code.constants'
import { HttpStatusCode } from '../../../constants/http.constants'
import { LogLevel } from '../../../constants/logging.constants'
import { HttpError } from '../../../errors/http.error'
import { Log } from '../../../errors/loggable.error'
import { formatErrorCode } from '../../../util/i18n.util'

@Log(LogLevel.Debug, 'stack')
export class ServerConfigurationNotFoundError
  extends Error
  implements HttpError
{
  name = ServerConfigurationNotFoundError.name;

  [HttpError.status] = HttpStatusCode.NotFound;
  [HttpError.errors] = [
    formatErrorCode(ServiceErrorCode.ServerConfigurationNotFoundError),
  ]
}

@Log(LogLevel.Debug, 'stack')
export class ServerConfigurationInvalidError
  extends Error
  implements HttpError
{
  name = ServerConfigurationInvalidError.name;

  [HttpError.status] = HttpStatusCode.BadRequest;
  [HttpError.errors] = [
    formatErrorCode(ServiceErrorCode.ServerConfigurationInvalidError),
  ]
}
