/* exported defaults */
// input: javascript obj
// input: javascript obj
// output: no return, but modifies target
// look over each key in source
// if the source key does not exist in target
// add the property to the target, and assign then source value

function defaults(target, source) {
  for (var sourceKey in source) {
    if (!(sourceKey in target)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
