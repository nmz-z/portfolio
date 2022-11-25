export default function Head({ title }: {
  title: React.ReactNode
}) {
  return (
    <head>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </head>
  )
}
