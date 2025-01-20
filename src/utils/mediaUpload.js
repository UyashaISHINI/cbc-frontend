import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZXVucmRjbmdpaXVjbm9ocXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNzMzNjgsImV4cCI6MjA1Mjc0OTM2OH0.Rb_m44fagfxN2axK2NnV9o7ZDOVXnWR_8nAeEMKWEHE`

const url = "https://smeunrdcngiiucnohqpo.supabase.co";

const supabase = createClient(url, key)

export default function uploadMediaToSupabase(file) {

    return new Promise((resolve, reject) => {
        if (file == null) {
            reject("File not added")
        }
        let fileName = file.name;
        const extension = fileName.split(".")[fileName.split(".").length - 1]

        const timestamp = new Date().getTime()

        fileName = timestamp +file.name+ "." + extension
        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch((err)=>{
            reject(err);
        });

    });
}
