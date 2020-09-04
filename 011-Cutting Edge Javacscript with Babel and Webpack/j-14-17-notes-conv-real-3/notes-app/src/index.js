import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('1')

// updateNote('6c1b6009-71b3-4f57-aff8-0cfcac929267', {
//     title: 'My note title',
//     body: 'This is the body for my note.'
// })
// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())