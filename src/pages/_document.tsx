import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v14-pagesRouter";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en" style={{ backgroundColor: "#fafbfd" }}>
      <Head />
      <DocumentHeadTags {...props} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
