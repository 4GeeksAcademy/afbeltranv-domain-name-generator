const pronouns = ["my", "our", "your", "her", "his", "their"];
const adjectives = [
  "attractive",
  "bald",
  "beautiful",
  "chubby",
  "clean",
  "dazzling",
  "drab",
  "elegant",
  "fancy",
  "fit",
  "flabby",
  "glamorous",
  "gorgeous",
  "handsome",
  "long",
  "magnificent",
  "muscular",
  "plain",
  "plump",
  "quaint",
  "scruffy",
  "shapely",
  "short",
  "skinny",
  "stocky",
  "ugly",
  "unkempt",
  "unsightly"
];
const noun = [
  "pencil",
  "phone",
  "car",
  "bike",
  "toy",
  "computer",
  "notebook",
  "screen"
];
let k = 0;
for (j in noun) {
  for (i in adjectives) {
    for (h in pronouns) {
      k++;
      console.log(pronouns[h] + adjectives[i] + noun[j] + ".com");
    }
  }
}
console.log("combinaciones: " + k);
console.log("nouns: " + noun.length);
console.log("adjectives: " + adjectives.length);
console.log("pronouns: " + pronouns.length);
