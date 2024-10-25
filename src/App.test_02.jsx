import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

// 왜 Vitest를 사용하는가
// - Vitest가 Jest보다 3~5배 빠름
// - Vite가 Vitest와 더 잘 호환됨

// Vitest의 작동과정
// test 메서드는 두 가지 인자를 받는다.
// 1. 테스트의 설명
// 2. 테스트가 통과할지 실패할지 결정하는 함수.
// 테스트 함수에 오류가 발생하면 테스트는 실패함.
// 빈 함수를 적용해도 테스트가 성공함
