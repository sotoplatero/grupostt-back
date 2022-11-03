import {db} from '../../../lib/db'

export default eventHandler(async ( event )=> {

	const character_id: number = parseInt( event.context.params.id )
    const { items, count } = await db.fetch({ character_id });

  return items
})