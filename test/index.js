import assert from 'assert';
import logger from '../lib';

describe('logger4node', function () {
  it('unit test!', function () {
    logger('can i pass it.');
    assert(true, 'can i pass it.');
  });
});
