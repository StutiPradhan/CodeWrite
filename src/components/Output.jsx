import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../contextcode/DataContext";

const Container = styled(Box)`
  height: 41vh;
`;

const Output = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  const sourceCode = `
       <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
       </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(sourceCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title='Output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />
    </Container>
  );
};
export default Output;
