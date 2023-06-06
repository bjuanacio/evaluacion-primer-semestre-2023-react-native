import { render, screen } from "@testing-library/react-native";
import App from "./App";

describe("App component", () => {
  it("Should render elements", () => {
    const { getByTestId } = render(<App />);

    const title = screen.getByText("Evaluación Semestral 2023");
    expect(title).toBeDefined();

    const color1 = screen.getByText("#FFDD00");
    expect(color1).toBeDefined();

    const color2 = screen.getByText("#0F265C");
    expect(color2).toBeDefined();

    const color3 = screen.getByText("#979797");
    expect(color3).toBeDefined();

    const color4 = screen.getByText("#000000");
    expect(color4).toBeDefined();

    const complete = getByTestId("complete");
    expect(complete).toBeDefined();

    const infoError = getByTestId("info-error");
    expect(infoError).toBeDefined();

    const infoOk = getByTestId("info-ok");
    expect(infoOk).toBeDefined();

    const logoBP = getByTestId("logo-BP");
    expect(logoBP).toBeDefined();

    const apiRestText = screen.getByText(
      "La documentación del API REST la puede ver en el archivo README.md"
    );
    expect(apiRestText).toBeDefined();
  });
});
