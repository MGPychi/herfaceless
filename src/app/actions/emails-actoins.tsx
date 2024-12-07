"use server";

import { SuccessEmail } from "@/components/email-template";
import { resend } from "@/lib/resend";

export const sendSuccessEmail = async (email: string) => {
         resend.emails.send({
            from:"contact@hersfaceless.com",
            to:[email],
            subject:"Payment Successful",
            react:<SuccessEmail email={email} userName="chihab"   />,
        })

}