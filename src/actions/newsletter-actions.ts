"use server";
import { insertNewsLetterSchema, newsLetter } from "@/db/schema";
import { actionClient } from "@/utils/safe-actions";



export const createNewsLetterAction = actionClient.schema(insertNewsLetterSchema).action(async({ctx,parsedInput})=>{
    try{

    await ctx.db.insert(newsLetter).values(parsedInput)
    }catch(err){
        console.error(err)
        return {success:false}
    }
        return {success:true}
})