import { expect } from 'chai';
import Node from '../lib/Node.js'


describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should start with a data property with a default value of null', () => {
    expect(node.data).to.equal(null)
  })

  it('should be able to take in data', () => {
    node = new Node('nodesRule!')
    expect(node.data).to.equal('nodesRule!')
  })

  it('should start with an empty child', () => {
    expect(node.child).to.deep.equal({})
  })

  it('should have a "completeWord" property with a default value of null', () => {
    expect(node.completeWord).to.equal(null)
  })
})