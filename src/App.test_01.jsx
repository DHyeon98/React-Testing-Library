import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  // expect : jest나 vitest에서 전역 메서드이다.
  // expect의 인자로 단언할 수 있다.
  // 매처 : 단언 유형을 나타낸다.
  // 매처 인자 : 매처에는 인자가 필요할 때가 있고 없을 때가 있다.
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toBe("hello");
  expect(headingElement).toHaveLength(7);
});

// Jest-DOM을 사용하면 DOM 관련 매처를 더 많이 사용할 수 있다.
