/* eslint-env jest */

const transports = {}
export { transports }

const wormhole = {
  open: jest.fn().mockName('open'),
  close: jest.fn().mockName('close'),
  transports,
  getContentForTarget: jest.fn().mockName('getContentForTarget'),
}

export { wormhole }
