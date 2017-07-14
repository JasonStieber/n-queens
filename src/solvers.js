/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var emptyRow = new Array(n);
  emptyRow.fill(0);
  for (var i = 0; i < n; i++) {
    solution.push(emptyRow.slice(0));
  }
  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme fixme
  var Tree = function (row, col) {
    this.pos = [row, col];
    this.children = [];
  };
  var solutionTree = new Tree(-1, 'x');
  var rookTree = function(tree, dnc) {
   // console.log('weve called this function this many times');
    console.log(tree);
    for (var i = 0; i < n; i++) {
      var nDnc = dnc.slice(0);
      nDnc.push(i);
      if (dnc.indexOf(i) === -1) {
        var newRow = tree.pos[0] + 1;
        tree.children.push(new Tree(newRow, i));
        rookTree(tree.children[tree.children.length - 1], nDnc);
      } else {
        tree.children.push('batman');
      } 
    } if (tree.pos[0] === n - 1) {
      console.log('youngest child');
      solutionCount++;
    }
  };
  rookTree(solutionTree, []);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
