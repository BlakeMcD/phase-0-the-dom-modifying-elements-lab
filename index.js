// Write your code here!
// expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
//document.body.removeChild('main');
const main = document.querySelector("main");
main.remove();

// //   it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
//     expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
// });

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.className = 'victory';
newHeader.innerHTML = "Blake is the champion";
document.body.appendChild(newHeader);