import { expect } from 'chai';
import Node from '../lib/Node.js'


describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should start with an empty child', () => {
    expect(node.child).to.deep.equal({})
  })

  it('should have a "completeWord" property with a default value of null', () => {
    expect(node.completeWord).to.equal(null)
  })
})