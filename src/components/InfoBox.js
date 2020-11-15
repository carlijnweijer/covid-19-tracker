import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export default function InfoBox({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <Typography variant="h6">{cases}</Typography>
        <Typography color="textSecondary">{total} total</Typography>
      </CardContent>
    </Card>
  );
}
