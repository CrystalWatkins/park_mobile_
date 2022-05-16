import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
//page number is whatever page number the user is on
//pageSize is the number of users we want displayed on a page (unless we are searching)
//items are all of the users that we are going to filter
  const startIndex = (pageNumber - 1) * pageSize; //need the starting index of where to begin "cutting out" the users from the array so to speak
  return _(items).slice(startIndex).take(pageSize).value(); //this returns the only 4 users based on the page number and page size and picks them out of the correct section of the array. Easier to do using lodash!
}