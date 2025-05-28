import { convertUtcToIst } from "@/lib/utils";
import { BlogCardProps } from "@/types/post";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Grid size={6}>
      <Card
        sx={{
          maxWidth: 600,
          height: 350,
          py: 1,
        }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent>
            <Typography sx={{ p: 1 }} variant="h3">
              {post.title}
            </Typography>
            <Typography
              sx={{
                px: 2,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="body2"
            >
              {post.excerpt}
            </Typography>
            <Typography
              sx={{ px: 2, mt: 2 }}
              variant="subtitle2"
              color="success"
            >
              {post.updatedAt
                ? convertUtcToIst(new Date(post.updatedAt))
                : "Unknown date"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
