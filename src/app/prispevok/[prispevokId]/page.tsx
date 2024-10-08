// src/app/prispevok/[id]/page.tsx



import Typography from '@mui/material/Typography';

export const metadata = { title: "Detail príspevku | Zoška snap"};

export default function PostDetail({
  params,
}: {
  params: { prispevokId: string}
}) {

  return (

      <Typography variant="h5" gutterBottom> Detaily prispevku {params.prispevokId} </Typography>

  );
}