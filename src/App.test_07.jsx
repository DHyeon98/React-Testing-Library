import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

/**
 * 테스팅 라이브러리와 접근성
 * 1. 접근성
 * - getByRole : 가장 우선적으로 사용할 것을 권장한다.
 * - 접근성 역할(role) 속성을 기준으로 요소를 찾기 때문에, 시각적 화면 사용자나 보조 기술 사용자 모두에게 접근 가능한 쿼리 방식이다.
 * - getByRole을 사용하여 요소를 선택하면, 스크린 리더처럼 요소를 찾기 때문에 접근성을 높일 수 있다
 * - getByRole('button', { name: /regex/i }) : 요소의 이름으로 요소를 찾을 수 있다
 *
 * - getByRole이 사용 불가능한 경우 다음 우선순위로 getByLabelText,
 * getByPlaceholderText, getByText, getByDisplayValue (폼 데이터),
 *  getByAltText (이미지), getByTitle 등을 사용할 수 있다.
 *
 * - 역할 및 접근성 쿼리를 연습하면서 접근성에 대한 이해를 높이는 데 도움이 된다
 */
