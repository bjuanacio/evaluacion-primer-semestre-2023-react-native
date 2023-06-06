import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: right;
  padding: 40px 20px;
`;

export const Typography = styled.Text`
  font-family: "Arial";
`;

export const IconImage = styled.Image`
  width: 32px;
  height: 32px;
`;

export const BrandImage = styled.Image`
  width: 110px;
  height: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Section = styled.View`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ColorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ColorBox = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 0px 20px;
`;

export const ColorViewBox = styled(ColorBox)`
  background-color: ${(props) => props.theme.bgColor};
`;

export const IconContainer = styled.View`
  flex-direction: column;
`;

export const IconDescription = styled.View`
  flex-direction: column;
  align-items: right;
  margin-bottom: 20px;
`;

export const Code = styled.Text`
  font-family: monospace;
`;
