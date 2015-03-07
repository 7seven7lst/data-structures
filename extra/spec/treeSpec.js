describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", and removeFromParent, a property named "value", and a property named "parent', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should remove parent from tree', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var removedChild=tree.removeFromParent(tree.children[0]);
    //console.log(removedChild);
    expect(removedChild.value).to.equal(5);   /// ????????????????
    expect(removedChild.children[0].value).to.equal(7);

  });

  it('should pass a callback function on every value in the tree', function() {
    var result;
    tree.addChild(5);
    // tree.addChild(6);
    // tree.addChild(7);
    // tree.addChild(8);    
    function double(node){
      return result = (node*2);
    }
    tree.traverse(double);
    expect(result).to.equal(10);
  });


  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});