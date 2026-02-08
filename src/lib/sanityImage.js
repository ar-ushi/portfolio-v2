import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder({
  projectId: "8zirrklc",
  dataset: "production",
})

export function urlFor(source) {
  return builder.image(source)
}
