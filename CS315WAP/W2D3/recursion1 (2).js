"use strict";
/**
 *
 * @param {string} value a value for the object.
 * @returns {Object} a new object.
 */
// function TreeNode(value) {
//   this.value = value;
//   this.descendents = [];
// }
// // create nodes with values
// const body = new TreeNode(null);

// const div = new TreeNode(null);
// const label = new TreeNode("Name");
// const input = new TreeNode("this was typed by user");
// const p = new TreeNode("This is text in the paragraph");
// // associate root with is descendents
// body.descendents.push(div, p);
// div.descendents.push(label, input);

// /**
//  *
//  * @param {object} node node objects.
//  * @returns{undefined} no return.
//  */
// function displayRecursively(node) {
//   if (node.children === []) {
//     console.log(`${node.name} : ${node.value} `);
//   } else {
//     for (let subNode of node.children) {
//       displayRecursive(subNode);
//     }
//     console.log(`${node.name} : ${node.value} `);
//   }
// }

//displayRecursively(body);

// Using recursive

// function displayRecursive(trees) {
//   if (trees.descendents === []) {
//     console.log(`${trees.name} : ${trees.value}`);
//   } else {
//     for (const subTree of trees.descendents) {
//       displayRecursive(subTree);
//     }
//     console.log(`${trees.name} : ${trees.value}`);
//   }
// }
// displayRecursive(body);

// using iteration

// function displayIterative(trees) {
//   if (trees.descendents != null) {
//     for (const subTree of trees.descendents) {
//       console.log(`${subTree.name}: ${subTree.value}`);
//       if (subTree.descendents != null) {
//         for (const branch of subTree.descendents) {
//           console.log(`${branch.name}: ${branch.value}`);
//         }
//       }
//     }
//   }
// }
// displayIterative(body);

//#2 Return array for the following tree node
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

//using recursion
let collectionOfNames = [];

function displayArray(node) {
  collectionOfNames.push(`${node.name} :${node.value}`);
  if (node.children == null) {
    return collectionOfNames;
  } else {
    for (let element of node.children) {
      let newElement = displayArray(element);
      collectionOfNames = collectionOfNames.concat(newElement);
    }
  }
  return collectionOfNames;
}
console.log(displayArray(node1));

// //Using Iteration
// const COLLECTION_NAMES = [];
// /**
//  *
//  * @param {Object} node list of objects.
//  * @returns{Array} a collection of names.
//  */
// function collectValues(node) {
//   COLLECTION_NAMES.push(`${node.name} : ${node.value}`);
//   if (node.children !== null) {
//     for (const kid of node.children) {
//       COLLECTION_NAMES.push(`${kid.name} : ${kid.value}`);
//       if (kid.children !== null) {
//         for (const baby of kid.children) {
//           COLLECTION_NAMES.push(`${baby.name} : ${baby.value}`);
//         }
//       }
//     }
//   }
//   return COLLECTION_NAMES;
// }

// console.log(collectValues(node1));
