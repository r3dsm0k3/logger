import { WinstonLogger } from './winston-logger'
import { IMock, Mock, Times } from 'typemoq'
import winston from 'winston'

describe('winston-logger', () => {

  let sut: WinstonLogger
  let winstonLogger: IMock<winston.Logger>

  const message = 'log message'
  const data = {}

  beforeEach(() => {
    winstonLogger = Mock.ofType<winston.Logger>()
    sut = new WinstonLogger(
      winstonLogger.object
    )
  })

  it('should log debug to debug', () => {
    sut.debug(message, data)
    winstonLogger.verify(
      w => w.debug(message, data),
      Times.once()
    )
  })

  it('should log trace to verbose', () => {
    sut.trace(message, data)
    winstonLogger.verify(
      w => w.verbose(message, data),
      Times.once()
    )
  })

  it('should log info to info', () => {
    sut.info(message, data)
    winstonLogger.verify(
      w => w.info(message, data),
      Times.once()
    )
  })

  it('should log warn to warn', () => {
    sut.warn(message, data)
    winstonLogger.verify(
      w => w.warn(message, data),
      Times.once()
    )
  })

  it('should log error to error', () => {
    sut.error(message, data)
    winstonLogger.verify(
      w => w.error(message, data),
      Times.once()
    )
  })

  it('should log fatal to crit', () => {
    sut.fatal(message, data)
    winstonLogger.verify(
      w => w.crit(message, data),
      Times.once()
    )
  })

})
