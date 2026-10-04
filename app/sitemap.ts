import type {MetadataRoute} from "next";
import {projectOrder} from "./data/projects";
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://ifeanyid.vercel.app";
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl,changeFrequency:"monthly",priority:1},...projectOrder.map(slug=>({url:siteUrl+"/projects/"+slug,changeFrequency:"monthly" as const,priority:0.8}))]}
