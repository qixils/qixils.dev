export type Blog = {
  slug: string,
  title: string,
  description: string,
  published: number,
}

export type Blogs = Blog[]

export const blogs: Blogs = [
  {
    slug: "ewow-tools",
    title: "TWOW/EWOW tools",
    description: "Various web tools developed for the online competition series Ten Words of Wisdom / Eleven Words of Wisdom.",
    published: Date.UTC(2024, 7, 7, 14, 0, 0)
  },
  {
    slug: "captioning-in-premiere-pro",
    title: "Captioning for YouTube in Adobe Premiere Pro",
    description: "An exhaustive guide to creating captions/subtitles for YouTube videos in Adobe Premiere Pro with the help of Aegisub.",
    published: Date.UTC(2023, 11, 29, 18, 12, 37)
  }
]
