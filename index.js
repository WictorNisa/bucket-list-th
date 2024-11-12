const bucketSection = document.querySelector(".list");
const heading = document.querySelector(".owner");

const paragraph = document.createElement("p");
const paragraphTwo = document.createElement("p");
const tempString = document.createElement("p");
const replacedString = document.createElement("p");
const replaceMiddleP = document.createElement("p");

paragraph.innerText = "Own a motorcycle";
paragraphTwo.innerText = "Work in tech";
replacedString.innerText = "Have a healthy life";
replaceMiddleP.innerText = "Make it through life";




const child = bucketSection.querySelector("p");

bucketSection.replaceChild(replacedString, child);



bucketSection.appendChild(paragraph);
bucketSection.insertAdjacentElement("beforeend", paragraphTwo);

console.log(bucketSection.innerHTML);

bucketSection.insertAdjacentHTML(
  "beforeend",
  "<strong>Give back to my parents</strong>"
);

let bucketList = ["Do an ironman", "Create a game", "See aurelius boralis"];

bucketList.forEach((item) => {
  let p = document.createElement("p");
  p.innerText = item;
  bucketSection.appendChild(p);
});

console.log(bucketSection.children);
// 7 items in the list atm

heading.innerText = "Wictors";

// tempString.innerText = 'Temp string';
// bucketSection.innerHTML = tempString

const middleChild = bucketSection.children[2];
bucketSection.replaceChild(replaceMiddleP, middleChild);

const lastChild = bucketSection.lastElementChild
bucketSection.removeChild(lastChild)


