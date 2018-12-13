const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const blobFunction = require('../../BlobTrigger/index');

const expect = chai.expect

chai.use(sinonChai)

describe('Blob Trigger', () => {
  it('should log information about the uploaded file', async () => {
    const blob = {
      length: 1
    }

    const context = {
      log: sinon.spy(),
      bindingData: {
        name: 'test'
      }
    }

    await blobFunction(context, blob);

    expect(context.log).to.have.been.calledWith(
      'JavaScript blob trigger function processed blob - Name: test; Blob Size: 1 Bytes'
    )
  })
})