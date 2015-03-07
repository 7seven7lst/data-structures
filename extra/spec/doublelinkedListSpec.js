describe('doubledlinkedList', function() {
  var dlinkedList;

  beforeEach(function() {
    dlinkedList = doubleLinkedList();
  });

  it('"should have methods named "addToHead", "removeTail"', function(){
    expect(dlinkedList.addToHead).to.be.a("function");
    expect(dlinkedList.removeTail).to.be.a("function");
  })

  it('should take a value and add it to front of the list', function() {
    dlinkedList.addToHead(4);
    expect(dlinkedList.head.value).to.equal(4);
    dlinkedList.addToHead(5);
    //console.log("now linklist has ", dlinkedList);
    expect(dlinkedList.head.value).to.equal(5);
  });

  it('should remove the last node from list and return value', function() {
    dlinkedList.addToTail(8);
    dlinkedList.addToTail(10);
    expect(dlinkedList.removeTail()).to.equal(10);
    expect(dlinkedList.tail.value).to.equal(8);
    dlinkedList.addToTail(5);
    expect(dlinkedList.removeTail()).to.equal(5);
    expect(dlinkedList.tail.value).to.equal(8);
    //console.log("removing node, has", dlinkedList);
  });

  it('should have a head and tail', function() {
    expect(dlinkedList).to.have.property("head");
    expect(dlinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dlinkedList.addToTail).to.be.a("function");
    expect(dlinkedList.removeHead).to.be.a("function");
    expect(dlinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.tail.value).to.equal(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.head.value).to.equal(4);
    dlinkedList.removeHead();
    expect(dlinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    dlinkedList.addToTail(4);
    expect(dlinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.contains(4)).to.equal(true);
    expect(dlinkedList.contains(5)).to.equal(true);
    expect(dlinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    dlinkedList.removeHead();
    expect(dlinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dlinkedList
});
