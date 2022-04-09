const pokemonList = `audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask`;

const arrayPokemons = pokemonList.split(' ');

const endsWith = word => word[word.length - 1];  //last letter each word
const getCandidates = (words, used) => words.filter(e => !used.includes(e)); //get rid off current word in execution

function options(array, current) {
  let lastLetter = current[current.length - 1]; //o
  return array.filter(el => el !== current)
    .filter(word => word.includes(lastLetter))
    .filter(word => word[0] === lastLetter);
}
// console.log(options(arrayPokemons, 'landorus'));

function optionsWord (pokelist) {
  const options = new Map(); //use Map: https://javascript.info/map-set
  pokelist.forEach(pokeWord => {
    const start = pokeWord[0];
    options.set(start, [...(options.get(start) || []), pokeWord]);
  });
  return options;
};


function main(pokeList) {
  const lookup = optionsWord(pokeList);

  let maxNum = 0;
  let routes = [];

  const parseResult = arr => {
    if (typeof arr[0] === 'object') {
      arr.forEach(el => parseResult(el)) //used recursion
    } else {
      if (arr.length > maxNum) {
        maxNum = arr.length;
        maxPaths = [arr];
      }
      if (arr.length === maxNum) {
        maxPaths.push(arr)
      }
    }
  };

  const searchWords = (word, arr) => {
    const findWords = getCandidates(lookup.get(endsWith(word)) || [], arr);
    // console.log(`words with ${endsWith(word)}`, findWords);
    const result = findWords.length ? findWords.map(poke => searchWords(poke, [...arr, poke])) : arr;  //used recursion
    return result;
  }

  pokeList.forEach(word => {
    const result = searchWords(word, [word]);
    // console.log("result ",result)
    return parseResult(result);
  })

  console.log('Result:', maxPaths[0]);
}

main(arrayPokemons);