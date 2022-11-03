import {db} from '../../lib/db'

export default eventHandler(async ( event )=> {

	let {ids} = useQuery(event)

    // build query format https://docs.deta.sh/docs/base/queries/#or
    const query = ids.map( id => ({ character_id: parseInt(id) }))

    // get comments by ids
    const { items: comments } = await db.fetch(query);

    // search comments by character_id and count
    let counters = {}
    ids.forEach( id => {
        const commentsCount = comments.filter( co => co.character_id == id).length
        counters[id] = commentsCount 
    })

    return counters
})