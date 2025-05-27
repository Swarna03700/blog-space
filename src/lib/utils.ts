import { DateTime } from "luxon";


export function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-"); // replace spaces with hyphens
  }
 


  export function convertUtcToIst(utcDate: Date){
    const isoString = typeof utcDate === "string" ? utcDate : utcDate.toISOString();
    return DateTime.fromISO(isoString, { zone: "utc"}).setZone("Asia/Kolkata").toFormat("dd-MM-yyyy HH:mm:ss");
  }

  // const utcDate = "2025-05-27T12:04:50Z"; // Example UTC date
  // console.log(convertUtcToIst(utcDate)); 