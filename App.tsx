import {
  Typography,
  BrandImage,
  IconImage,
  Container,
  Title,
  Section,
  SectionTitle,
  ColorContainer,
  ColorViewBox,
  IconDescription,
  Code,
  IconContainer,
} from "./app.styles";

function App() {
  return (
    <Container>
      <Title>Evaluación Semestral 2023</Title>
      <Section>
        <SectionTitle>Colores</SectionTitle>
        <ColorContainer>
          <Typography>Primario</Typography>
          <ColorViewBox theme={{ bgColor: "#FFDD00" }} />
          <Code>#FFDD00</Code>
        </ColorContainer>
        <ColorContainer>
          <Typography>Secundario</Typography>
          <ColorViewBox theme={{ bgColor: "#0F265C" }} />
          <Code>#0F265C</Code>
        </ColorContainer>
        <ColorContainer>
          <Typography>Gris</Typography>
          <ColorViewBox theme={{ bgColor: "#979797" }} />
          <Code>#979797</Code>
        </ColorContainer>
        <ColorContainer>
          <Typography>Negro</Typography>
          <ColorViewBox theme={{ bgColor: "#000000" }} />
          <Code>#000000</Code>
        </ColorContainer>
      </Section>
      <Section>
        <SectionTitle>Íconos</SectionTitle>
        <IconContainer>
          <IconDescription>
            <IconImage
              testID="complete"
              source={require("./src/assets/complete.png")}
            />
            <Typography>Complete icon</Typography>
          </IconDescription>
          <IconDescription>
            <IconImage
              testID="info-error"
              source={require("./src/assets/info-error.png")}
            />
            <Typography>Info error icon</Typography>
          </IconDescription>
          <IconDescription>
            <IconImage
              testID="info-ok"
              source={require("./src/assets/info-ok.png")}
            />
            <Typography>Info ok icon</Typography>
          </IconDescription>
          <IconDescription>
            <BrandImage
              testID="logo-BP"
              source={require("./src/assets/logo-BP.png")}
            />
            <Typography>Logo Banco Pichincha</Typography>
          </IconDescription>
        </IconContainer>
      </Section>
      <Section>
        <SectionTitle>API REST</SectionTitle>
        <Typography>
          Ejecute el servidor en local con el siguiente comando:{" "}
          <Code>yarn serve</Code>
        </Typography>
        <Typography>
          La documentación del API REST la puede ver en el archivo README.md
        </Typography>
      </Section>
    </Container>
  );
}

export default App;
