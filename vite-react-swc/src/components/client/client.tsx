import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '14ve9gqx',
    dataset: 'production',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: 'v2021-10-21',

  })

// const SanityService = {
//   getPosts : async ()  => {
//     const posts = await client.fetch('*[_type == "post"]{ title, slug, mainImage{asset->{_id, url}, alt}}')
//     return posts
//   }
// }


// export default SanityService;
//   export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
//   }

//   export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
//   }