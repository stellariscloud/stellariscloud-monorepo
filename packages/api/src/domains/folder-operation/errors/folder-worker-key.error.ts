import { ServiceErrorCode } from '../../../constants/error-code.constants'
import { HttpStatusCode } from '../../../constants/http.constants'
import { LogLevel } from '../../../constants/logging.constants'
import { HttpError } from '../../../errors/http.error'
import { Log } from '../../../errors/loggable.error'
import { formatErrorCode } from '../../../util/i18n.util'

@Log(LogLevel.Debug, 'stack')
export class FolderWorkerKeyNotFoundError extends Error implements HttpError {
  name = FolderWorkerKeyNotFoundError.name;

  [HttpError.status] = HttpStatusCode.NotFound;
  [HttpError.errors] = [
    formatErrorCode(ServiceErrorCode.FolderWorkerKeyNotFoundError),
  ]
}

@Log(LogLevel.Debug, 'stack')
export class FolderWorkerInvalidError extends Error implements HttpError {
  name = FolderWorkerInvalidError.name;

  [HttpError.status] = HttpStatusCode.BadRequest;
  [HttpError.errors] = [
    formatErrorCode(ServiceErrorCode.FolderWorkerInvalidError),
  ]
}
