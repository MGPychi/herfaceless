import { createSafeActionClient } from "next-safe-action";
import { db } from "@/db";

export const actionClient = createSafeActionClient().use(async({next,ctx})=>{
    return next({ctx:{...ctx,db}})

});
