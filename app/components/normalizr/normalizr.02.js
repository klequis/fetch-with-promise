import { normalize, schema, arrayOf } from 'normalizr';

const postSchema = new schema.Entity('posts');

/*
 * Normalize simple object
 */
 /*
var post = {
  id:1,
  title: "some title"
};
console.log(normalize(post, postSchema));
const result01 = {
   "entities":{
      "posts":{
         "1":{
            "id":1,
            "title":"some title"
         }
      }
   },
   "result":1
}
*/

/*
 * Normalize array of objects
 */
 var aposts = [
   {
     id:1,
     title: "foo"
   },
   {
     id:2,
     title: "far"
   },
   {
     id:3,
     title: "baz"
   }
 ];

 console.log(normalize(aposts, new schema.Array(postSchema)));
