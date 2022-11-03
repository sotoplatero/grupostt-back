import { db } from '../../../lib/db'

export default eventHandler(async (event) => {

    let commentBody: {
        author: string,
        character_id: number,
        character_name: string,
        comment: string,
        created_at: Date
    } = await useBody(event)

    commentBody = { ...commentBody, created_at: new Date }

    const comment =  await db.put(commentBody);

    return comment
})